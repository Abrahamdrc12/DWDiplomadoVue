<template>
    <Layout>
        <h1 class="text-center text-xl font-black mx-8 mb-4">Listado de hoteles registrados</h1>

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
    </Layout>
  </template>
  <script setup>
  import { Table, TableHead, TableBody, TableHeadCell, TableRow, TableCell } from 'flowbite-vue'
  import Layout from '../../layouts/AdminLayout.vue';
  </script>