npx sequelize-cli model:generate --name user --attributes name:string

```
POST http://localhost:5000/api/v1/signup
POST http://localhost:5000/api/v1/signin
POST http://localhost:5000/api/v1/consultation
GET http://localhost:5000/api/v1/consultation/1
GET http://localhost:5000/api/v1/consultation
GET http://localhost:5000/api/v1/profile/1
POST http://localhost:5000/api/v1/article
GET http://localhost:5000/api/v1/article
GET http://localhost:5000/api/v1/article/1
```