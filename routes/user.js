const express = require("express");                                 // Import the express framework
const {body} = require("express-validator/check");

const router = express.Router();                                    // Create express router obj

const usertController = require("../controller/user");         // Import procudt controller file
const User = require("../model/user");

// router.post("/signup", usertController.signup);
router.put("/signup", [
    body("email")
    .isEmail()
    .withMessage("Please enter  valid email.")
    .custom((value, {req}) => {
        return User.findOne({email: value})
        .then(userDoc => {
            if(userDoc){
                return Promise.reject("Email address already exists!");
            }
        });
    })
        .normalizeEmail(),
    body("password")
        .trim()
        .isLength({min: 5}),
    body("name")
        .trim()
        .not()
        .isEmpty()
    ], 
    usertController.signup
);

module.exports = router;                                            // Add index.js to the module.exports obj