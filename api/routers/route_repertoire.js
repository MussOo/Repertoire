const { Router } = require("express");

const auth = require("../middleware/auth");

const route = Router();

//////////////////// RepertoireControler Controllers ////////////////////
const RepertoireControler = require("../controllers/RepertoireControler");

route.get("/api/repertoire", auth, RepertoireControler.index);
route.post("/api/repertoire", auth, RepertoireControler.insert);

route.get("/api/repertoire/:id", auth, RepertoireControler.getOne);
route.put("/api/repertoire/:id", auth, RepertoireControler.update);
route.delete("/api/repertoire/:id", auth, RepertoireControler.delete);

module.exports = route;
