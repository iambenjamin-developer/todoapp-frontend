// export const myMutation = (state) => {

// }

export const setToDoList = (state, toDoList) => {

    state.toDoList = [...state.toDoList, ...toDoList]
    state.isLoading = false
}

export const addToDoItem = (state, toDoItemName ) => {
    // state -> entries  -> la nueva entrada debe de ser la primera
    state.entries = [ toDoItemName, ...state.entries  ]
}

export const deleteToDoItem = (state, todoItemId ) => {
    // state -> entries  -> la nueva entrada debe de ser la primera
    state.entries = [ todoItemId, ...state.entries  ]
}
