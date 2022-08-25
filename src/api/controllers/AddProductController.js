const AddProductsService = require('../services/AddProductsService')

class AddProductController {
    constructor(){ 
    }
    async handle(request, response) {
        const service = new AddProductsService();
        const result = await service.execute(request.body)
        return response.status(201).json(result)
    }
}

module.exports = AddProductController