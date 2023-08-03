import { MongoClient } from "mongodb";
import credentials from "../src/connection/credentials.js"; // La ruta puede variar dependiendo de tu estructura de archivos.

export async function connect() {
    try {
        const uri = `mongodb+srv://${credentials.userDB}:${credentials.passDB}@cluster0.xa2yb3z.mongodb.net/${credentials.dbDB}`;
        const options = { useNewUrlParser: true, useUnifiedTopology: true };
        const client = await MongoClient.connect(uri, options);
        return client.db();
    } catch (error) {
        return { status: 500, message: error.message };
    }
}
