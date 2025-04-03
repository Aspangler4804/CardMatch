//Trying to use typescript since it is industry standard now

import mongoose from 'mongoose';

interface FinancialRecord {
    userId: string;
    date: Date;
    description: string;
    amount: number;
    category: string;
    paymentMethod: string;
    status: string;
    createdAt: Date;
}


const PaymentSchema = new mongoose.Schema<FinancialRecord>({
    userId: {type: String, required: true},
    date: {type: Date, required: true},
    description: {type: String, require: true},
    amount: {type: Number, required: true},
    category: {type: String, required: true},
    paymentMethod: {type: String, required: true},
    status: {type:String, default: 'Pending'},
    createdAt: {type: Date, default: Date.now }
});


export default mongoose.model('Payment', PaymentSchema);