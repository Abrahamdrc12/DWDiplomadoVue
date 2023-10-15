<template>
    <Layout>
        <div
            class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mb-4">

            <form @submit.prevent="" class="space-y-6 mb-4">

                <h5 class="text-xl text-center text-bold font-medium text-gray-900 dark:text-white">Eliminar habitacion
                </h5>
                <p>Recuerde que esta accion no se puede deshacer</p>

                <dropdown text="Hotel">
                        <list-group>
                            <list-group-item>
                                <template #prefix>
                                    <svg class="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </template>
                                Hotel 0
                            </list-group-item>
                            <list-group-item>
                                <template #prefix>
                                    <svg class="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z">
                                        </path>
                                    </svg>
                                </template>
                                Hotel 1
                            </list-group-item>
                            <list-group-item>
                                <template #prefix>
                                    <svg class="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </template>
                                Hotel 2
                            </list-group-item>
                            <list-group-item>
                                <template #prefix>
                                    <svg class="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </template>
                                Hotel 3
                            </list-group-item>
                        </list-group>
                    </dropdown>

                <Input size="lg" placeholder="Porfavor ingrese el NIT del Hotel" label="Codigo de habitacion">
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
import { Button, Input, Dropdown, ListGroup, ListGroupItem } from 'flowbite-vue'
</script>