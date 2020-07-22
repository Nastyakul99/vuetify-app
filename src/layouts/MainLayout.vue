<template>
  <v-app id="inspire">
    <v-app-bar app clipped-left
      color="indigo"
      dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Статистика</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" :clipped=true app overflow>
      <v-list-item @click.stop="DateStatistics">
        <v-list-item-action>
          <v-icon>mdi-format-list-bulleted-square</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>По периоду</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click.stop="WorkerStatistics">
        <v-list-item-action>
          <v-icon>mdi-format-list-bulleted-square</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>По работнику</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <Logout/>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <v-row align="stretch" justify="center">
          <v-col cols="10">
            <v-card>
              <v-card-text>
                <router-view name="ComboboxDateStatistics"/>
                <router-view name="ListDateStatistics"/>
				<router-view name="ComboboxWorkerStatistics"/>
                <router-view name="ListWorkerStatistics"/>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer color="indigo"
      app>
     <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Logout from "../components/Logout";

  export default {
    name: "MainLayout",
    components:{
      Logout
    },
    data: () => ({
      drawer: null,
      name: '',
    }),
    methods: {
      DateStatistics() {
        this.$router.push('/date-statistics');
      },
      WorkerStatistics() {
        this.$router.push('/worker-statistics');
      },
    },
  }
</script>

<style scoped>

</style>