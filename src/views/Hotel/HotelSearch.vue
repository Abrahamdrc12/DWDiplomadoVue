<template>
    <Layout>
        <div
            class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mb-4">

            <h1 class="text-center text-xl font-black mx-8 mb-4">Detalles de Hotel</h1>


            <Table hoverable class="mb-4">
                <table-head>
                    <table-head-cell>NIT</table-head-cell>
                    <table-head-cell>Nombre</table-head-cell>
                    <table-head-cell>Ciudad</table-head-cell>
                    <table-head-cell>Direccion</table-head-cell>
                    <table-head-cell class="text-center">#Habitaciones</table-head-cell>
                </table-head>
                <table-body>
                    <table-row>
                        <table-cell>{{ result?.nit }}</table-cell>
                        <table-cell>{{ result?.name }}</table-cell>
                        <table-cell>{{ result?.city.name }}</table-cell>
                        <table-cell>{{ result?.address }}</table-cell>
                        <table-cell>{{ result?.num_rooms }}</table-cell>
                    </table-row>
                </table-body>
            </Table>
        </div>
    </Layout>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import router from '../../router';
import Layout from '../../layouts/AdminLayout.vue';
import { Table, TableHead, TableBody, TableHeadCell, TableRow, TableCell, Button, Input } from 'flowbite-vue'
import { mainStore } from '../../stores/mainStore';

const store = mainStore();
const id = router.currentRoute.value.params.id;

const result = ref(null);

onMounted(async () => {
    result.value = await store.get('hotels/' + id);
    result.value = result.value.data;
});

</script>