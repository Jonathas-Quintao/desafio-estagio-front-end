<template>
    <div class="chart-and-datepicker">
      <div class="datepicker-container">
        <VueDatePicker v-model="selectedDates" range multi-calendars @change="filterData" :format="dateFormat"
        :locale="dateLocale"/>
        
        
      </div>
      <div class="chart-container">
        <canvas ref="chartCanvas"></canvas>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import { Chart } from 'chart.js/auto';
  import Grafico from '../../Grafico.json'; 
  import VueDatePicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css';
  import { format, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';
  
  
  const chartCanvas = ref(null);
  let chartInstance = null;
  
  
  const selectedDates = ref([]); 
  const originalData = Grafico;

  const dateFormat = 'dd/MM/yyyy';
  const dateLocale = ptBR;
  
  
  const filterData = () => {
    let filteredData = [];
    
    if (selectedDates.value.length === 2) {
      const [startDate, endDate] = selectedDates.value;
      filteredData = originalData.filter(entry => {
        const entryDate = new Date(entry.datetime);
        return entryDate >= new Date(startDate) && entryDate <= new Date(endDate);
      });
    }
    
    updateChart(filteredData);
  };
  

  const updateChart = (data) => {
    const labels = data.map(entry => new Date(entry.datetime).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }));
    const values = data.map(entry => entry.value);
  

    if (chartInstance) {
      chartInstance.destroy();
    }
  
    chartInstance = new Chart(chartCanvas.value, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Valores ao longo do tempo',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            data: values,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  const formatDate = (date) => {
  if (!date) return '';
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
  
 
  onMounted(() => {
    filterData();
  });
  

  watch(selectedDates, () => {
    filterData();
  });
  </script>

<style scoped>
.chart-and-datepicker {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
}

.datepicker-container {
  background-color: #ffffff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
  width: 100%;
  max-width: 600px;
}

.chart-container {
  background-color: #ffffff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
}

canvas {
  display: block;
  width: 100%;
  height: auto;
}
</style>
  
 
  