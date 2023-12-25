const { Router } = require("express");

const auth = require("../middleware/auth");

const router_authentification = Router();

//////////////////// Authentification Controllers ////////////////////
const AuthentificationControler = require("../controllers/AuthentificationControler");

router_authentification.post("/api/login", AuthentificationControler.login);

router_authentification.post(
  "/api/register",
  AuthentificationControler.register
);

router_authentification.get("/api/me", auth, AuthentificationControler.me);

module.exports = router_authentification;
