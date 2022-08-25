const ListAllProductsService = require('../services/ListAllProductsService')

class ListAllProductsController {
    constructor(){}
    async handle(request, response) {
        const service = new ListAllProductsService();
        const result = await service.execute(request.body);
        return response.status(200).json({products: result})
    }
}

module.exports = ListAllProductsController