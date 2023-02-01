const express = require("express");
const routes = express.Router();
const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

//Create
routes.post("/create", async (request, response) => {
    const {name, estoque} = request.body;
    const produto = await prisma.Produto.create({
        data: {
            name,
            estoque
        }
    })
    console.log("Rota create solicitada");
    return response.status(201).json("Produto criado");
})

//Read
routes.get("/read", async (request, response) => {
    const produtos = await prisma.Produto.findMany(); 
    console.log("Rota get solicitada");
    return response.status(200).json(produtos);
})

//Update
routes.put("/update", async (request, response) => {
    const {identificador, estoqueAlterado} = request.body;
    const produto = await prisma.Produto.update({
        where: {
            id: identificador,
        },
        data: {
            estoque: estoqueAlterado
        }
    })
    console.log("Rota put solicitada");
    return response.status(200).json(`${produto.name} teve seu estoque alterado`);
})

//Delete
routes.delete("/delete", async (request, response) => {
    const {identificador} = request.body;
    const produto = await prisma.Produto.delete({
        where: {
            id: identificador
        }
    })
    console.log("Rota delete solicitada");
    return response.status(200).json(`${produto.name} foi excluido`);
})

routes.delete("/deleteAll", async (request, response) => {
    await prisma.Produto.deleteMany({});
    console.log("Rota delete solicitada");
    return response.status(200).json("Registros excluidos");
})

module.exports = routes;