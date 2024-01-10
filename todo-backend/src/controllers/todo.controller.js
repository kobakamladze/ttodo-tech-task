import TodoService from "../services/todo.service.js";

class TodoController {
  async add(req, res) {
    try {
      const { title, description, status, userId } = req.body;

      await TodoService.add({ title, description, status, userId });
      res.status(201).send({ message: "ToDo created" });
    } catch (e) {
      return res.status(501).json({ error: e.message });
    }
  }

  async getAll(req, res) {
    try {
      const { userId } = req.params;
      const todos = await TodoService.getAll(userId);

      res.json(todos);
    } catch (e) {
      return res.status(501).json({ error: e.message });
    }
  }

  async edit(req, res) {
    try {
      const { userId, todoId, title, description, status } = req.body;

      await TodoService.edit({ userId, todoId, title, description, status });
      res.status(202).send(TodoService.findOne({ where: { userId, todoId } }));
    } catch (e) {
      return res.status(501).json({ error: e.message });
    }
  }

  async delete(req, res) {
    try {
      const { userId, todoId } = req.query;

      return TodoService.delete({ userId, todoId });
    } catch (e) {
      return res.status(501).json({ error: e.message });
    }
  }
}

export default new TodoController();
