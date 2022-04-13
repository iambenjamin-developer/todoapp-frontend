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


export const markToDoItemAsDone = async ({ commit }, toDoItemId) => {

    console.log(`actions.js => markToDoItemAsIncompleted => todoItemId: ${toDoItemId}`)

    let body = {
        markAsCompleted: true
    }

    const { data, status } = await toDoApi.put(`/TodoItems/${toDoItemId}`, body)

    if (status === 204) {

        commit('markToDoItemAsDone', toDoItemId)
    }
}


export const markToDoItemAsIncompleted = async ({ commit }, toDoItemId) => {

    console.log(`actions.js => markToDoItemAsIncompleted => todoItemId: ${toDoItemId}`)

    let body = {
        markAsCompleted: false
    }

    const { data, status } = await toDoApi.put(`/TodoItems/${toDoItemId}`, body)

    if (status === 204) {

        commit('markToDoItemAsIncompleted', toDoItemId)
    }
}


