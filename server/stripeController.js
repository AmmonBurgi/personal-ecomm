const stripe = require('stripe')(`${process.env.STRIPE_SECRET}`)
module.exports = {
    payIntent: async (req, res) => {
        const {price} = req.query
        console.log(price)
        const paymentIntent = await stripe.paymentIntents.create({
            amount: price,
            currency: 'usd',
            metadata: {integration_check: 'accept_a_payment'}
        });
        res.status(200).send(paymentIntent.client_secret)
    }
}