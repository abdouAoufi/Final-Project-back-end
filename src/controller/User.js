import User from "../model/User.js";
import nodemailer from "nodemailer";

export const createUser = (req, res, next) => {
    const userInfo = req.body;
    const user = new User(userInfo);
    user
        .save()
        .then((user) => {
            res.status(201).json({ message: "Your account created" });
        })
        .catch((err) => {
            res.status(400).json({ message: "There is problem with database" });
        });
};

export const updateUser = (req, res) => {};

export const deleteUser = (req, res) => {};

const sendEmail = () => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "gmc2022test@outlook.fr",
            pass: "Gmc12345678",
        },
    });
    const mailOptions = {
        from: "gmc2022test@outlook.fr",
        to: "abdouou7@gmail.com",
        subject: "Sending Email using Node.js",
        text: "That was easy!",
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
};