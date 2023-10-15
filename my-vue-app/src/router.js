import { createRouter, createWebHistory } from 'vue-router'

    const routes = [
      {
        path: '/',
        name: 'home',
        component: () => import('./views/Hotel/HotelIndex.vue')
      },
      {
        path: '/hotel-list',
        name: 'hotel-list',
        component: () => import('./views/Hotel/HotelList.vue')
      },
      {
        path: '/hotel-create',
        name: 'hotel-create',
        component: () => import('./views/Hotel/HotelCreate.vue')
      },
      {
        path: '/hotel-edit',
        name: 'hotel-edit',
        component: () => import('./views/Hotel/HotelEdit.vue')
      },
      {
        path: '/hotel-delete',
        name: 'hotel-delete',
        component: () => import('./views/Hotel/HotelDelete.vue')
      },
      {
        path: '/hotel-search',
        name: 'hotel-search',
        component: () => import('./views/Hotel/HotelSearch.vue')
      },
      {
        path: '/room-list',
        name: 'room-list',
        component: () => import('./views/Room/RoomList.vue')
      },
      {
        path: '/room-create',
        name: 'room-create',
        component: () => import('./views/Room/RoomCreate.vue')
      },
      {
        path: '/room-edit',
        name: 'room-edit',
        component: () => import('./views/Room/RoomEdit.vue')
      },
      {
        path: '/room-delete',
        name: 'room-delete',
        component: () => import('./views/Room/RoomDelete.vue')
      },
      {
        path: '/room-search',
        name: 'room-search',
        component: () => import('./views/Room/RoomSearch.vue')
      },
      {
        path: '/hotel-report',
        name: 'hotel-report',
        component: () => import('./views/Reports/HotelReport.vue')
      },
      {
        path: '/room-report',
        name: 'room-report',
        component: () => import('./views/Reports/RoomReport.vue')
      },
      
    ]

    const router = createRouter({
      history: createWebHistory(),
      routes
    })
    export default router