import { User } from "../models/user.model.js";

class UserService {
  static add(email) {
    return User.create({ email });
  }

  static get(email) {
    return User.findOne({ where: { email } });
  }
}

export default UserService;
