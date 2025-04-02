# ☕ API de Cafés

Aplicación construida con **Node.js** y **Express** para manejar una lista de cafés. Incluye endpoints REST y pruebas automatizadas con **Jest** y **Supertest**.

---

## 📦 Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/tamarazapata/testing_jest.git
```

2. Instala las dependencias:

``` bash
npm install
```

Este proyecto utiliza las siguientes librerías:

* express
* faker
* supertest
* jest
* @babel/preset-env (devDependency)

## 🧪 Testing
La app cuenta con pruebas unitarias y de integración para cubrir las operaciones principales del CRUD:

```
GET /cafes

GET /cafes/:id

POST /cafes

PUT /cafes/:id

DELETE /cafes/:id
```

Puedes ver el reporte ejecutando:

``` bash 
npm test
```

