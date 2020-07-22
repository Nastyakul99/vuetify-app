<template>
  <v-app>
    <component :is='layout'>
      <router-view/>
    </component>
  </v-app>
</template>

<script>
  import MainLayout from "./layouts/MainLayout";

  export default {
    name: 'App',
    components: {
      MainLayout,
    },
    computed: {
      layout() {
        return (this.$route.meta.layout || 'MainLayout')
      }
    }
  };
</script>
