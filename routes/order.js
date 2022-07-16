const express = require("express");

const router = express.Router();

const orderController = require("../controller/order");

router.get("/view/all", orderController.getAllOrders);
router.get("/view/:id", orderController.getOrderById);
router.post("/add", orderController.addOrder);
router.put("/update/:id", orderController.updateOrder);
router.delete("/delete/:id", orderController.deleteOrder);

module.exports = router;