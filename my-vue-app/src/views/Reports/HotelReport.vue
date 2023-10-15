<template>
    <Layout>
        <h1 class="text-center text-xl font-black mx-8 mb-4">Listado de habitaciones por acomodacion</h1>

        <div class="chart-container flex justify-center mb-4">
            <apexchart class="mb-4" width="500" type="bar" :options="options" :series="series"></apexchart>
        </div>
    </Layout>
</template>

<script setup>
import { ref } from 'vue'
import Layout from '../../layouts/AdminLayout.vue';
const options = ref({
    chart: {
        id: 'vuechart-example'
    },
    xaxis: {
        categories: ["Sencilla", "Doble", "Triple", "Cuadruple"]
    }
});

const series = ref([{
    name: 'series-1',
    data: [30, 40, 45, 80]
}]);
</script>

<style scoped>
/* Add the CSS here */
.chart-container {
  position: relative;
  width: 100%;
  height: 300px; /* Set an initial height */
}

.chart-container .apexcharts-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>