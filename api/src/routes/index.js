// third party imports
const router = require("express").Router();

// routes
const userRouter = require("./User.routes");
const AdminRoute = require("./Admin.routes");
const BibleRouter = require("./biblerouter");
const BMRouter = require("./b-and-m-router");
const CodRouter = require("./cod.router");
// routes usage
router.use("/user", userRouter);
router.use("/user", AdminRoute);
router.use("/bible", BibleRouter);
router.use("/b-and-m", BMRouter);
router.use("/cod", CodRouter);

module.exports = router;
