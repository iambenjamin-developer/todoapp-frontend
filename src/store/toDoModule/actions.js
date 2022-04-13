// export const myAction = async ({ commit }) => {

// }

import ToDoItemService from '@/api/ToDoItemService'

export const getAllToDoItems = async ({ commit }) => {

    const result = await ToDoItemService.getAllTodoItems();

    commit('setToDoList', result);
}


export const createToDoItem = async ({ commit }, toDoItemName) => {

    const result = await ToDoItemService.createToDoItem(toDoItemName);

    if (result !== null) {

        commit('addToDoItem', result);
    }
}

export const deleteToDoItem = async ({ commit }, toDoItemId) => {

    const result = await ToDoItemService.deleteToDoItem(toDoItemId);

    if (result !== null) {

        commit('deleteToDoItem', result);
    }
}


export const markToDoItemAsDone = async ({ commit }, toDoItemId) => {

    const result = await ToDoItemService.markToDoItemAsDone(toDoItemId);

    if (result !== null) {

        commit('markToDoItemAsDone', result);
    }
}


export const markToDoItemAsIncompleted = async ({ commit }, toDoItemId) => {

    const result = await ToDoItemService.markToDoItemAsIncompleted(toDoItemId);

    if (result !== null) {

        commit('markToDoItemAsIncompleted', result);
    }
}


