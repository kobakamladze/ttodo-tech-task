import UserService from "../services/user.service.js";

class UserController {
  async auth(req, res) {
    try {
      const { email } = req.body;

      let candidate = await UserService.get(email);
      if (!candidate) candidate = await UserService.add(email);

      res.send(candidate);
    } catch (e) {
      return res.status(501).json({ error: e.message });
    }
  }
}

export default new UserController();
