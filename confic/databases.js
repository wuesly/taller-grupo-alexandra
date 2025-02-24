const Mysql =require("Mysql2");
const dotenv =require("dotenv");
dotenv.config()
const pool= Mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
});
module.exports=pool.promise();