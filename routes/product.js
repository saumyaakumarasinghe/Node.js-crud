const express = require("express");                                 // Import the express framework

const router = express.Router();                                    // Create express router obj

const productController = require("../controller/product");         // Import procudt controller file

router.get("/view/all", productController.getProductList);          // Get all product
router.get("/view/:id", productController.getProductById);          // Get product by id
router.post("/add", productController.addNewProduct);               // Create  a new product
router.put("/update/:id", productController.updateProduct);         // Update an existing product
router.delete("/delete/all", productController.deleteAllProducts);  // Delete all existing products
router.delete("/delete/:id", productController.deleteProduct);      // Delete an existing product

module.exports = router;                                            // Add index.js to the module.exports obj