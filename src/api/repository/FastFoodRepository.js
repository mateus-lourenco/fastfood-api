
class FastFoodRepository {
    constructor(){}
    async addProduct(product, body) {
        return await product.create({
            name: body.name,
            price: body.price
        })
    }

    async listAllProducts(product){
        return await product.findAll()
    }
}

module.exports = FastFoodRepository