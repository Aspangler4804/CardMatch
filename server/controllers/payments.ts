import Payment from '../models/Payment.ts';

//@desc     Get payment information
//@route    GET /api/payments
//@access   Public?
export const getPayments = async (req, res, next)=>{
    try{
        const { amount, currency } = req.body;
        const payment = new Payment({amount, currency});
        await payment.save();
        res.satus(201).json(payment);
    }catch(error){
        next(error);
    }
}

    
   