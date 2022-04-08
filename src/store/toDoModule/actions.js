// export const myAction = async ({ commit }) => {

// }

import toDoApi from '@/api/toDoApi'

export const loadToDoList = async ({ commit }) => {
    const { data } = await toDoApi.get('/TodoItems')

    console.log(data)

    commit('setToDoList', data)
}