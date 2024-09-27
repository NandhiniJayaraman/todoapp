import { createRouter, createWebHistory } from 'vue-router';
import Form from '@/components/ToDoForm.vue';
import ToDoList from '@/components/ToDoList.vue';
import Dashboard from '@/pages/Dashboard.vue';
import ToDoRules from '@/components/ToDoRules.vue';
import ToDoApp from '@/components/ToDoApp.vue';

const routes = [
  {
    path: '/Dashboard',
    name: '*',
    component: Dashboard,
  },
  {
    path: '/form',
    name: 'form',
    component: Form,
  },
  {
    path: '/list',
    name: 'list',
    component: ToDoList,
  },
  {
    path: '/rules',
    name: 'rules',
    component: ToDoRules,
  },
  {
    path: '/',
    name: '*',
    component: ToDoApp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
