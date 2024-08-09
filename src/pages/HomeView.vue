    <script setup>
    import { ref, onMounted } from 'vue';
    import { Chart } from 'chart.js/auto';
    import Grafico from '../../Grafico.json'; 



    const chartCanvas = ref(null);
    let chartInstance = null;


    const labels = Grafico.map(entry => new Date(entry.datetime).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }));
    const data = Grafico.map(entry => entry.value);

    const chartData = {
    labels: labels,
    datasets: [
        {
        label: 'Valores ao longo do tempo',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        data: data,
        },
    ],
    };

    const chartOptions = {
    responsive: true,
    scales: {
        y: {
        beginAtZero: true,
        },
    },
    };

    onMounted(() => {
    chartInstance = new Chart(chartCanvas.value, {
        type: 'line',
        data: chartData,
        options: chartOptions,
    });
    });
    </script>

    <template>
    <div>
        <canvas ref="chartCanvas"></canvas>
    </div>
    </template>
