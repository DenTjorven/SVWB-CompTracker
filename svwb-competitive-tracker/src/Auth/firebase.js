import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { firebaseConfig } from "./config";

console.log(firebaseConfig);
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };
