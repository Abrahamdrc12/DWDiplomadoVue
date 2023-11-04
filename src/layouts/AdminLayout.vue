<template>
    <Navbar class="bg-black pb-4">
        <template #logo>
            <NavbarLogo alt="Admin logo"
                image-url="https://demos.pixinvent.com/vuexy-angular-admin-template/documentation/logo.svg">
                Admin Panel
            </NavbarLogo>
        </template>
        <template #default="{ isShowMenu }">
            <NavbarCollapse :isShowMenu="isShowMenu" class="">
                <NavbarLink is-active><router-link to="/hotel-list" class="flex pl-11 pb-3">Listar Hoteles</router-link>
                </NavbarLink>
                <NavbarLink><router-link to="/hotel-create" class="flex pl-11 pb-3">Crear Hoteles</router-link></NavbarLink>
                <NavbarLink><router-link to="/room-create" class="flex pl-11 pb-3">Crear Habitaciones</router-link>
                </NavbarLink>
                <NavbarLink><router-link to="/room-edit" class="flex pl-11 pb-3">Editar Habitaciones</router-link>
                </NavbarLink>
                <NavbarLink><router-link to="/room-search" class="flex pl-11 pb-3">Listar Habitaciones</router-link>
                </NavbarLink>
            </NavbarCollapse>
        </template>
    </Navbar>

    <Sidebar class="mt-24 p-1 hidden  lg:block md:block">
        <SidebarDropdownItem>
            <template #icon>
                <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                    <path
                        d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path
                        d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
            </template>
            <template #trigger> Hoteles </template>
            <template #default>
                <router-link to="/hotel-list" class="flex pl-11 pb-3">Listar Hoteles </router-link>
                <router-link to="/hotel-create" class="flex pl-11 pb-3">Crear Hoteles </router-link>
            </template>
        </SidebarDropdownItem>

        <SidebarDropdownItem>
            <template #icon>
                <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                    <path
                        d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path
                        d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
            </template>
            <template #trigger> Habitaciones </template>
            <template #default>
                <router-link to="/room-edit" class="flex pl-11 pb-3">Editar Habitaciones </router-link>
                <router-link to="/room-create" class="flex pl-11 pb-3">Crear Habitaciones </router-link>
                <router-link to="/room-search" class="flex pl-11 pb-3">Buscar Habitaciones </router-link>

            </template>
        </SidebarDropdownItem>

        <SidebarDropdownItem>
            <template #icon>
                <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                    <path
                        d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path
                        d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
            </template>
            <template #trigger> Informes </template>
            <template #default>
                <router-link to="/room-report" class="flex pl-11 pb-3">Total Habitaciones </router-link>
                <router-link to="/hotel-report" class="flex pl-11 pb-3">Total Acomodaciones </router-link>

            </template>
        </SidebarDropdownItem>

    </Sidebar>
    <div class="p-4 md:ml-64 bg-black sm:ml-0  ">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <div class="gap-4 mb-4">
                <slot />
                <Footer />
            </div>
        </div>
    </div>
</template>
<script setup>
import { Sidebar, SidebarItem, SidebarDropdownItem, Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from 'flowbite-vue'
import Footer from '../components/Footer.vue'
</script>