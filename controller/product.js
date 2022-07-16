const Product = require("../model/product");                                            // Import product model file

// Get all product list
const getProductList = async (req, res, next) => {
    try{
        const findAll = await Product.findAll()
        res.status(200).send(findAll);
        console.log("SUCCESSFULLY RETRIEVED!");
    }
    catch (error) {
        err => console.log(err);
        next();
    }
}

// Get product by it's id
const getProductById = async (req, res, next) => {
    const prodId = req.params.id;
    const findByPk = await Product.findByPk(prodId)
    try{
        if(!findByPk){
            res.status(404).send({message: `The product id = ${prodId} does not exist!`});
            console.log("RETRIEVING UNSUCCESSFUL!");
        }
        else{
            res.status(200).send(findByPk);
            console.log("RETRIEVING SUCCESSFUL!");
        }
    }
    catch (error){
        err => console.log(err);
        next();
    }
}

// Add new product
const addNewProduct = async (req, res, next) => {
    const name = req.body.name;
    const price = req.body.price;
    const brand = req.body.brand;
    const mfgDate = req.body.mfgDate;
    const exDate = req.body.exDate;
    const product = {
        name: name,
        price: price,
        brand: brand,
        mfgDate: mfgDate,
        exDate:exDate
    }
    const data = await Product.create(product)                                                          // This will save to DB
    try{
        res.status(200).send(data);
        //console.log(data);
        console.log("SUCCESSFULLY CREATED PRODUCT!");
    }
    catch (error){
        err => console.log(err);
        next();
    }
}

// Update an existing product details
const updateProduct = async (req, res, next) => {
    const prodId = req.params.id;
    await Product.update(req.body, {
        where: {id: prodId}
    })
    try{
        res.status(200).send({message: "Updated successfully!"});
        console.log("UPDATED SUCCESSFULLY!");
    }
    catch (error){
        err => console.log(err);
        next();
    }
}

// Delete a product
const deleteProduct = async (req, res, next) => {
    const prodId = req.params.id;
    const product = await Product.findByPk(prodId)
    try{
        if(!product){
            res.status(404).send({message: `Product id = ${prodId} does not exist!`});
            console.log("DELETE UNSUCCESSFUL!");
        }
        else{
            console.log("DELETED SUCCESSFULLY!");
            res.status(200).send({message: `Deleted successfully!`});
            await product.destroy();
        }
    }
    catch (error){
        err => console.log(err);
        next();
    }
}

// Delete all products
const deleteAllProducts = async (req, res, next) => {
    await Product.destroy({
        where: {},
        truncate: false
    })
    try {
        res.status(200).send({message: "All products deleted from the database!"});
        console.log("ALL PRODUCTS DELETED SUCCESSFULLY!");
    }
    catch (error){
        err => console.log(err);
        next();
    }
}

module.exports = {
    getProductList,
    getProductById,
    addNewProduct,
    updateProduct,
    deleteProduct,
    deleteAllProducts
}