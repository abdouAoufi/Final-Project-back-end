import bcrypt from "bcrypt";

export const encryptPassword = (password) => {
    return bcrypt.hash(password, 12);
};

export const compare = (dbPass, password) => {
    return bcrypt.compare(dbPass, password);
};