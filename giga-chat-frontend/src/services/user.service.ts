import http from "./http.client";
import type { User } from "@/models/User";

export class UserService {
  async createUser(name: string): Promise<User> {
    const res = await http.post<User>("/users", {
      name: name,
    });
    return res.data;
  }
}
