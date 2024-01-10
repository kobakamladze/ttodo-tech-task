import axios from "axios";

const BASE_API_URL = process.env?.BASE_API_URL ?? "http://localhost:5000/api";
const axiosClient = axios.create({ baseURL: BASE_API_URL, timeout: 1000 });

async function loginRequest({ body }) {
  return axiosClient.post("/user/auth", body);
}

async function createTodoRequest({ body }) {
  return axiosClient.post("/todo/add", body);
}

async function editTodoRequest({ body }) {
  return axiosClient.put("/todo/edit", body);
}

async function fetchTodosRequest(userId) {
  return axiosClient.get(`/todo/get/${userId}`);
}

async function deleteTodosRequest({ userId, todoId }) {
  return axiosClient.delete(`/todo/delete?userId=${userId}&todoId=${todoId}`);
}

export {
  loginRequest,
  createTodoRequest,
  editTodoRequest,
  fetchTodosRequest,
  deleteTodosRequest,
};
