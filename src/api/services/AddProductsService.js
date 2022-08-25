const FastFoodRepository = require('../repository/FastFoodRepository');
const {product} = require('../models')

class AddProductsService {
    constructor(){
        this.product = product
        this.FastFoodRepository = new FastFoodRepository()
    }

    async execute(body){
        try {
            return await this.FastFoodRepository.addProduct(this.product, body)
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = AddProductsService