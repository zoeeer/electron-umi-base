export default [
  {
    path: '/docs',
    component: './appdoc/index',
  },
  {
    path: '/',
    component: '../layouts/index.js',
    routes: [
      {
        path: '/',
        component: './page1/index',
      },
      {
        path: '/page2',
        component: './page2/page2.js',
      },
      {
        path: '/demo',
        component: './demo/index.js',
      },
      {
        path: '/check-update',
        component: './appUpdate/index',
      },
      // {
      //   path: '/docs',
      //   component: './appdoc/index',
      // },
    ],
  },
];
