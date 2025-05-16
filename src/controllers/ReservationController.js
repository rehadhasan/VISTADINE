const ReservationModel = require('../models/ReservationModel')
const mongoose = require('mongoose')
let ObjectId = mongoose.Types.ObjectId;

exports.SaveReservation = async (req, res) => {
    try{
        let userID = new ObjectId(req.headers.userID);
        let reqBody = req.body;
        reqBody['userID'] = userID;
        let data = await ReservationModel.create(reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.ReadReservation = async (req, res) => {
    try{
        let reservationID = new ObjectId(req.params.reservationID);
        let userID = new ObjectId(req.headers.userID);
        let data = await ReservationModel.findOne({userID:userID,_id:reservationID});
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.UpdateReservation = async (req, res) => {
    try{
        let reservationID = new ObjectId(req.params.reservationID);
        let userID = new ObjectId(req.headers.userID);
        let reqBody = req.body;
        let data = await ReservationModel.updateOne({userID:userID,_id:reservationID},reqBody)
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.RemoveReservation = async (req, res) => {
    try{
        let reservationID = new ObjectId(req.params.reservationID);
        let userID = new ObjectId(req.headers.userID);
        let data = await ReservationModel.deleteOne({userID:userID,_id:reservationID});
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}

exports.ReservationList = async (req, res) => {
    try{
        let userID = new ObjectId(req.headers.userID);
        let data = await ReservationModel.find({userID:userID})
        res.status(200).json({status:'success',data:data})
    }catch (e) {
        res.status(200).json({status:'fail',data:e.toString()})
    }
}