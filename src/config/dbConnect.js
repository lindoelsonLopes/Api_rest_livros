import mongoose from "mongoose";

mongoose.connect("mongodb+srv://jlindoelsonlopes:132807%40Ld@cluster0.udiefse.mongodb.net/lindoelson-node");

let db = mongoose.connection;

export default db;