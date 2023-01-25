import  User from "../models/users.model.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";

export const login = (req, res, next) => {

    let hashedpass = crypto.createHash("sha512").update(req.body.pass).digest("hex");

    User.findOne({ user: req.body.user, pass: hashedpass}, (err, user) => {
        let response = {token: null}

        if(user !== null){
            response.token = jwt.sign({
                id: user._id,
                user: user.user
            }, "__recret__", {
                expiresIn:'2h'
            })
        }
        res.json(response);
    })
}

export const createUser = (req, res, next) => {
    let hashedpass = crypto.createHash("sha512").update(req.body.pass).digest("hex");

    let user = new User({
        user: req.body.user,
        pass: hashedpass
    })

    user.save((err, user) => {
        res.json(user);
    })
}