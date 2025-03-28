import express from "express";
import {
  createCheckoutSession,
  handleWebhook,
  retrieveSessionStatus,
} from "../application/payment";
import bodyParser from "body-parser";

const paymentsRouter = express.Router();

paymentsRouter.route("/create-checkout-session").post(createCheckoutSession);
paymentsRouter.route("/session-status").get(retrieveSessionStatus);

export default paymentsRouter;
