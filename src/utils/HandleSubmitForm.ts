import type { User } from "../types/types";

export default async function handleSubmit(dataform: User) {
  // try {
  //   const response = await fetch("url", {
  //     method: "POST",
  //     headers: {
  //       contentType: "application/json",
  //     },
  //     body: JSON.stringify(dataform),
  //   });
  //   if (!response.ok) throw new Error("Erreur d'envoie du formullaire");
  //   const data = await response.json();
  //   console.log("serveur data : ", data);
  //   alert("Inscription reussie !");
  // } catch (err) {
  //   console.error(err);
  //   alert("Echec de l'inscription");
  // }
  console.log(dataform);
}
