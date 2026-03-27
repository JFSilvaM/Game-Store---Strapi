"use strict";

module.exports = () => ({
  stripe: {
    secretKey: process.env.STRIPE_SECRET_KEY,
  },
});
