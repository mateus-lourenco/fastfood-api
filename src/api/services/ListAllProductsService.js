const FastFoodRepository = require('../repository/FastFoodRepository');
const {product} = require('../models')

class ListAllProductsService {
    constructor(){
        this.product = product
        this.FastFoodRepository = new FastFoodRepository()
    }

    async execute(){
        try {
            const result = await this.FastFoodRepository.listAllProducts(this.product)
            return result;
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = ListAllProductsService