const stripe = require('stripe')(`${process.env.STRIPE_SECRET}`)
module.exports = {
    payIntent: async (req, res) => {
        const {price, email} = req.query
        const paymentIntent = await stripe.paymentIntents.create({
            amount: (price * 100),
            currency: 'usd',
            receipt_email: email,
            metadata: {integration_check: 'accept_a_payment'}
        });
        res.status(200).send(paymentIntent.client_secret)
    }
}