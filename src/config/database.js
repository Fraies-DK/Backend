import mongoose from "mongoose";

const host = "localhost";
const port = "27017";
const db = "fraies";

const mongoConnect = () => {
    const mongoStringConnection = `mongodb://${host}:${port}/${db}`;

    mongoose.connect(mongoStringConnection, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then ( () => console.log("Mongodb connected"))
    .catch( ( err ) => console.log(err));

    mongoose.set("strictQuery", true);
}

export default mongoConnect;