const { loginHandle } = require("../controller/loginController")

const router=require("express").Router()
router.route("/").post(loginHandle)
module.exports = router;