<template>
  <Layout>
    <h5 class="text-xl text-center font-medium text-gray-900 dark:text-white">Listar Hotel</h5>
    <div class="grid gap-6">
      <div>
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hotel</label>
        <select id="countries" v-model="hotel" @change="getRoom()"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="">Seleccione un hotel</option>
          <option :value="h.id" v-for="h in hotels" :key="h.id">{{ h.name }}</option>
        </select>
      </div>
    </div>

    <Table hoverable class="mb-4 mt-4">
      <table-head>
        <table-head-cell>NIT</table-head-cell>
        <table-head-cell>Nombre</table-head-cell>
        <table-head-cell>Ciudad</table-head-cell>
        <table-head-cell>Direccion</table-head-cell>
        <table-head-cell>#Habitaciones</table-head-cell>
        <table-head-cell>ver</table-head-cell>
        <table-head-cell>Editar</table-head-cell>
        <table-head-cell>Eliminar</table-head-cell>
      </table-head>
      <table-body v-if="list !== null">
        <table-row>
          <table-cell>{{ list.nit }}</table-cell>
          <table-cell>{{ list.name }}</table-cell>
          <table-cell>{{ list.city.name }}</table-cell>
          <table-cell>{{ list.address }}</table-cell>
          <table-cell>{{ list.num_rooms }}</table-cell>
          <table-cell class="text-center justify-center">
            <router-link :to="{ name: 'hotel-search', params: { id: list.id } }"
              class="font-medium text-blue-600 dark:text-green-500 hover:underline">Detalles</router-link>
          </table-cell>
          <table-cell class="text-center justify-center">
            <router-link :to="{ name: 'hotel-edit', params: { id: list.id } }"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</router-link>
          </table-cell>
          <table-cell class="text-center justify-center">
            <p class="text-red-600 btn" @click="del(list.id)">Eliminar</p>
          </table-cell>
        </table-row>
      </table-body>
    </Table>
  </Layout>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { Table, TableHead, TableBody, TableHeadCell, TableRow, TableCell } from 'flowbite-vue'
import Layout from '../../layouts/AdminLayout.vue';
import { mainStore } from '../../stores/mainStore';
import axios from 'axios'

const store = mainStore();
const list = ref(null)
const hotels = ref({})
const hotel = ref(null)

const del = async(id) => {
    const link = "http://146.190.32.176/diplomado/api/hotels/" + id.toString()
    axios.delete(link).then((result) => {
        store.alert('success', 'Hotel eliminado con exito')
    }).catch((err) => {
        store.alert('error', err.response.data.message)
    });
}
const getRoom = async () => {
  list.value = await store.get('hotels/' + hotel.value.toString())
  list.value = list.value.data
  console.log(list.value)
}
onMounted(async () => {
  hotels.value = await store.get('hotels')
  hotels.value = hotels.value.data
})

</script>