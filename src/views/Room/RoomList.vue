<template>
  <Layout>
    <h1 class="text-center text-xl font-black mx-8 mb-4">Listado de hoteles registrados</h1>

    <Table hoverable class="mb-4">
      <table-head>
        <table-head-cell>Codigo</table-head-cell>
        <table-head-cell>Hotel</table-head-cell>
        <table-head-cell>Tipo</table-head-cell>
        <table-head-cell>Comodacion</table-head-cell>
        <table-head-cell>Cantidad</table-head-cell>
        <table-head-cell>Ver</table-head-cell>
        <table-head-cell>Editar</table-head-cell>
        <table-head-cell>Eliminar</table-head-cell>
      </table-head>
      <table-body>
        <table-row v-for="el in list" :key="el.id">
          <table-cell>{{ el.nit }}</table-cell>
          <table-cell>{{ el.name }}</table-cell>
          <table-cell>{{ el.city.name }}</table-cell>
          <table-cell>{{ el.address }}</table-cell>
          <table-cell>{{ el.num_rooms }}</table-cell>
          <table-cell class="text-center justify-center">
            <router-link :to="{ name: 'room-search', params: {id: el.id } }" class="font-medium text-blue-600 dark:text-green-500 hover:underline">Detalles</router-link>
          </table-cell>
          <table-cell class="text-center justify-center">
            <router-link :to="{ name: 'room-edit', params: {id: el.id } }" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</router-link>
          </table-cell>
          <table-cell class="text-center justify-center">
            <p class="text-red-600 btn" @click="del(el.id)">Eliminar</p>
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

const store = mainStore();
const list = ref(null)

const del = async(id) => {
  id = id.toString()
  await store.pop('rooms/'+id)
  store.alert('success', 'Eliminado con exito')
}

onMounted(async () => {
  list.value = await store.get('rooms')
  //list.value = list.value
  console.log(list.value)
})

</script>