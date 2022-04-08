<template>
  <v-app>

    <v-main>
      <ToDoComponent/>
    </v-main>
  </v-app>
</template>

<script>
import ToDoComponent from './components/ToDoComponent';

export default {
  name: 'App',

  components: {
    ToDoComponent,
  },

  data: () => ({
    //
  }),
};
</script>
