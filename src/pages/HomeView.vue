<script setup>
import { ref, onMounted } from 'vue';
import { Chart } from 'chart.js/auto'; // Importa o Chart.js com auto-registration

const chartCanvas = ref(null);
let chartInstance = null;

const data = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
  datasets: [
    {
      label: 'Vendas',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

onMounted(() => {
  chartInstance = new Chart(chartCanvas.value, {
    type: 'line', // Tipo de gráfico (line, bar, pie, etc.)
    data: data,
    options: options,
  });
});
</script>


<template>
  <div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>
