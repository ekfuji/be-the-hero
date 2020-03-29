const connection = require('../database/connection');
const crypto = require('crypto');
module.exports = {
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
        /*
        * como o insert pode demorar um pouco, eu preciso retornar o resultado só após
        * o insert ter sido finalizado. Então definimos a função como async e antes do connection
        * colocamos o await, quando ele chegar na linha de código do connection ele irá aguardar o término
        * operação para ele continuar
        */
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })


        return response.json({ id });
    },

    async index(request, response) {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },

    
}