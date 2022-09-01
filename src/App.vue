<template>
  <v-app>
    <v-app-bar app block color="blue-grey" dark>
      <div class="d-flex align-center">
        <h1>Search Phrases by character</h1>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
