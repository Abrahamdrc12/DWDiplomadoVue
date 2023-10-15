<template>
    <Layout>
        <div
            class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mb-4">

            <form @submit.prevent="" class="space-y-6 mb-4">

                <h5 class="text-center text-xl font-black mx-8 mb-4">Porfavor ingrese el NIT del Hotel
                    a buscar
                </h5>

                <Input size="lg" placeholder="Porfavor ingrese el NIT del Hotel a buscar" label="NIT del hotel">
                <template #prefix>
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </template>
                <template #suffix>
                    <Button>Buscar</Button>
                </template>
                </Input>

            </form>

            <h1 class="text-center text-xl font-black mx-8 mb-4">Resultados de busqueda</h1>


            <Table hoverable class="mb-4">
                <table-head>
                    <table-head-cell>Hotel</table-head-cell>
                    <table-head-cell>NIT</table-head-cell>
                    <table-head-cell>Ciudad</table-head-cell>
                    <table-head-cell>Direccion</table-head-cell>
                    <table-head-cell>#Habitaciones</table-head-cell>
                    <table-head-cell><span class="sr-only">Edit</span></table-head-cell>
                </table-head>
                <table-body>
                    <table-row>
                        <table-cell>Hotel Fantasia</table-cell>
                        <table-cell>1234</table-cell>
                        <table-cell>Sahagun</table-cell>
                        <table-cell>Calle 12</table-cell>
                        <table-cell>120</table-cell>
                        <table-cell>
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </table-cell>
                    </table-row>

                    <table-row>
                        <table-cell>Hotel Cantabria</table-cell>
                        <table-cell>1234</table-cell>
                        <table-cell>Sahagun</table-cell>
                        <table-cell>Calle 12</table-cell>
                        <table-cell>120</table-cell>
                        <table-cell>
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </table-cell>
                    </table-row>

                    <table-row>
                        <table-cell>Hotel Santa Catalina</table-cell>
                        <table-cell>1234</table-cell>
                        <table-cell>Sahagun</table-cell>
                        <table-cell>Calle 12</table-cell>
                        <table-cell>120</table-cell>
                        <table-cell>
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </table-cell>
                    </table-row>

                </table-body>
            </Table>


        </div>


       

    </Layout>
</template>

<script setup>
import Layout from '../../layouts/AdminLayout.vue';
import { Table, TableHead, TableBody, TableHeadCell, TableRow, TableCell, Button, Input } from 'flowbite-vue'
</script>