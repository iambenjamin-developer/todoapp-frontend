<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="40" />
        <h1>ToDo List</h1>
        <!-- <h3>{{ $store.state.toDoModule.myName }}</h3> -->
        <!-- <h3>{{ $store.getters.getFullName }}</h3>
        <h3>{{ $store.state.responseApiBackend[0].name }}</h3>-->

        <v-form ref="form" lazy-validation>
          <v-text-field
            @keydown.enter.prevent="addToDoItem(toDoItemName)"
            v-model="toDoItemName"
            :rules="toDoItemNameRules"
            label="To Do Item"
            required
          ></v-text-field>

          <v-btn color="primary" class="mr-6" v-on:click="addToDoItem(toDoItemName)">
            Add
            <v-icon dark right>mdi-plus</v-icon>
          </v-btn>
        </v-form>
      </v-col>
    </v-row>

    <v-row class="text-left">
      <v-col cols="12">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th>
                  <strong>ID</strong>
                </th>
                <th>
                  <strong>NAME</strong>
                </th>
                <th>
                  <strong>STATE</strong>
                </th>
                <th>
                  <strong>DELETE</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="toDoItem in $store.state.toDoModule.toDoList" :key="toDoItem.id">
                <td>{{ toDoItem.id }}</td>
                <td>{{ toDoItem.name }}</td>

                <td>
                  <v-btn
                    v-if="toDoItem.isCompleted"
                    v-on:click="markToDoItemAsIncompleted(toDoItem.id)"
                    class="ma-2"
                    color="green"
                    dark
                  >
                    Done
                    <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
                  </v-btn>

                  <v-btn
                    v-else
                    v-on:click="markToDoItemAsDone(toDoItem.id)"
                    class="ma-2"
                    color="warning"
                    dark
                  >
                    Incompleted
                    <v-icon dark right>mdi-minus-circle</v-icon>
                  </v-btn>
                </td>
                <td>
                  <v-btn
                    v-on:click="deleteToDoItemById(toDoItem.id)"
                    class="mx-2"
                    fab
                    dark
                    small
                    color="red"
                  >
                    <v-icon dark>mdi-delete</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    toDoItemName: '',
    toDoItemNameRules: [
      v => !!v || 'To Do Item is required',
      v => (v && v.length >= 3) || 'To Do Item must be at least 3 characters in length',
    ],
  }),
  methods: {
    addToDoItem(toDoItemName) {

      this.createToDoItem(toDoItemName)
      this.getAllToDoItems()
      // this.toDoItemName = ''
      this.$refs.form.reset()
    },
    deleteToDoItemById(todoItemId) {

      this.deleteToDoItem(todoItemId)
      this.getAllToDoItems()
      this.$refs.form.reset()
    },
    markToDoItemAsIncompleted(todoItemId) {

      this.markToDoItemAsIncompleted(todoItemId)
      this.getAllToDoItems()
      this.$refs.form.reset()
    },
    markToDoItemAsDone(todoItemId) {

      this.markToDoItemAsDone(todoItemId)
      this.getAllToDoItems()
      this.$refs.form.reset()
    },
    ...mapActions('toDoModule', ['getAllToDoItems']),
    ...mapActions('toDoModule', ['createToDoItem']),
    ...mapActions('toDoModule', ['deleteToDoItem']),
    ...mapActions('toDoModule', ['markToDoItemAsIncompleted']),
    ...mapActions('toDoModule', ['markToDoItemAsDone']),

  },
  created() {

    this.getAllToDoItems()
  }

}
</script>

<style>
</style>