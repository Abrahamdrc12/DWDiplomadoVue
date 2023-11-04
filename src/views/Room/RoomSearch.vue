<template>
    <Layout>
        <div
            class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mb-4">
            <form @submit.prevent="" class="space-y-6" :validation-schema="schema">
                <h5 class="text-xl text-center font-medium text-gray-900 dark:text-white">Listar Habitacion</h5>
                <div class="grid gap-6">
                    <div>
                        <label for="countries"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hotel</label>
                        <select id="countries" v-model="hotel" @change="getRoom()"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Seleccione un hotel</option>
                            <option :value="h.id" v-for="h in hotels" :key="h.id">{{ h.name }}</option>
                        </select>
                    </div>
                </div>
            </form>

            <Table hoverable class="mb-4 mt-4">
                <table-head>
                    <table-head-cell>Codigo</table-head-cell>
                    <table-head-cell>Hotel</table-head-cell>
                    <table-head-cell>Acomodacion</table-head-cell>
                    <table-head-cell>Tipo</table-head-cell>
                    <table-head-cell>Cantidad</table-head-cell>
                </table-head>
                <table-body>
                    <table-row v-for="el in habitaciones" :key="el.id">
                        <table-cell>{{ el.id }}</table-cell>
                        <table-cell>{{ el.hotel.name }}</table-cell>
                        <table-cell>{{ el.accommodation.name }}</table-cell>
                        <table-cell>{{ el.type.name }}</table-cell>
                        <table-cell>{{ el.quantity }}</table-cell>
                    </table-row>
                </table-body>
            </Table>

        </div>
    </Layout>
</template>

<script setup>
import { Table, TableHead, TableBody, TableHeadCell, TableRow, TableCell } from 'flowbite-vue'
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
const habitaciones = ref()
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
    axios.put(link, data).then((result) => {
        store.alert('success', 'Habitacion eliminada con exito')
    }).catch((err) => {
        store.alert('error', err.response.data.message)
    });
}

const del = async () => {
    const link = "http://146.190.32.176/diplomado/api/rooms/" + habitacion.value.toString()
    axios.delete(link).then((result) => {
        store.alert('success', 'Habitacion editada con exito')
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

const getRoom = async () => {
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