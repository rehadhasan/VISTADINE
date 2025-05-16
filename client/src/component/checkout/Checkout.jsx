// src/components/Checkout.js
import React, {useState} from 'react';
import CartStore from "../../store/CartStore.js";
import toast from "react-hot-toast";
import UserStore from "../../store/UserStore.js";
import InvoiceStore from "../../store/InvoiceStore.js";

const Checkout = () => {
    const {CartList,CartCount, CartTotal,CartVAT,CartPayable} = CartStore()
    const {ReadProfileRequest, ProfileDetails,UpdateProfileRequest} = UserStore()
    const {CreateHomeDeliveryInvoice,CreatePickUpInvoice,CreateOnTableInvoice} = InvoiceStore()

    const [servingMethod, setServingMethod] = useState('homeDelivery');
    const [formData, setFormData] = useState({
        homeDelivery: {
            cus_name: ProfileDetails ? ProfileDetails.cus_name : "",
            cus_add: ProfileDetails ? ProfileDetails.cus_add : "",
            cus_city: ProfileDetails ? ProfileDetails.cus_city : "",
            cus_state: ProfileDetails ? ProfileDetails.cus_state : "",
            cus_postcode: ProfileDetails ? ProfileDetails.cus_postcode : "",
            cus_country: ProfileDetails ? ProfileDetails.cus_country : "",
            cus_phone: ProfileDetails ? ProfileDetails.cus_phone : "",
            cus_fax: ProfileDetails ? ProfileDetails.cus_fax : "",
            ship_name: ProfileDetails ? ProfileDetails.ship_name : "",
            ship_add: ProfileDetails ? ProfileDetails.ship_add : "",
            ship_city: ProfileDetails ? ProfileDetails.ship_city : "",
            ship_state: ProfileDetails ? ProfileDetails.ship_state : "",
            ship_postcode: ProfileDetails ? ProfileDetails.ship_postcode : "",
            ship_country: ProfileDetails ? ProfileDetails.ship_country : "",
            ship_phone: ProfileDetails ? ProfileDetails.ship_phone : "",
        },
        pickUp: {
            phone: '',
            pickup_Date: '',
            pickup_Time: '',
            order_Notes: '',
        },
        onTable: {
            phone: '',
            table_No: '',
            waiter_Name: '',
            order_Notes: '',
        },
    });
    const [paymentMethod, setPaymentMethod] = useState('Pay Online');


    // Handle input change
    const handleInputChange = (e, section) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [name]: value,
            },
        }));
    };

    // Handle serving method change
    const handleServingMethodChange = (method) => {
        setServingMethod(method);
    };

    // Handle payment method change
    const handlePaymentChange = (method) => {
        setPaymentMethod(method);
    };

    const handleProfile = async () => {
        if(!formData.homeDelivery.cus_name || !formData.homeDelivery.cus_add || !formData.homeDelivery.cus_city || !formData.homeDelivery.cus_state || !formData.homeDelivery.cus_postcode ||
            !formData.homeDelivery.cus_country || !formData.homeDelivery.cus_phone || !formData.homeDelivery.cus_fax || !formData.homeDelivery.ship_name || !formData.homeDelivery.ship_add ||
            !formData.homeDelivery.ship_city || !formData.homeDelivery.ship_country || !formData.homeDelivery.ship_postcode || !formData.homeDelivery.ship_phone || !formData.homeDelivery.ship_state){
            toast.error("Input Field Is Required !")
        }else{
            let res = await UpdateProfileRequest(formData.homeDelivery)
            if(res){
                toast.success("Your Profile Save Successfully.")
                await ReadProfileRequest()
            }else{
                toast.error("Something Went Wrong !")
            }
        }
    }

    const PlaceOrder = async () => {
        if(ProfileDetails !== {}){
            if(paymentMethod === "Pay Online" && servingMethod === "homeDelivery"){
                await CreateHomeDeliveryInvoice()
            }else if(paymentMethod === "Pay Online" && servingMethod === "pickUp"){
                await CreatePickUpInvoice(formData.pickUp)
            }else if(paymentMethod === "Pay Online" && servingMethod === "onTable"){
                await CreateOnTableInvoice(formData.onTable)
            }else{
                toast.error("Server Can't Response Yet !")
            }
        }else{
            toast.error("Complete Profile First !")
        }
    }

    return (
        <section className='bg-white'>
            <div className="max-w-4xl mx-auto px-3 py-16">
                {/* Serving Method Selection */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4 text-black">Serving Method</h3>
                    <div className="flex gap-4">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="onTable"
                                checked={servingMethod === 'onTable'}
                                onChange={() => handleServingMethodChange('onTable')}
                                className="form-radio"
                            />
                            <span className='text-black'>On Table</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="pickUp"
                                checked={servingMethod === 'pickUp'}
                                onChange={() => handleServingMethodChange('pickUp')}
                                className="form-radio"
                            />
                            <span className='text-black'>Pick Up</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="homeDelivery"
                                checked={servingMethod === 'homeDelivery'}
                                onChange={() => handleServingMethodChange('homeDelivery')}
                                className="form-radio"
                            />
                            <span className='text-black'>Home Delivery</span>
                        </label>
                    </div>
                </div>

                {/* Render Dynamic Form Fields Based on Serving Method */}
                {servingMethod === 'homeDelivery' && (
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-4 text-black">Home Delivery Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold mb-1 capitalize text-black">
                                    Your Name*
                                </label>
                                <input
                                    type="text"
                                    name="cus_name"
                                    id="cus_name"
                                    value={formData.homeDelivery.cus_name}
                                    onChange={(e) => handleInputChange(e, 'homeDelivery')}
                                    className="bg-white focus:bg-white text-black focus:text-black border border-primary focus:border-primary rounded-md outline-none focus:outline-none w-full px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1 capitalize text-black">
                                    Your Address*
                                </label>
                                <input
                                    type="text"
                                    name="cus_add"
                                    id="cus_add"
                                    value={formData.homeDelivery.cus_add}
                                    onChange={(e) => handleInputChange(e, 'homeDelivery')}
                                    className="bg-white focus:bg-white text-black focus:text-black border border-primary focus:border-primary rounded-md outline-none focus:outline-none w-full px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1 capitalize text-black">
                                    Your City*
                                </label>
                                <input
                                    type="text"
                                    name="cus_city"
                                    id="cus_city"
                                    value={formData.homeDelivery.cus_city}
                                    onChange={(e) => handleInputChange(e, 'homeDelivery')}
                                    className="bg-white focus:bg-white text-black focus:text-black border border-primary focus:border-primary rounded-md outline-none focus:outline-none w-full px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1 capitalize text-black">
                                    Your State*
                                </label>
                                <input
                                    type="text"
                                    name="cus_state"
                                    id="cus_state"
                                    value={formData.homeDelivery.cus_state}
                                    onChange={(e) => handleInputChange(e, 'homeDelivery')}
                                    className="bg-white focus:bg-white text-black focus:text-black border border-primary focus:border-primary rounded-md outline-none focus:outline-none w-full px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1 capitalize text-black">
                                    Your Post Code*
                                </label>
                                <input
                                    type="number"
                                    name="cus_postcode"
                                    id="cus_postcode"
                                    value={formData.homeDelivery.cus_postcode}
                                    onChange={(e) => handleInputChange(e, 'homeDelivery')}
                                    className="bg-white focus:bg-white text-black focus:text-black border border-primary focus:border-primary rounded-md outline-none focus:outline-none w-full px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1 capitalize text-black">
                                    Your Country*
                                </label>
                                <input
                                    type="text"
                                    name="cus_country"
                                    id="cus_country"
                                    value={formData.homeDelivery.cus_country}
                                    onChange={(e) => handleInputChange(e, 'homeDelivery')}
                                    className="bg-white focus:bg-white text-black focus:text-black border border-primary focus:border-primary rounded-md outline-none focus:outline-none w-full px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1 capitalize text-black">
                                    Your Phone*
                                </label>
                                <input
                                    type="number"
                                    name="cus_phone"
                                    id="cus_phone"
                                    value={formData.homeDelivery.cus_phone}
                                    onChange={(e) => handleInputChange(e, 'homeDelivery')}
                                    className="bg-white focus:bg-white text-black focus:text-black border border-primary focus:border-primary rounded-md outline-none focus:outline-none w-full px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1 capitalize text-black">
                                    Your Fax*
                                </label>
                                <input
                                    type="number"
                                    name="cus_fax"
                                    id="cus_fax"
                                    value={formData.homeDelivery.cus_fax}
                                    onChange={(e) => handleInputChange(e, 'homeDelivery')}
                                    className="bg-white focus:bg-white text-black focus:text-black border border-primary focus:border-primary rounded-md outline-none focus:outline-none w-full px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1 capitalize text-black">
                                    Shipping Name*
                                </label>
                                <input
                                    type="text"
                                    name="ship_name"
                                    id="ship_name"
                                    value={formData.homeDelivery.ship_name}
                                    onChange={(e) => handleInputChange(e, 'homeDelivery')}
                                    className="bg-white focus:bg-white text-black focus:text-black border border-primary focus:border-primary rounded-md outline-none focus:outline-none w-full px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1 capitalize text-black">
                                    Shipping Address*
                                </label>
                                <input
                                    type="text"
                                    name="ship_add"
                                    id="ship_add"
                                    value={formData.homeDelivery.ship_add}
                                    onChange={(e) => handleInputChange(e, 'homeDelivery')}
                                    className="bg-white focus:bg-white text-black focus:text-black border border-primary focus:border-primary rounded-md outline-none focus:outline-none w-full px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1 capitalize text-black">
                                    Shipping City*
                                </label>
                                <input
                                    type="text"
                                    name="ship_city"
                                    id="ship_city"
                                    value={formData.homeDelivery.ship_city}
                                    onChange={(e) => handleInputChange(e, 'homeDelivery')}
                                    className="bg-white focus:bg-white text-black focus:text-black border border-primary focus:border-primary rounded-md outline-none focus:outline-none w-full px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1 capitalize text-black">
                                    Shipping State*
                                </label>
                                <input
                                    type="text"
                                    name="ship_state"
                                    id="ship_state"
                                    value={formData.homeDelivery.ship_state}
                                    onChange={(e) => handleInputChange(e, 'homeDelivery')}
                                    className="bg-white focus:bg-white text-black focus:text-black border border-primary focus:border-primary rounded-md outline-none focus:outline-none w-full px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1 capitalize text-black">
                                    Shipping Post Code*
                                </label>
                                <input
                                    type="number"
                                    name="ship_postcode"
                                    id="ship_postcode"
                                    value={formData.homeDelivery.ship_postcode}
                                    onChange={(e) => handleInputChange(e, 'homeDelivery')}
                                    className="bg-white focus:bg-white text-black focus:text-black border border-primary focus:border-primary rounded-md outline-none focus:outline-none w-full px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1 capitalize text-black">
                                    Shipping Country*
                                </label>
                                <input
                                    type="text"
                                    name="ship_country"
                                    id="ship_country"
                                    value={formData.homeDelivery.ship_country}
                                    onChange={(e) => handleInputChange(e, 'homeDelivery')}
                                    className="bg-white focus:bg-white text-black focus:text-black border border-primary focus:border-primary rounded-md outline-none focus:outline-none w-full px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1 capitalize text-black">
                                    Shipping Phone*
                                </label>
                                <input
                                    type="number"
                                    name="ship_phone"
                                    id="ship_phone"
                                    value={formData.homeDelivery.ship_phone}
                                    onChange={(e) => handleInputChange(e, 'homeDelivery')}
                                    className="bg-white focus:bg-white text-black focus:text-black border border-primary focus:border-primary rounded-md outline-none focus:outline-none w-full px-3 py-2"
                                />
                            </div>
                        </div>
                        <button onClick={handleProfile} className='px-10 py-3 bg-primary text-white rounded mt-5'>Submit</button>
                    </div>
                )}

                {servingMethod === 'pickUp' && (
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-4 text-black">Pick Up Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold mb-1 capitalize text-black">
                                    Pickup Phone*
                                </label>
                                <input
                                    type="number"
                                    name="phone"
                                    id="phone"
                                    value={formData.pickUp.phone}
                                    onChange={(e) => handleInputChange(e, 'pickUp')}
                                    className="bg-white focus:bg-white text-black focus:text-black border border-primary focus:border-primary rounded-md outline-none focus:outline-none w-full px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1 capitalize text-black">
                                    Pickup Date*
                                </label>
                                <input
                                    type="date"
                                    name="pickup_Date"
                                    id="pickup_Date"
                                    value={formData.pickUp.pickup_Date}
                                    onChange={(e) => handleInputChange(e, 'pickUp')}
                                    className="bg-white focus:bg-white text-black focus:text-black border border-primary focus:border-primary rounded-md outline-none focus:outline-none w-full px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1 capitalize text-black">
                                    Pickup Time*
                                </label>
                                <input
                                    type="time"
                                    name="pickup_Time"
                                    id="pickup_Time"
                                    value={formData.pickUp.pickup_Time}
                                    onChange={(e) => handleInputChange(e, 'pickUp')}
                                    className="bg-white focus:bg-white text-black focus:text-black border border-primary focus:border-primary rounded-md outline-none focus:outline-none w-full px-3 py-2"
                                />
                            </div>
                        </div>
                        <div className='mt-4'>
                            <label className="block text-sm font-semibold mb-1 capitalize text-black">
                                Notes
                            </label>
                            <textarea
                                name="order_Notes"
                                id="order_Notes"
                                value={formData.pickUp.order_Notes}
                                onChange={(e) => handleInputChange(e, 'pickUp')}
                                className="bg-white focus:bg-white text-black focus:text-black border border-primary focus:border-primary rounded-md outline-none focus:outline-none w-full px-3 py-2"
                            />
                        </div>
                    </div>
                )}

                {servingMethod === 'onTable' && (
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-4 text-black">On Table Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold mb-1 capitalize text-black">
                                    Phone*
                                </label>
                                <input
                                    type="number"
                                    name="phone"
                                    id="phone"
                                    value={formData.onTable.phone}
                                    onChange={(e) => handleInputChange(e, 'onTable')}
                                    className="bg-white focus:bg-white text-black focus:text-black border border-primary focus:border-primary rounded-md outline-none focus:outline-none w-full px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1 capitalize text-black">
                                    Table No*
                                </label>
                                <select
                                    name="table_No"
                                    id="table_No"
                                    value={formData.onTable.table_No}
                                    onChange={(e) => handleInputChange(e, 'onTable')}
                                    className="bg-white focus:bg-white text-black focus:text-black border border-primary focus:border-primary rounded-md outline-none focus:outline-none w-full px-3 py-2"
                                >
                                    <option value={''} defaultChecked={true}>Select</option>
                                    <option value={'table 1'}>Table 1</option>
                                    <option value={'table 2'}>Table 2</option>
                                    <option value={'table 3'}>Table 3</option>
                                    <option value={'table 4'}>Table 4</option>
                                    <option value={'table 5'}>Table 5</option>
                                    <option value={'table 6'}>Table 6</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1 capitalize text-black">
                                    Waiter Name
                                </label>
                                <select
                                    type="text"
                                    name="waiter_Name"
                                    id="waiter_Name"
                                    value={formData.onTable.waiter_Name}
                                    onChange={(e) => handleInputChange(e, 'onTable')}
                                    className="bg-white focus:bg-white text-black focus:text-black border border-primary focus:border-primary rounded-md outline-none focus:outline-none w-full px-3 py-2"
                                >
                                    <option value={''} defaultChecked={true}>Select</option>
                                    <option value={'Water 1'}>Water 1</option>
                                    <option value={'Water 2'}>Water 2</option>
                                    <option value={'Water 3'}>Water 3</option>
                                    <option value={'Water 4'}>Water 4</option>
                                    <option value={'Water 5'}>Water 5</option>
                                    <option value={'Water 6'}>Water 6</option>
                                </select>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <label className="block text-sm font-semibold mb-1 capitalize text-black">
                                Note
                            </label>
                            <textarea
                                name="order_Notes"
                                id="order_Notes"
                                value={formData.onTable.order_Notes}
                                onChange={(e) => handleInputChange(e, 'onTable')}
                                className="bg-white focus:bg-white text-black focus:text-black border border-primary focus:border-primary rounded-md outline-none focus:outline-none w-full px-3 py-2"
                            />
                        </div>
                    </div>
                )}

                {/* Order Summary */}
                <h3 className="text-lg font-semibold mb-4 text-black">Order Summery</h3>
                <div className="overflow-x-auto mb-6">
                    <table className="min-w-full max-w-4xl bg-white border border-black border-opacity-20">
                        <thead>
                        <tr className='text-black bg-black bg-opacity-10 whitespace-nowrap'>
                            <th className="p-4 text-left border-b">Image</th>
                            <th className="p-4 text-left border-b">Product</th>
                            <th className="p-4 text-left border-b">Qty</th>
                            <th className="p-4 text-left border-b">Discount</th>
                            <th className="p-4 text-left border-b">Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            CartCount === 0?(
                                <tr>
                                    <td colSpan="6" className="p-4 text-center">
                                        {/* Display OrderDetailsSkeleton Loader or No Items Message */}
                                        <div className="text-black text-opacity-60">No items in the cart yet.</div>
                                    </td>
                                </tr>
                            ):(
                                CartList.map((item, index) => (
                                    <tr key={index}>
                                        <td className="p-4 border-b">
                                            <img src={item['product'].image} alt={item['product'].name}
                                                 className="w-16 h-16 object-cover rounded"/>
                                        </td>
                                        <td className="p-4 border-b text-black">{item['product'].name}</td>
                                        <td className="p-4 border-b text-black">{item.qty}</td>
                                        <td className="p-4 border-b text-black">
                                            -
                                            ${item['product'].discount ? `${item['product'].price - item['product'].discountPrice}` : 0}.00
                                        </td>
                                        <td className="p-4 border-b text-black">
                                            ${item['product'].discount ? item['product'].discountPrice : item['product'].price}.00
                                        </td>
                                    </tr>
                                ))
                            )
                        }
                        </tbody>
                        <tfoot>
                        <tr>
                            <td className="p-4"></td>
                            <td className="p-4"></td>
                            <td className="p-4"></td>
                            <td className="p-4 font-semibold text-black">Total</td>
                            <td className="p-4 font-semibold text-black">
                                ${CartTotal.toFixed(2)}
                            </td>
                        </tr>
                        </tfoot>
                    </table>
                </div>

                {/* Payment Summary */}
                <div className='flex items-center justify-end'>
                    <div className="w-1/3 p-4">
                        <table className="w-full text-left">
                            <tbody>
                            <tr className="border-b">
                                <td className="py-2 px-4 font-medium">Total Amount</td>
                                <td className="py-2 px-4 text-right">${CartTotal.toFixed(2)}</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2 px-4 font-medium">VAT (5%)</td>
                                <td className="py-2 px-4 text-right">${CartVAT.toFixed(2)}</td>
                            </tr>
                            <tr className="border-b">
                                <td className="py-2 px-4 font-medium">Home Delivery Charge</td>
                                <td className="py-2 px-4 text-right">${CartCount !== 0?(servingMethod === 'homeDelivery'?(1):(0)):(0).toFixed(2)}</td>
                            </tr>
                            <tr className="border-t font-bold">
                                <td className="py-2 px-4">Payable Amount</td>
                                <td className="py-2 px-4 text-right">${CartCount !== 0?(servingMethod === 'homeDelivery'?(CartPayable+1):(CartPayable)):(0).toFixed(2)}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Payment Method Selection */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4 text-black">Payment Method</h3>
                    <div className="flex gap-4">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Pay Online"
                                checked={paymentMethod === 'Pay Online'}
                                onChange={() => handlePaymentChange('Pay Online')}
                                className="form-radio"
                            />
                            <span className='text-black'>Pay Online</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                value="Cash On Delivery"
                                checked={paymentMethod === 'Cash On Delivery'}
                                onChange={() => handlePaymentChange('Cash On Delivery')}
                                className="form-radio"
                            />
                            <span className='text-black'>Cash On Delivery</span>
                        </label>
                    </div>
                </div>

                {/* Place Order Button */}
                {
                    CartCount === 0?(
                        <div className="mb-6">
                            <button
                                disabled={true}
                                className="bg-black bg-opacity-30 text-black px-4 py-2 rounded-md cursor-not-allowed">
                                Place Order
                            </button>
                        </div>
                    ): (
                        <div className="mb-6">
                            <button
                                onClick={PlaceOrder}
                                className="bg-primary text-white px-4 py-2 rounded-md">
                                Place Order
                            </button>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default Checkout;
