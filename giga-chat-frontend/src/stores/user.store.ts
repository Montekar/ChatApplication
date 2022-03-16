import { defineStore } from "pinia";
import type { User } from "@/models/User";
import { UserService } from "@/services/user.service";

const userService: UserService = new UserService();

export const UserStore = defineStore({
  id: "userStore",
  state: () => ({
    loggedInUser: { name: "" } as User,
  }),
  getters: {
    username: (state) => {
      if (state.loggedInUser.name != undefined) return state.loggedInUser.name;
      else return "";
    },
  },
  actions: {
    createUser(name: string) {
      userService
        .createUser(name)
        .then((user) => (this.loggedInUser = user))
        .catch((err) => console.log(err));
    },
  },
});
