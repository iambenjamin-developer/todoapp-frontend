// export const myAction = async ({ commit }) => {

// }

import toDoApi from '@/api/toDoApi'
import ToDoItemService from '@/api/ToDoItemService'
export const getAllToDoItems = async ({ commit }) => {

    const result = await ToDoItemService.getAllTodoItems()

    commit('setToDoList', result)
}


export const createToDoItem = async ({ commit }, toDoItemName) => {

    const result = await ToDoItemService.createToDoItem(toDoItemName);

    if (result !== null) {

        commit('addToDoItem', result)
    }
}

export const deleteToDoItem = async ({ commit }, toDoItemId) => {

    const result = await ToDoItemService.deleteToDoItem(toDoItemId);

    if (result !== null) {

        commit('deleteToDoItem', result)
    }
}

export const markToDoItemAsIncompleted = async ({ commit }, todoItemId) => {

    console.log(`actions.js => markToDoItemAsIncompleted => todoItemId: ${todoItemId}`)

    let body = {
        markAsCompleted: false
    }

    const { data, status } = await toDoApi.put(`/TodoItems/${todoItemId}`, body)

    if (status === 204) {

        commit('markToDoItemAsIncompleted', todoItemId)
    }
}


export const markToDoItemAsDone = async ({ commit }, todoItemId) => {

    console.log(`actions.js => markToDoItemAsIncompleted => todoItemId: ${todoItemId}`)

    let body = {
        markAsCompleted: true
    }

    const { data, status } = await toDoApi.put(`/TodoItems/${todoItemId}`, body)

    if (status === 204) {

        commit('markToDoItemAsDone', todoItemId)
    }
}
