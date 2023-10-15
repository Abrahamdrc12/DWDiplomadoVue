<template>
    <Layout>
        <div
            class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mb-4">

            <form @submit.prevent="" class="space-y-6 mb-4">

                <h5 class="text-xl text-center text-bold font-medium text-gray-900 dark:text-white">Porfavor ingrese el NIT del Hotel
                    a eliminar
                </h5>
                <p>Recuerde que esta accion no se puede deshacer</p>

                <Input size="lg" placeholder="Porfavor ingrese el NIT del Hotel" label="NIT del hotel">
                <template #prefix>
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z" />
                    </svg>
                </template>
                <template #suffix>
                    <Button>Eliminar</Button>
                </template>
                </Input>

            </form>


        </div>
    </Layout>
</template>

<script setup>
import Layout from '../../layouts/AdminLayout.vue';
import { Button, Input } from 'flowbite-vue'
</script>