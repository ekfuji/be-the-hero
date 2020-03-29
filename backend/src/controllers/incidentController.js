const connection = require('../database/connection');
module.exports = {
    async index(request, response){
        const { page = 1 } = request.query;
        const pageSize = 5;
        const [count] = await  connection('incidents').select('*').count();

        console.log(count);

        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', "=", "incidents.ong_id")
        .limit(5)
        .offset((page -1) * pageSize)
        .select([
            'incidents.*',
            'ongs.name',
            'ongs.email', 
            'ongs.city', 
            'ongs.uf', 
            'ongs.whatsapp'
        ]);

        response.header('X-Total-Count', count['count(*)']);
        response.header('X-Total-Pages', Math.ceil(count['count(*)']/pageSize));
        return response.json(incidents);
    },

    async create (request, response){
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;
        
        /* request.headers -> A informação de quem está logado no sistema geralmente vem no cabeçalho da 
        requisição (Headers)
        o Headers guarda informações do contexto da requisição 
        (dados: autenticação, localização, idioma)
        */
      const [id] =  await connection('incidents').insert({
            ong_id,
            title,
            description,
            value
        });
        return response.json({ id });
    },
    // async index(resquest, response){
    //     const incidents = await connection('incidents').select('*');
    //     return response.json(incidents);
    // },
    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;
        const incident = await await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first();

        if(incident.ong_id !== ong_id){
            return response.status(401).json({error: 'Operation not permitted'});
        }
        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
}