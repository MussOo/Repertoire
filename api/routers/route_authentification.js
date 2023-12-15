const { Router } = require("express");

const auth = require("../middleware/auth");

const router_authentification = Router();

//////////////////// Authentification Controllers ////////////////////
const AuthentificationControler = require("../controllers/AuthentificationControler");

module.exports = router_authentification;
