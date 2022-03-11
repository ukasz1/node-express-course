const stripe = require('stripe')(process.env.STRIPE_KEY)

//NOT FINISHED

const stripeController = async (req, res) => {
  console.log(req.body)
  res.send('stripe route')
}

module.exports = stripeController