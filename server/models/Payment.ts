//Trying to use typescript since it is industry standard now

import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
    amount: Number,
    currency: String,
    status: {type:String, default: 'Pending'},
    createdAt: {type: DataTransfer, default: Date.now }
});

export default mongoose.model('Payment', PaymentSchema);