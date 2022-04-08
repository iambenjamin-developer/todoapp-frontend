// export const myMutation = (state) => {

// }

export const setToDoList = (state, data) => {

    state.toDoList = data
    state.isLoading = false
}

export const addToDoItem = (state, toDoItem) => {

    state.toDoList = [...state.toDoList, toDoItem]
}

export const deleteToDoItem = (state, todoItemId) => {
    
    state.toDoList = state.toDoList.filter(x => x.id !== todoItemId)
}
