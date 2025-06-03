import mongoose from "mongoose";
const connect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log("DataBase connected successfully");
    } catch (error) {
        console.log(error);
    }
};
export default connect;
