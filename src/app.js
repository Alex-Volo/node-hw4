const exppress = require("exppress");

const app = exppress();

app.get("/", (response, request) => {
  response.statusCode = 200;
  
});

app.listen(3005, () => {
  console.log("Сервер запущен по адресу http//127.0.0.1:3005");
});
