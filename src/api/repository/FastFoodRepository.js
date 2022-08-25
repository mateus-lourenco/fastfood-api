
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

    async updateProduct(product, body){
        await product.update(
        { 
            name: body.name,
            price: body.price
        }, 
        {
            where: {
              id: body.id
            }
        });
    }
}

module.exports = FastFoodRepository