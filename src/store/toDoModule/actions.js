// export const myAction = async ({ commit }) => {

// }

import toDoApi from '@/api/toDoApi'

export const getAllToDoItems = async ({ commit }) => {
    const { data, status } = await toDoApi.get('/TodoItems')

    console.log('actions.js => getAllToDoItems')
    console.log('Status code:' + status)
    console.log(data)

    commit('setToDoList', data)
}


export const createToDoItem = async ({ commit }, toDoItemName) => {

    console.log(`actions.js => createToDoItem => toDoItemName: ${toDoItemName}`)

    const body = { name: toDoItemName }

    const { data, status } = await toDoApi.post('/TodoItems', body)

    if (status === 201) {

        commit('addToDoItem', data)
    }
}

export const deleteToDoItem = async ({ commit }, todoItemId) => {

    console.log(`actions.js => deleteToDoItem => todoItemId: ${todoItemId}`)

    const { data, status } = await toDoApi.delete(`/TodoItems/${todoItemId}`)

    if (status === 204) {

        commit('deleteToDoItem', todoItemId)
    }
}