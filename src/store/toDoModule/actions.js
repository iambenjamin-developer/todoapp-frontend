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