const FormData = require('form-data')
const axios = require("axios");
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;

const CartModel = require('../models/CartModel')
const ProfileModel = require('../models/ProfileModel')
const InvoiceModel = require('../models/InvoiceModel')
const InvoiceProductModel = require('../models/InvoiceProductModel')
const PaymentSettingModel = require('../models/PaymentSettingModel')
const TableModel = require('../models/TableModel')
const PickUpModel = require('../models/PickUpModel')

exports.SaveInvoiceSetting = async (req,res)=>{
    try{
        let reqBody = req.body;
        let data = await PaymentSettingModel.create(reqBody)
        res.status(200).json({status:"success",data:data})
    }catch (e) {
        res.status(200).json({status:"fail",data:e.toString()})
    }
}

exports.UpdateInvoiceSetting = async (req,res)=>{
    try{
        let settingID = new ObjectId(req.params.settingID);
        let reqBody = req.body;
        let data = await PaymentSettingModel.updateOne({_id:settingID}, reqBody)
        res.status(200).json({status:"success",data:data})
    }catch (e) {
        res.status(200).json({status:"fail",data:e.toString()})
    }
}

exports.ReadInvoiceSetting = async (req,res)=>{
    try{
        let settingID = new ObjectId(req.params.settingID);
        let data = await PaymentSettingModel.findOne({_id:settingID})
        res.status(200).json({status:"success",data:data})
    }catch (e) {
        res.status(200).json({status:"fail",data:e.toString()})
    }
}

exports.RemoveInvoiceSetting = async (req,res)=>{
    try{
        let settingID = new ObjectId(req.params.settingID);
        let data = await PaymentSettingModel.deleteOne({_id:settingID})
        res.status(200).json({status:"success",data:data})
    }catch (e) {
        res.status(200).json({status:"fail",data:e.toString()})
    }
}

exports.CreateOnTableInvoice = async (req,res)=>{
    try{
        let userID = new ObjectId(req.headers.userID)
        let cus_email = req.headers.email;
        let reqBody = req.body;

        // Stage:1 Calculate Total Payable & Vat

        let MatchStage = {$match:{userID:userID}}
        let JoinWithProduct = {$lookup:{from:"products", localField:"productID", foreignField:"_id", as:"product"}}
        let UnwindStage = {$unwind:"$product"}

        let CartProducts = await CartModel.aggregate([
            MatchStage, JoinWithProduct, UnwindStage
        ])

        let TotalAmount = 0;
        CartProducts.forEach((element)=>{
            let price;
            if(element['product']['discount']){
                price = parseFloat(element['product']['discountPrice'])
            }else{
                price = parseFloat(element['product']['price'])
            }
            TotalAmount += element['qty']*price
        })

        let vat = TotalAmount* 0.05 // 5% vat
        let payable = TotalAmount+vat

        // Stage:2 Prepare Customer Details & Shipping Details

        let profile = await ProfileModel.aggregate([MatchStage])
        let cus_details = `Name: ${profile[0]['cus_name']}, Email: ${cus_email}, Address: ${profile[0]['cus_add']}, Phone: ${profile[0]['cus_phone']}`
        let ship_details = `Name: ${profile[0]['cus_name']}, Email: ${cus_email}, Address: ${profile[0]['ship_add']}, Phone: ${profile[0]['ship_phone']}`

        // Stage:3 Transaction & Other's

        let tran_id = Math.floor(100000000000+Math.random()*900000000000)
        let val_id = 0;
        let payment_status = "pending"
        let delivery_status = "pending"

        // Stage:4 Create Invoice

        let Invoice = await InvoiceModel.create({
            userID: userID,
            cus_details: cus_details,
            ship_details: ship_details,
            tran_id: tran_id,
            val_id: val_id,

            serving_Method:'On Table',
            delivery_status: delivery_status,
            payment_status: payment_status,

            total: TotalAmount,
            vat: vat,
            shipping:0,
            payable: payable,
        })

        // Stage:5 Create Product Invoice

        let Invoice_id = Invoice['_id'];

        CartProducts.forEach(async (element)=>{
            await InvoiceProductModel.create({
                userID: userID,
                invoiceID: Invoice_id,
                productID: element['product']['_id'],
                qty: element['qty'],
                price: element['product']['price'],
                size: element['size'],
            })
        })

        // Stage:6 Create Table

        let Table = await TableModel.create({
            userID:userID,
            invoiceID: Invoice_id,
            name: profile[0]['cus_name'],
            email: cus_email,
            phone: reqBody['phone'],
            table_No: reqBody['table_No'],
            waiter_Name: reqBody['waiter_Name'],
            order_Notes: reqBody['order_Notes'],
        })

        // Stage:7 Delete Cart List

        await CartModel.deleteMany({userID:userID})

        // Stage:8 SSL Payment Interrogation
        let settings = await PaymentSettingModel.find()

        let form = new FormData()

        form.append('store_id', settings[0]['store_id'])
        form.append('store_passwd', settings[0]['store_passwd'])
        form.append('total_amount', payable.toString())
        form.append('currency', settings[0]['currency'])
        form.append('tran_id', tran_id)

        form.append('success_url', `${settings[0]['success_url']}/${tran_id}`)
        form.append('fail_url', `${settings[0]['fail_url']}/${tran_id}`)
        form.append('cancel_url', `${settings[0]['cancel_url']}/${tran_id}`)
        form.append('ipn_url', `${settings[0]['ipn_url']}/${tran_id}`)

        form.append('cus_name', profile[0]['cus_name'])
        form.append('cus_email',cus_email)
        form.append('cus_add1',profile[0]['cus_add'])
        form.append('cus_add2',profile[0]['cus_add'])
        form.append('cus_city',profile[0]['cus_city'])
        form.append('cus_state',profile[0]['cus_state'])
        form.append('cus_postcode',profile[0]['cus_postcode'])
        form.append('cus_country',profile[0]['cus_country'])
        form.append('cus_phone',profile[0]['cus_phone'])
        form.append('cus_fax',profile[0]['cus_phone'])

        form.append('shipping_method', "YES")
        form.append('ship_name', profile[0]['ship_name'])
        form.append('ship_add1',profile[0]['ship_add'])
        form.append('ship_add2',profile[0]['ship_add'])
        form.append('ship_city',profile[0]['ship_city'])
        form.append('ship_state',profile[0]['ship_state'])
        form.append('ship_country',profile[0]['ship_country'])
        form.append('ship_postcode',profile[0]['ship_postcode'])

        form.append('product_name','According Invoice')
        form.append('product_category','According Invoice')
        form.append('product_profile','According Invoice')
        form.append('product_amount','According Invoice')

        let SSLResponse = await axios.post(settings[0]['init_url'], form)

        res.status(200).json({status: "success", data: SSLResponse.data})
    }
    catch (e) {
        res.status(200).json({status: "fail", data: e.toString()})
    }
}

exports.CreatePickUpInvoice = async (req,res)=>{
    try{
        let userID = new ObjectId(req.headers.userID)
        let cus_email = req.headers.email;
        let reqBody = req.body;

        // Stage:1 Calculate Total Payable & Vat

        let MatchStage = {$match:{userID:userID}}
        let JoinWithProduct = {$lookup:{from:"products", localField:"productID", foreignField:"_id", as:"product"}}
        let UnwindStage = {$unwind:"$product"}

        let CartProducts = await CartModel.aggregate([
            MatchStage, JoinWithProduct, UnwindStage
        ])

        let TotalAmount = 0;
        CartProducts.forEach((element)=>{
            let price;
            if(element['product']['discount']){
                price = parseFloat(element['product']['discountPrice'])
            }else{
                price = parseFloat(element['product']['price'])
            }
            TotalAmount += element['qty']*price
        })

        let vat = TotalAmount* 0.05 // 5% vat
        let payable = TotalAmount+vat

        // Stage:2 Prepare Customer Details & Shipping Details

        let profile = await ProfileModel.aggregate([MatchStage])
        let cus_details = `Name: ${profile[0]['cus_name']}, Email: ${cus_email}, Address: ${profile[0]['cus_add']}, Phone: ${profile[0]['cus_phone']}`
        let ship_details = `Name: ${profile[0]['cus_name']}, Email: ${cus_email}, Address: ${profile[0]['ship_add']}, Phone: ${profile[0]['ship_phone']}`

        // Stage:3 Transaction & Other's

        let tran_id = Math.floor(100000000000+Math.random()*900000000000)
        let val_id = 0;
        let payment_status = "pending"
        let delivery_status = "pending"

        // Stage:4 Create Invoice

        let Invoice = await InvoiceModel.create({
            userID: userID,
            cus_details: cus_details,
            ship_details: ship_details,
            tran_id: tran_id,
            val_id: val_id,

            serving_Method:'Pick Up',
            delivery_status: delivery_status,
            payment_status: payment_status,

            total: TotalAmount,
            vat: vat,
            shipping:0,
            payable: payable,
        })

        // Stage:5 Create Product Invoice

        let Invoice_id = Invoice['_id'];

        CartProducts.forEach(async (element)=>{
            await InvoiceProductModel.create({
                userID: userID,
                invoiceID: Invoice_id,
                productID: element['product']['_id'],
                qty: element['qty'],
                price: element['product']['price'],
                size: element['size'],
            })
        })

        // Stage:6 Create Pickup

        await PickUpModel.create({
            userID:userID,
            invoiceID: Invoice_id,
            name: profile[0]['cus_name'],
            email: cus_email,
            phone: reqBody['phone'],
            pickup_Date: reqBody['pickup_Date'],
            pickup_Time: reqBody['pickup_Time'],
            order_Notes: reqBody['order_Notes'],
        })

        // Stage:7 Delete Cart List

        await CartModel.deleteMany({userID:userID})

        // Stage:8 SSL Payment Interrogation
        let settings = await PaymentSettingModel.find()

        let form = new FormData()

        form.append('store_id', settings[0]['store_id'])
        form.append('store_passwd', settings[0]['store_passwd'])
        form.append('total_amount', payable.toString())
        form.append('currency', settings[0]['currency'])
        form.append('tran_id', tran_id)

        form.append('success_url', `${settings[0]['success_url']}/${tran_id}`)
        form.append('fail_url', `${settings[0]['fail_url']}/${tran_id}`)
        form.append('cancel_url', `${settings[0]['cancel_url']}/${tran_id}`)
        form.append('ipn_url', `${settings[0]['ipn_url']}/${tran_id}`)

        form.append('cus_name', profile[0]['cus_name'])
        form.append('cus_email',cus_email)
        form.append('cus_add1',profile[0]['cus_add'])
        form.append('cus_add2',profile[0]['cus_add'])
        form.append('cus_city',profile[0]['cus_city'])
        form.append('cus_state',profile[0]['cus_state'])
        form.append('cus_postcode',profile[0]['cus_postcode'])
        form.append('cus_country',profile[0]['cus_country'])
        form.append('cus_phone',profile[0]['cus_phone'])
        form.append('cus_fax',profile[0]['cus_phone'])

        form.append('shipping_method', "YES")
        form.append('ship_name', profile[0]['ship_name'])
        form.append('ship_add1',profile[0]['ship_add'])
        form.append('ship_add2',profile[0]['ship_add'])
        form.append('ship_city',profile[0]['ship_city'])
        form.append('ship_state',profile[0]['ship_state'])
        form.append('ship_country',profile[0]['ship_country'])
        form.append('ship_postcode',profile[0]['ship_postcode'])

        form.append('product_name','According Invoice')
        form.append('product_category','According Invoice')
        form.append('product_profile','According Invoice')
        form.append('product_amount','According Invoice')

        let SSLResponse = await axios.post(settings[0]['init_url'], form)

        res.status(200).json({status: "success", data: SSLResponse.data})
    }
    catch (e) {
        res.status(200).json({status: "fail", data: e.toString()})
    }
}

exports.CreateHomeDeliveryInvoice = async (req,res)=>{
    try{
        let userID = new ObjectId(req.headers.userID)
        let cus_email = req.headers.email;
        let reqBody = req.body;

        // Stage:1 Calculate Total Payable & Vat

        let MatchStage = {$match:{userID:userID}}
        let JoinWithProduct = {$lookup:{from:"products", localField:"productID", foreignField:"_id", as:"product"}}
        let UnwindStage = {$unwind:"$product"}

        let CartProducts = await CartModel.aggregate([
            MatchStage, JoinWithProduct, UnwindStage
        ])

        let TotalAmount = 0;
        CartProducts.forEach((element)=>{
            let price;
            if(element['product']['discount']){
                price = parseFloat(element['product']['discountPrice'])
            }else{
                price = parseFloat(element['product']['price'])
            }
            TotalAmount += element['qty']*price
        })

        let vat = TotalAmount* 0.05 // 5% vat
        let shipping = 1
        let payable = TotalAmount+vat+shipping

        // Stage:2 Prepare Customer Details & Shipping Details

        let profile = await ProfileModel.aggregate([MatchStage])
        let cus_details = `Name: ${profile[0]['cus_name']}, Email: ${cus_email}, Address: ${profile[0]['cus_add']}, Phone: ${profile[0]['cus_phone']}`
        let ship_details = `Name: ${profile[0]['cus_name']}, Email: ${cus_email}, Address: ${profile[0]['ship_add']}, Phone: ${profile[0]['ship_phone']}`

        // Stage:3 Transaction & Other's

        let tran_id = Math.floor(100000000000+Math.random()*900000000000)
        let val_id = 0;
        let payment_status = "pending"
        let delivery_status = "pending"

        // Stage:4 Create Invoice

        let Invoice = await InvoiceModel.create({
            userID: userID,
            cus_details: cus_details,
            ship_details: ship_details,
            tran_id: tran_id,
            val_id: val_id,

            serving_Method:'Home Delivery',
            delivery_status: delivery_status,
            payment_status: payment_status,

            total: TotalAmount,
            vat: vat,
            shipping: shipping,
            payable: payable,
        })

        // Stage:5 Create Product Invoice

        let Invoice_id = Invoice['_id'];

        CartProducts.forEach(async (element)=>{
            await InvoiceProductModel.create({
                userID: userID,
                invoiceID: Invoice_id,
                productID: element['product']['_id'],
                qty: element['qty'],
                price: element['product']['price'],
                size: element['size'],
            })
        })

        // Stage:6 Delete Cart List

        await CartModel.deleteMany({userID:userID})

        // Stage:7 SSL Payment Interrogation
        let settings = await PaymentSettingModel.find()

        let form = new FormData()

        form.append('store_id', settings[0]['store_id'])
        form.append('store_passwd', settings[0]['store_passwd'])
        form.append('total_amount', payable.toString())
        form.append('currency', settings[0]['currency'])
        form.append('tran_id', tran_id)

        form.append('success_url', `${settings[0]['success_url']}/${tran_id}`)
        form.append('fail_url', `${settings[0]['fail_url']}/${tran_id}`)
        form.append('cancel_url', `${settings[0]['cancel_url']}/${tran_id}`)
        form.append('ipn_url', `${settings[0]['ipn_url']}/${tran_id}`)

        form.append('cus_name', profile[0]['cus_name'])
        form.append('cus_email',cus_email)
        form.append('cus_add1',profile[0]['cus_add'])
        form.append('cus_add2',profile[0]['cus_add'])
        form.append('cus_city',profile[0]['cus_city'])
        form.append('cus_state',profile[0]['cus_state'])
        form.append('cus_postcode',profile[0]['cus_postcode'])
        form.append('cus_country',profile[0]['cus_country'])
        form.append('cus_phone',profile[0]['cus_phone'])
        form.append('cus_fax',profile[0]['cus_phone'])

        form.append('shipping_method', "YES")
        form.append('ship_name', profile[0]['ship_name'])
        form.append('ship_add1',profile[0]['ship_add'])
        form.append('ship_add2',profile[0]['ship_add'])
        form.append('ship_city',profile[0]['ship_city'])
        form.append('ship_state',profile[0]['ship_state'])
        form.append('ship_country',profile[0]['ship_country'])
        form.append('ship_postcode',profile[0]['ship_postcode'])

        form.append('product_name','According Invoice')
        form.append('product_category','According Invoice')
        form.append('product_profile','According Invoice')
        form.append('product_amount','According Invoice')

        let SSLResponse = await axios.post(settings[0]['init_url'], form)

        res.status(200).json({status: "success", data: SSLResponse.data})
    }
    catch (e) {
        res.status(200).json({status: "fail", data: e.toString()})
    }
}

exports.PaymentSuccess = async (req,res)=>{
    try{
        let trxID = req.params.trxID;
        await InvoiceModel.updateOne({tran_id:trxID}, {payment_status:"success"})
        return res.redirect('/orders')
    }
    catch (e) {
        res.status(200).json({status:"fail", data:"Something Wrong"})
    }
}

exports.PaymentFail = async (req,res)=>{
    try{
        let trxID = req.params.trxID;
        await InvoiceModel.updateOne({tran_id:trxID}, {payment_status:"fail"})
        return res.redirect('/orders')
    }
    catch (e) {
        res.status(200).json({status:"fail", data:"Something Wrong"})
    }
}

exports.PaymentCancel = async (req,res)=>{
    try{
        let trxID = req.params.trxID;
        await InvoiceModel.updateOne({tran_id:trxID}, {payment_status:"fail"})
        return res.redirect('/orders')
    }
    catch (e) {
        res.status(200).json({status:"fail", data:"Something Wrong"})
    }
}

exports.PaymentIPN = async (req,res)=>{
    try{
        let trxID = req.params.trxID;
        await InvoiceModel.updateOne({tran_id:trxID}, {payment_status:"fail"})
        return res.redirect('/orders')
    }
    catch (e) {
        res.status(200).json({status:"fail", data:"Something Wrong"})
    }
}

exports.InvoiceList = async (req,res)=>{
    try{
        let userID = new ObjectId(req.headers.userID);
        let data = await InvoiceModel.find({userID:userID,payment_status:'success'})
        res.status(200).json({status:"success", data: data})
    }
    catch (e) {
        res.status(200).json({status:"fail", data: e.toString()})
    }
}

exports.InvoiceDetails = async (req,res)=>{
    try{
        let userID = new ObjectId(req.headers.userID);
        let invoiceID = new ObjectId(req.params.invoiceID);
        let MatchStage = {$match: {userID:userID, invoiceID:invoiceID}}

        //Invoice details
        let invoice = await InvoiceModel.findOne({userID:userID,_id:invoiceID})

        // Product details
        let JoinStage = {$lookup: {from: "products", localField: "productID", foreignField: "_id", as: "product"}}
        let UnwindStage = {$unwind: "$product"}

        let product = await InvoiceProductModel.aggregate([
            MatchStage,JoinStage,UnwindStage
        ])
        res.status(200).json({status:"success", invoice:invoice, product: product})
    }
    catch (e) {
        res.status(200).json({status:"fail", data: e.toString()})
    }
}

exports.UpdateDeliveryStatus = async (req,res)=>{
    try{
        let trxID = req.params.trxID;
        let status = req.params.status;
        let data = await InvoiceModel.updateOne({tran_id:trxID}, {delivery_status:status})
        res.status(200).json({status:"success", data:data})
    }
    catch (e) {
        res.status(200).json({status:"fail", data:e.toString()})
    }
}






