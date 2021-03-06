export default [
  {
    id: 1,
    name: 'dashboard',
    title: '首页',
    icon: 'el-icon-delete-solid'
  },
  {
    id: 2,
    name: 'user',
    title: '用户管理',
    icon: 'el-icon-more',
    breadcrumbParentId: 1
  },
  {
    id: 3,
    title: '图表',
    icon: 'el-icon-phone',
    breadcrumbParentId: 1
  },
  {
    id: 31,
    name: 'echarts',
    title: 'ECharts',
    icon: 'el-icon-picture-outline',
    breadcrumbParentId: 3,
    menuParentId: 3
  },
  {
    id: 4,
    name: 'login',
    title: '登录',
    menuParentId: -1
  },
  {
    id: 5,
    name: '404',
    title: '404',
    menuParentId: -1
  },
  {
    // TODO:
    id: 5,
    title: '外链',
    icon: 'el-icon-link',
    link: 'https://www.baidu.com'
  }
];
