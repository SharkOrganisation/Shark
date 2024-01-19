import { Request, Response } from "express";
import stripe from "stripe";
import dotenv from "dotenv";

const stripeClient = new stripe(
  "sk_test_51OZEfiH6PIz9b3Jmm4PRtQ9YMaNPGEehBerLYqdVrtiq9hMeGmOUwYQ4lW7QIEgCaCx7Y6OGsfMZwiAMUZOF1h6g00LiDCP0iS",
  {
    apiVersion: "2023-10-16",
  }
);

export const createPaymentIntent = async (req: Request, res: Response) => {

  try {
     // Use an existing Customer ID if this is a returning customer.
  const customer = await stripeClient.customers.create();
  const ephemeralKey = await stripeClient.ephemeralKeys.create(
    {customer: customer.id},
    {apiVersion: '2023-10-16'}
  );


    const paymentIntent = await stripeClient.paymentIntents.create({
      amount: req.body.amount,
      currency : 'usd',
      automatic_payment_methods: {
        enabled: true
      }
    });

    res.json({ 
        paymentIntent: paymentIntent.client_secret,
        ephemeralKey: ephemeralKey.secret,
        customer: customer.id,
        publishableKey:"pk_test_51OZEfiH6PIz9b3JmefGizu6JOqL1NoKap1KNDkrsf0NXyf0Jc7mwr7CLtbVvHMYdzCOnkIQ6qya6yh4dPte536bi00GBMIlpuI"
     });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
