import request from "supertest";
import app from "../index.js";
import { faker } from "@faker-js/faker";


describe("Operaciones CRUD de cafes",  () => {
    it("Debería devolver todos los cafés", async () => {
        const response = await request(app)
        .get("/cafes")
      expect(response.statusCode).toBe(200);       
    })
    it("La respuesta debe ser un arreglo con al menos un objeto", async () => {
        const response = await request(app)
            .get("/cafes");
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
        expect(typeof response.body[0]).toBe("object");
      });
    it("Retornar 404 al eliminar café con id que no existe", async () => {
        const idInexistente = 999; 
        const response = await request(app)
            .delete(`/cafes/${idInexistente}`)
            .set("Authorization", "Bearer tokenDePrueba");
        expect(response.statusCode).toBe(404);
        expect(response.body.message).toBe("No se encontró ningún cafe con ese id");
    
    });
    it("Post retorna 201 ", async () => {
        const payload = {
            nombre: faker.commerce.product(),
          };
        const response = await request(app)
          .post("/cafes")
          .send(payload);
        expect(response.statusCode).toBe(201);
      });
    it("PUT retorna 400 si el id del parámetro y del body no coinciden", async () => {
        const idUrl = 1;
        const idBody = 456; 
        const payload = {
          id: idBody,
          nombre: "Actualización inválida",
        };
        const response = await request(app)
          .put(`/cafes/${idUrl}`)
          .send(payload)
          .set("Authorization", "Bearer tokenDePrueba"); 
      
        expect(response.statusCode).toBe(400);
      });
    })
