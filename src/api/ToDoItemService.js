import axios from 'axios';

const toDoApi = axios.create({
  baseURL: 'http://localhost:5025/api'
});

export default class ToDoItemService {

  async getAllTodoItems() {

    const { data, status } = await toDoApi.get('/TodoItems');

    console.log(`TodoItemService.getAllTodoItems => Status Code: ${status} - Result => ${JSON.stringify(data)}`);

    return data;

  }
}