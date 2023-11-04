<template>
    <Layout>
        <div class="flex justify-center">
            <Form @submit="submit" :validation-schema="schema" class="space-y-2 w-1/2 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mb-4 justify-center" :initial-values="fields">
                <h5 class="text-xl text-center font-medium text-gray-900 dark:text-white">Crear Hotel</h5>
                <Input size="md" label="NIT" v-model="fields.nit" name="nit">
                <template #prefix>
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
                    </svg>

                </template>
                </Input>

                <Input size="md" label="Nombre" v-model="fields.name" name="name">
                <template #prefix>
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
                    </svg>

                </template>
                </Input>

                <div>
                    <label for="countries"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ciudad actual: {{ fields.city  }}</label>
                    <select id="countries" v-model="fields.city" v-if="fields.cities !== ''"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected :value="c.id" v-for="c in cities" :key="c.id">{{ c.name }}</option>
                    </select>
                </div>

                <Input size="md" label="Direccion" v-model="fields.address" name="address">
                <template #prefix>
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
                    </svg>

                </template>
                </Input>

                <Input size="md" label="Habitaciones" v-model="fields.rooms" name="rooms" type="number">
                <template #prefix>
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
                    </svg>

                </template>
                </Input>
                <div class="flex justify-center"><Button @click="submit" color="default" class="w-sm">Crear Hotel</Button></div>
            </Form>
        </div>
    </Layout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Form, Field, ErrorMessage, useField, useForm } from 'vee-validate';
import router from '../../router';
import * as yup from 'yup';
import Layout from '../../layouts/AdminLayout.vue';
import { Button, Input } from 'flowbite-vue';
import { Dropdown, ListGroup, ListGroupItem, SidebarDropdownItem } from 'flowbite-vue';
import { initFlowbite } from 'flowbite'
import { mainStore } from '../../stores/mainStore';
import Swal from 'sweetalert2';


const store = mainStore();
const id = router.currentRoute.value.params.id;
const schema = yup.object({
    nit: yup.string().required('Porfavor rellene el nit').min(3),
    name: yup.string().required('Rellene el campo nombre').min(3),
    address: yup.string().required('Rellene el campo nombre').min(1),
    city: yup.string().required('Rellene el campo ciudades').min(1),
    rooms: yup.string().required('Rellene el campo habitaciones').min(1),
});

const fields = ref({
    nit: '',
    name: '',
    address: '',
    city: '',
    rooms: ''
});

const cities = ref(null)

const errorMessage = ref(null)
// Validation function
const submit = () => {
    schema.validate(fields.value).then((valid) => {
        const data = { 
            city_id : fields.value.city,
            name: fields.value.name,
            nit: fields.value.nit,
            address: fields.value.address,
            num_rooms: fields.value.rooms
        }
        store.create(data)
        store.alert('success', 'Hotel creado con exito')
    }).catch((errors) => {
        console.log(errors)
      });
};

onMounted(async () => {
    cities.value = await store.get('cities')
    cities.value.data = fields.value.data
    initFlowbite();
})
</script>