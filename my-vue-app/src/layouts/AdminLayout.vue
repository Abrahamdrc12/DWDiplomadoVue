<template>
    <Navbar class="bg-black pb-4">
        <template #logo>
            <NavbarLogo link="https://www.google.com/" alt="Flowbite logo"
                image-url="https://flowbite.com/docs/images/logo.svg">
                Admin Panel
            </NavbarLogo>
        </template>
        <template #default="{ isShowMenu }">
            <NavbarCollapse :isShowMenu="isShowMenu">
                <NavbarLink is-active>Inicio</NavbarLink>
                <NavbarLink>Hoteles</NavbarLink>
                <NavbarLink>Habitaciones</NavbarLink>
                <NavbarLink>Informes</NavbarLink>
            </NavbarCollapse>
        </template>
        <template #right-side>
            <button type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Abandonar</button>
        </template>
    </Navbar>

    <Sidebar class="mt-20 p-1 hidden  lg:block md:block">

        <SidebarItem>
            <template #icon>
                <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                    <path
                        d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path
                        d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
            </template>
            <template #default>Dashboard</template>
        </SidebarItem>



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
                <SidebarItem class="pl-11"> <router-link to="/hotel-list">Listar Hoteles </router-link></SidebarItem>
                <SidebarItem class="pl-11"> <router-link to="/hotel-create">Crear Hoteles </router-link> </SidebarItem>
                <SidebarItem class="pl-11"> <router-link to="/hotel-edit">Editar Hoteles </router-link> </SidebarItem>
                <SidebarItem class="pl-11"> <router-link to="/hotel-delete">Eliminar Hoteles </router-link> </SidebarItem>
                <SidebarItem class="pl-11"> <router-link to="/hotel-search">Mostar Hoteles </router-link> </SidebarItem>


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
                <SidebarItem class="pl-11"> <router-link to="/room-list">Listar Habitaciones </router-link></SidebarItem>
                <SidebarItem class="pl-11"> <router-link to="/room-create">Crear Habitaciones </router-link> </SidebarItem>
                <SidebarItem class="pl-11"> <router-link to="/room-edit">Editar Habitaciones </router-link> </SidebarItem>
                <SidebarItem class="pl-11"> <router-link to="/room-delete">Eliminar Habitaciones </router-link> </SidebarItem>
                <SidebarItem class="pl-11"> <router-link to="/room-search">Mostar Habitaciones </router-link> </SidebarItem>
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
                <SidebarItem class="pl-11"> <router-link to="/room-report">Total Habitaciones </router-link></SidebarItem>
                <SidebarItem class="pl-11"> <router-link to="/hotel-report">Total Acomodaciones </router-link> </SidebarItem>
             
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