
const express = require("express");
const app = express();

const CONFIRMATION_CODE = "f839bac1";

app.use(express.json());

app.post("/callback", (req, res) => {
    if (req.body.type === "confirmation") {
        return res.send(CONFIRMATION_CODE); // Отправляем код
    }
    
    // Остальная логика бота...
    res.send("ok");
});

app.listen(3000, () => console.log("Сервер запущен!"));
