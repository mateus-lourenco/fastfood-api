function getCode() {
    return Math.floor(new Date().getTime() + Math.random() * 900000)
}
const products = (sequelize, DataTypes) => {
    const Products = sequelize.define("Products", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price : {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        code: {
            type: DataTypes.STRING,
            defaultValue: getCode()
        } 
    })

    return Products
}

module.exports = products