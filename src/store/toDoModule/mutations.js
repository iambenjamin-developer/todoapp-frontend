// export const myMutation = (state) => {

// }

export const setToDoList = (state, data) => {

    state.toDoList = data
    state.isLoading = false
}

export const addToDoItem = (state, toDoItem) => {

    state.toDoList = [...state.toDoList, toDoItem]
}

export const deleteToDoItem = (state, data) => {
    // state -> entries  -> la nueva entrada debe de ser la primera
    state.entries = [data, ...state.entries]
}
