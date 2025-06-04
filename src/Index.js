import app from "./App.js";
import connect from "./Db.js";
import "dotenv/config";

connect().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Port is runing to ${process.env.PORT}`);
  });
});
