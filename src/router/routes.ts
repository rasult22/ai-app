import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/main-page/index-page.vue') },
    ],
  },

  {
    path: '/playground',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/playground/index-page.vue') },
    ],
  },
  {
    path: '/main-page',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/main-page/index-page.vue') },
    ],
  },
  {
    path: '/result',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/result/index-page.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
