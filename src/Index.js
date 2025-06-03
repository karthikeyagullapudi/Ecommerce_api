import app from "./App.js";
import connect from "./Db.js";
import "dotenv/config";
app.listen(process.env.PORT, () => {
    console.log(`port is runing ${process.env.PORT}`);
});
connect();
