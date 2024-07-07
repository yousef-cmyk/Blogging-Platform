const { body } = require("express-validator")

const validation = () => {
    return [
        body('title')
            .notEmpty()
            .withMessage("title can't be empty"),
        body('description')
            .notEmpty(),
        body('tags')
            .notEmpty()
    ] 
}

module.exports = {
    validation
}