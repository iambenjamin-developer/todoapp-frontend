<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="40" />
        <!-- <h1>Hola desde ToDo Component</h1> -->
        <!-- <h3>{{ $store.state.myName }}</h3>
        <h3>{{ $store.getters.getFullName }}</h3>
        <h3>{{ $store.state.responseApiBackend[0].name }}</h3> -->
      </v-col>
    </v-row>

    <v-row class="text-left">
      <v-col cols="12">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Id</th>
                <th class="text-left">Name</th>
                <th class="text-left">isCompleted</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="toDoitem in $store.state.responseApiBackend" :key="toDoitem.id">
                <td>{{ toDoitem.id }}</td>
                <td>{{ toDoitem.name }}</td>
                <td>{{ toDoitem.isCompleted }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>
</style>