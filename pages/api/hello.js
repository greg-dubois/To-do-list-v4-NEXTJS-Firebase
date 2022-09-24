// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from "../../firebase/clientApp";
import { collection, addDoc } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    try {
      const docRef = await addDoc(collection(db, "todos"), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    res.status(201).json({ message: "todo added" });
  }
}
