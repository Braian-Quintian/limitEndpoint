import { config } from 'dotenv';
config();

const { CONFIG, ATLAS_USER, ATLAS_PASS, ATLAS_DB} = process.env;
const conexion = JSON.parse(CONFIG);
const credentials = {
    hostname: conexion.hostname,
    port   : conexion.port,
    userDB   : ATLAS_USER,
    passDB   : ATLAS_PASS,
    dbDB     : ATLAS_DB
}

export default credentials;
