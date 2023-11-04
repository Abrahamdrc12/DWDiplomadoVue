<template>
    <Layout>
        <div
            class="flex justify-center">
            <form @submit.prevent="" class="space-y-6 w-1/2 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mb-4" :validation-schema="schema">
                <h5 class="text-xl text-center font-medium text-gray-900 dark:text-white">Editar Habitacion</h5>
                <div class="grid gap-6">
                    <div>
                        <label for="countries"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hotel</label>
                        <select id="countries" v-model="hotel"  @change="getRoom()"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Seleccione un hotel</option>
                            <option :value="h.id" v-for="h in hotels" :key="h.id">{{ h.name }}</option>
                        </select>
                    </div>
                    <div>
                        <label for="countries"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Habitacion</label>
                        <select id="countries" v-model="habitacion"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Seleccione una habitacion</option>
                            <option :value="h.id" v-for="h in habitaciones" :key="h.id">{{ h.id }}</option>
                        </select>
                    </div>
                    <div>
                        <label for="tipos" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo</label>
                        <select id="tipos" v-model="rtype"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="" :selected="true">Seleccione un tipo</option>
                            <option :value="h.id" v-for="h in rtypes" :key="h.id">{{ h.name }}</option>
                        </select>
                    </div>
                    <div>
                        <label for="countries"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Acomodacion</label>
                        <select id="countries" v-model="accom"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Seleccione una acomodacion</option>
                            <option :selected="h.name" :value="h.id" v-for="h in accoms" :key="h.id">{{ h.name }}</option>
                        </select>
                    </div>
                    <InputValidated label="Cantidad" name="cuartos" v-model="cuartos">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9" />
                        </svg>
                    </InputValidated>
                    <div class="flex gap-3 justify-center">
                        <Button color="default" class="w-sm" @click="submit">Editar Habitacion</Button>
                        <Button color="red" class="w-sm" @click="del">Eliminar Habitacion</Button>
                    </div>
                    
                </div>
            </form>
        </div>
    </Layout>
</template>

<script setup>
import { Button, Input } from 'flowbite-vue'
import { ref, onMounted, computed, watch } from 'vue';
import { ErrorMessage, useField, useForm } from 'vee-validate';
import router from '../../router';
import * as yup from 'yup';
import Layout from '../../layouts/AdminLayout.vue';
import { Dropdown, ListGroup, ListGroupItem, SidebarDropdownItem } from 'flowbite-vue';
import { initFlowbite } from 'flowbite'
import { mainStore } from '../../stores/mainStore';
import Swal from 'sweetalert2';
import axios from "axios";
import InputValidated from '../../components/InputValidated.vue';


const store = mainStore();
const hotels = ref({})
const hotel = ref('')
const rtypes = ref({})
const rtype = ref('')
const accoms = ref({})
const accom = ref('')
const cuartos = ref('')
const habitaciones = ref({})
const habitacion = ref('')

const schema = yup.object({
    hotel_id: yup.number().typeError('Seleccione un hotel').required('Porfavor rellene el nit').min(1),
    room_type_id: yup.number().typeError('Rellene el campo tipo').required('Rellene el campo nombre').min(1),
    accommodation_id: yup.number().typeError('Rellene el campo acomodacion').required('Rellene el campo acomodacion').min(1),
    quantity: yup.number().typeError('Rellene el campo cantidad').required('Rellene el campo cantidad').min(1),
});

const fields = computed(() => {
    return {
        hotel_id: parseInt(hotel.value),
        room_type_id: parseInt(rtype.value),
        accommodation_id: parseInt(accom.value),
        quantity: parseInt(cuartos.value),
        habitacion: habitacion.value,
    };
});

watch([hotel, rtype, accom, cuartos, habitacion], () => {
    fields.value = {
        hotel_id: parseInt(hotel.value),
        room_type_id: parseInt(rtype.value),
        accommodation_id: parseInt(accom.value),
        quantity: parseInt(cuartos.value),
    };
    habitacion.value = habitacion.value;
});

const send = async (data) => {
    //console.log(habitacion.value)
    const link = "http://146.190.32.176/diplomado/api/rooms/" + habitacion.value.toString()
    axios.put(link , data).then((result) => {
        store.alert('success', 'Habitacion editada con exito')
    }).catch((err) => {
        store.alert('error', err.response.data.message)
    });
}

const del = async() => {
    const link = "http://146.190.32.176/diplomado/api/rooms/" + habitacion.value.toString()
    axios.delete(link).then((result) => {
        store.alert('success', 'Habitacion eliminado con exito')
    }).catch((err) => {
        store.alert('error', err.response.data.message)
    });
}
const submit = () => {
    schema.validate(fields.value).then((valid) => {
        send(fields.value)
    }).catch((err) => {
        store.alert('error', err.message);
    });
};

const getRoom = async() => {
    habitaciones.value = await store.get('rooms/' + fields.value.hotel_id.toString())
    habitaciones.value = habitaciones.value.data
}

onMounted(async () => {
    initFlowbite();
    hotels.value = await store.get('hotels')
    hotels.value = hotels.value.data
    rtypes.value = await store.get('room-types')
    accoms.value = await store.get('accommodation-types')
})
</script>