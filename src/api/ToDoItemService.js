import axios from 'axios';

const toDoApi = axios.create({
  baseURL: 'http://localhost:5025/api'
});

export default class ToDoItemService {

  static async getAllTodoItems() {

    const { data, status } = await toDoApi.get('/TodoItems');

    console.log(`TodoItemService.getAllTodoItems => Status Code: ${ status } - Result => ${ JSON.stringify(data) }`);

    return data;

  }

  static async createToDoItem(toDoItemName) {

    const body = { name: toDoItemName }

    const { data, status } = await toDoApi.post('/TodoItems', body)

    console.log(`TodoItemService.createToDoItem => Status Code: ${ status } - Result => ${ JSON.stringify(data) }`);

    if (status === 201) {

      return data;

    } else {

      return null;
    }
  }
}