import User from "../model/User.js";
import nodemailer from "nodemailer";
import { encryptPassword, compare } from "../utils/password.js";

export const createUser = (req, res, next) => {
    const userInfo = req.body;
    encryptPassword(userInfo.password).then((hashedPassword) => {
        userInfo.password = hashedPassword;
        const user = new User(userInfo);
        user
            .save()
            .then((user) => {
                res.status(201).json({ message: "Your account created" });
            })
            .catch((err) => {
                res.status(400).json({ message: "There is problem with database" });
            });
    });
};

export const updateUser = (req, res) => {
    const newInfo = req.body;
    User.findByIdAndUpdate(newInfo.id, newInfo)
        .then(() => res.json({ message: "Your account has been updated" }))
        .catch((err) => {
            res.status(400).json({ message: "There is problem with database" });
        });
};

export const deleteUser = (req, res) => {
    const userID = req.body.id;
    User.findByIdAndRemove(userID)
        .exec()
        .then(() => res.json({ message: "Your account has been delted" }))
        .catch((err) => {
            res.status(400).json({ message: "There is problem with database" });
        });
};

export const loginUser = (req, res) => {
    const userInfo = req.body;
    // console.log({ userInfo }) // nice way to debug
    User.findOne({ email: userInfo.email })
        .exec()
        .then((user) => {
            if (user === undefined) {
                res
                    .status(404)
                    .json({ message: "this user does not exist in out DB pls sign up" });
            } else {
                compare(userInfo.password, user.password).then((isValid) => {
                    if (isValid === true) {
                        res.status(200).json({ message: "Welcome" });
                    } else {
                        res.status(401).json({ message: "Your password is wrong" });
                    }
                });
            }
        })
        .catch((err) => {
            res.status(400).json({ message: "There is problem with database" });
        });
};

// const sendEmail = () => {
//     const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//             user: "gmc2022test@outlook.fr",
//             pass: "Gmc12345678",
//         },
//     });
//     const mailOptions = {
//         from: "gmc2022test@outlook.fr",
//         to: "abdouou7@gmail.com",
//         subject: "Sending Email using Node.js",
//         text: "That was easy!",
//     };

//     transporter.sendMail(mailOptions, function(error, info) {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log("Email sent: " + info.response);
//         }
//     });
// };