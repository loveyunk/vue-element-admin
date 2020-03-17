export default [
  {
    id: 1,
    name: 'dashboard',
    title: '首页'
  },
  {
    id: 2,
    name: 'user',
    title: '用户管理',
    breadcrumbParentId: 1
  },
  {
    id: 3,
    title: '错误页面',
    breadcrumbParentId: 1
  },
  {
    id: 4,
    name: '404',
    title: '404',
    breadcrumbParentId: 3,
    menuParentId: 3
  },
  {
    id: 5,
    title: '图表',
    breadcrumbParentId: 1
  },
  {
    id: 6,
    name: 'echarts',
    title: 'ECharts',
    breadcrumbParentId: 5
  }
];
