<template>
  <v-app>
    <v-app-bar class="bg-blue-darken-1" flat>
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>Inicial</v-app-bar-title>

      <v-btn icon @click="toggleTheme">
        <v-icon>{{ currentTheme === 'light' ? 'mdi-weather-night' : 'mdi-white-balance-sunny' }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <router-link to="/" class="text-decoration-none" style="color: inherit;">
        <v-list-item link title="Gráfico"></v-list-item>
      </router-link>
      <router-link to="/ibge" class="text-decoration-none" style="color: inherit;">
        <v-list-item link title="IBGE"></v-list-item>
      </router-link>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useThemeStore } from './stores/ThemeStore';
import vuetify from './plugins/vuetify';

const themeStore = useThemeStore();
const currentTheme = ref(themeStore.theme);

const drawer = ref(true);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

const toggleTheme = () => {
  themeStore.toggleTheme();
  currentTheme.value = themeStore.theme;
};


watch(currentTheme, (newTheme) => {
  vuetify.theme.global.name.value = newTheme;
});
</script>
