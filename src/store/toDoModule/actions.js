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

    alert(`actions.js => createToDoItem => toDoItemName: ${toDoItemName}`)
    const body = { name: toDoItemName }

    alert(JSON.stringify(body))

    const { data, status } = await toDoApi.post('/TodoItems', body)

    alert(status)

    commit('addToDoItem', dataToSave)
}