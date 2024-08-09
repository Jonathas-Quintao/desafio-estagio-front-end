<template>
    <div>
      <h1>{{ title }}</h1>
      <table v-if="data.length">
        <thead>
          <tr>
            <th>ID</th>
            <th>Indicador</th>
            <th>Unidade</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.indicador }}</td>
            <td>{{ item.unidade ? item.unidade.id : 'Não disponível' }}</td>
          </tr>
        </tbody>
      </table>
      <p v-else>Carregando dados...</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useTitleStore } from '@/stores/TitleStore';
  
  const titleStore = useTitleStore();
  const title = ref('Países IBGE');
  const data = ref([]);
  
  onMounted(async () => {
    titleStore.setTitle('IBGE');
  
    try {
      const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/paises/indicadores');
      data.value = response.data; 
    } catch (error) {
      console.error('Erro:', error);
    }
  });
  </script>
  
  <style scoped>
 
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  thead {
    background-color: var(--v-theme-background); 
  }
  
  th, td {
    border: 1px solid var(--v-theme-border); 
    padding: 12px;
    text-align: left;
  }
  
  th {
    background-color: var(--v-theme-header-background); 
    color: var(--v-theme-header-text); 
  }
  
  tbody tr:nth-child(even) {
    background-color: var(--v-theme-row-even-background); 
  }
  
  tbody tr:nth-child(odd) {
    background-color: var(--v-theme-row-odd-background); 
  }
  
  tbody tr:hover {
    background-color: var(--v-theme-row-hover-background); 
  }
  
  
  :root {
    --v-theme-background: #333; 
    --v-theme-border: #555; 
    --v-theme-header-background: #444; 
    --v-theme-header-text: #fff; 
    --v-theme-row-even-background: #2c2c2c; 
    --v-theme-row-odd-background: #1a1a1a; 
    --v-theme-row-hover-background: #444; 
  }
  </style>
  