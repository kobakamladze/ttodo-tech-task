import { Todo } from "../models/todo.model.js";

class TodoService {
  static add(req) {
    const { title, description, status, userId } = req;

    return Todo.create({ title, description, status, userId });
  }

  static getAll(userId) {
    return Todo.findAll({ where: { userId } });
  }

  static edit({ todoId, userId, title, description, status }) {
    return Todo.update(
      { title, description, status },
      { where: { id: todoId, userId } }
    );
  }

  static delete({ todoId, userId }) {
    return Todo.destroy({ where: { id: todoId, userId } });
  }
}

export default TodoService;
