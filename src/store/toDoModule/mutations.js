// export const myMutation = (state) => {

// }

export const setToDoList = (state, toDoList) => {

    state.toDoList = [...state.toDoList, ...toDoList]
    state.isLoading = false
}