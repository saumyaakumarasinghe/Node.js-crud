const Order = require("../model/order");
const sequelize = require("../util/database");

// Working
const getAllOrders = async (req, res, next) => {
    try{
        const query = "SELECT * FROM orders" ;
        const findAll = await sequelize.query(query, {
            type: sequelize.QueryTypes.SELECT,
        });
        res.status(200).send(findAll);
        console.log("SUCCESSFULLY RETRIEVED!");
    }
    catch (error) {
        err => console.log(err);
        next();
    }
}

// Working
const getOrderById = async (req, res, next) => {
    const orderId = req.params.id;
    const query = `SELECT * FROM orders WHERE id = ${orderId}`;
    const findByPk = await sequelize.query(query, {
        type: sequelize.QueryTypes.SELECT,
    })
    try{
        if(!findByPk){
            res.status(404).send({message: `The order id = ${orderId} does not exist!`});
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

// Not Working 
const addOrder = async (req, res, next) => {
    const date = req.body.date;
    const order = {
        date: date
    }
    const query = "INSERT INTO orders SET?";
    const data = await sequelize.query(query, {
        type: sequelize.QueryTypes.INSERT,
    })
    try{
        res.status(200).send(data);
        console.log("SUCCESSFULLY CREATED PRODUCT!");
    }
    catch (error){
        err => console.log(err);
        next();
    }
}

// Not Working
const updateOrder = async (req, res, next) => {
    const orderId = req.params.id;
    const query = `UPDATE orders SET date=? WHERE id = ${orderId}`;
    await sequelize.query(query, [res.date, orderId], {
        type: sequelize.QueryTypes.UPDATE,
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

// Not Working
const deleteOrder = async (req, res, next) => {
    const orderId = req.params.id;
    const query = `DELETE FROM orders WHERE id = ${orderId}`;
    const order = await sequelize.query(query, {
        type: sequelize.QueryTypes.DELETE,
    })
    try{
        if(!order){
            res.status(404).send({message: `Order id = ${orderId} does not exist!`});
            console.log("DELETE UNSUCCESSFUL!");
        }
        else{
            console.log("DELETED SUCCESSFULLY!");
            res.status(200).send({message: `Deleted successfully!`});
            await order.destroy();
        }
    }
    catch (error){
        err => console.log(err);
        next();
    }
}

module.exports = {
    getAllOrders,
    getOrderById,
    addOrder,
    updateOrder,
    deleteOrder
}