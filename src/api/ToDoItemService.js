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


  static async deleteToDoItem(toDoItemId) {

    const { data, status } = await toDoApi.delete(`/TodoItems/${ toDoItemId }`)

    console.log(`TodoItemService.deleteToDoItem => Status Code: ${ status } - Result => ${ JSON.stringify(data) }`);

    if (status === 204) {

      return toDoItemId;

    } else {

      return null;
    }
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


  static async markToDoItemAsDone(toDoItemId) {

    const body = { markAsCompleted: true }

    const { data, status } = await toDoApi.put(`/TodoItems/${toDoItemId}`, body);

    console.log(`TodoItemService.markToDoItemAsDone => Status Code: ${ status } - Result => ${ JSON.stringify(data) }`);

    if (status === 204) {

      return toDoItemId;

    } else {

      return null;
    }
  }


  static async markToDoItemAsIncompleted(toDoItemId) {

    const body = { markAsCompleted: false }

    const { data, status } = await toDoApi.put(`/TodoItems/${toDoItemId}`, body);

    console.log(`TodoItemService.markToDoItemAsIncompleted => Status Code: ${ status } - Result => ${ JSON.stringify(data) }`);

    if (status === 204) {

      return toDoItemId;

    } else {

      return null;
    }
  }



}