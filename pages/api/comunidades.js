import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if(request.method === 'POST') {
        const TOKEN = '86db3ef67a4eb08a75b2c91d7000d1';
        const client = new SiteClient(TOKEN);

        // Validar os dados, antes de sair cadastrando
        const registroCriado = await client.items.create({
            itemType: "990813", // ID do Model de "Comunities" criado pelo Dato
            ...request.body,
            //title: "Comunidade de Teste",
            //imageUrl: "https://github.com/renelcm.png",
            //creatorSlug: "renelcm"
        })
    
        
        response.json({
            dados: 'Algum dado Qualquer',
            resgistroCriado: registroCriado,
        })
        return;
    }

    response.status(404).json({
        message: 'Ainda nao temos nada no GET, mas no POST tem!'
    })
}