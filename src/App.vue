<template>
  <v-app>
    <v-main>
      <v-app-bar class="bg-blue-darken-1" flat>
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>
        <v-app-bar-title>Inicial</v-app-bar-title>
      </v-app-bar>
      <v-navigation-drawer>
        <v-list-item link title="Gráfico"></v-list-item>
        <v-list-item link title="IBGE"></v-list-item>

      </v-navigation-drawer>
      <v-container>
        <v-row>
          <v-col cols="12">
            <h1>CONTEUDO</h1>
          </v-col>
        </v-row>
      </v-container>
      


    </v-main>
  </v-app>
</template>

<script setup>
//
</script>
