<!-- App.vue -->
<template>
  <v-app>
    <v-app-bar class="bg-blue-darken-1" flat>
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>Inicial</v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer>
      <router-link to="/" class="text-decoration-none text-black"><v-list-item link title="Gráfico"></v-list-item></router-link>
      <router-link to="/ibge" class="text-decoration-none text-black"><v-list-item link title="IBGE"></v-list-item></router-link>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
// script setup do App.vue não precisa de nenhum código adicional por enquanto
</script>
