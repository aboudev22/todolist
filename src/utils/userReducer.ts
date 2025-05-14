import type { User } from "../types/types";

type Action = {
  type: "name" | "email" | "password" | "reset";
  payload?: string;
};

export default function reducer(user: User, action: Action) {
  switch (action.type) {
    case "name":
      return { ...user, name: action.payload || "" };
    case "email":
      return { ...user, email: action.payload || "" };
    case "password":
      return { ...user, password: action.payload || "" };
    case "reset":
      return { name: "", email: "", password: "" };
    default:
      throw new Error("unknow action");
  }
}
