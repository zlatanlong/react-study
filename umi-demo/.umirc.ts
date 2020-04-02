import { defineConfig } from 'umi';
// import routes from 'config/routes';

export default defineConfig({
  layout: {},
  antd: {},
  routes: [
    // dashboard
    { path: '/', redirect: '/demo' },
    {
      path: '/demo',
      name: '测试页',
      // icon: 'dashboard',
      component: '@/pages/demo',
      routes: [
        { path: '/demo/a', name: '测试1', component: '@/pages/demo' },
      ],
    },
    {
      path: '/addRoutine',
      name: '事务',
      // icon: 'dashboard',
      routes: [
        { path: '/addRoutine/a', name: '添加事务', component: '@/pages/addRoutine' },
      ],
    },
  ],
});
