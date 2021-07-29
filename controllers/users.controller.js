const User = require("../models/User.model")

module.exports.usersController = {
    addUsers: async (req, res) => {
        try {
            await User.create({
                name: req.body.name,
            })
            res.json("Пользователь добавлен");
        } catch {
            res.json("Ошибка при добавлении");
        }
    }
};


