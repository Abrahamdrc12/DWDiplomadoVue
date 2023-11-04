<template>
    <Layout>
        <h1 class="text-center text-xl font-black mx-8 mb-4">Listado de habitaciones por tipo</h1>

        <div class="chart-container flex justify-center mb-4">
            <apexchart class="mb-4" width="500" type="bar" :options="options" :series="series"></apexchart>
        </div>
    </Layout>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Layout from '../../layouts/AdminLayout.vue';
import { mainStore } from '../../stores/mainStore';
import axios from 'axios'
const store = mainStore();
let rooms = ref([])

const options = ref({
    chart: {
        id: 'vuechart-example'
    },
    xaxis: {
        categories: ["Suite", "Estandar", "Matrimonial"]
    }
});

let series = ref([{
    name: 'series-1',
    data: []
}]);

const list = ref({})

const load = async () => {
    const endpoint = 'http://146.190.32.176/diplomado/api/rooms/';
    list.value = await store.get('hotels')
    const data = list.value = list.value.data
    let sum = 0;
    let sencilla = 0
    let doble = 0
    let triple = 0
    let cuadruple = 0
    let results = []
    let i = 1
    for (const item of data) {
            await axios.get(endpoint + item.id.toString()).then((result) => {
            results = (result.data.data)
            for (const j of results) {
                console.log(j)
                if (j.room_type_id == 1){
                    sencilla+=1
                } else if (j.room_type_id == 2){
                    doble+=1
                } else if (j.room_type_id == 3){
                    triple+=1
                } 
            }
        })
        i += 1
        //console.log('i', i)
    }    
    let newData = [sencilla, doble, triple]

    series.value = [{
        data: newData
    }]
    //series.value.data = [sencilla, doble.value, triple, cuadruple]
    //console.log(series.value[0].data)
}
onMounted(async () => {
    load()
})
</script>

<style scoped>
/* Add the CSS here */
.chart-container {
    position: relative;
    width: 100%;
    height: 300px;
    /* Set an initial height */
}

.chart-container .apexcharts-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>