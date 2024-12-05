const prisma = require("../config/prisma");
const stripe = require('stripe')('sk_test_51QQ3PMDK8sxTrFvjbJKP4qRGUHn4mHfMain3g9OJS7WIsQWVNKsMYNYYncXvmnTa0di74UsyxYPLFHUKoKMMccY900QSlg4X9K');


exports.payment = async (req, res) => {
  try {
    //code
    const cart = await prisma.cart.findFirst({
        where: {
            orderedById: req.user.id
        }
    })
    const amountTHB = cart.cartTotal * 100
    
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountTHB,
      currency: "thb",
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
      // [Dev] for demo purpose only
    
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
}