import { User } from "../models/user.js";
export const newUserController = async (req, res, next) => {
    try {
        const { _id, dob, email, gender, name, photo } = req.body;
        const user = await User.create({ _id, dob, email, gender, name, photo });
        return res.status(200).json({
            status: true,
            message: 'Added Users',
        });
    }
    catch (error) {
        return res.status(500).json({
            status: false,
            message: 'Server error',
            error
        });
    }
};
export const allUserController = async (req, res, next) => {
    try {
        return res.status(200)
            .json({
            status: true,
            message: 'All Users',
        });
    }
    catch (error) {
        return res.status(500)
            .json({
            status: false,
            message: 'Server error',
            error
        });
    }
};
