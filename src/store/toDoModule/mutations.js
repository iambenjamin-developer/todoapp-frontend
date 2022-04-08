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

export const markToDoItemAsIncompleted = (state, todoItemId) => {

    console.log('markToDoItemAsIncompleted =>' + todoItemId)
    //Find index of specific object using findIndex method. 
    let objIndex = state.toDoList.findIndex((obj => obj.id == todoItemId));
    state.toDoList[objIndex].isCompleted = false;
}

export const markToDoItemAsDone = (state, todoItemId) => {

    console.log('markToDoItemAsDone =>' + todoItemId)
    // //Find index of specific object using findIndex method. 
    let objIndex = state.toDoList.findIndex((obj => obj.id == todoItemId));
    state.toDoList[objIndex].isCompleted = true;
}