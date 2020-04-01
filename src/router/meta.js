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
    title: '错误页面',
    breadcrumbParentId: 1,
    menuParentId: -1
  },
  {
    id: 31,
    name: '404',
    title: '404',
    breadcrumbParentId: 3,
    menuParentId: -1
  },
  {
    id: 4,
    title: '图表',
    icon: 'el-icon-phone',
    breadcrumbParentId: 1
  },
  {
    id: 41,
    name: 'echarts',
    title: 'ECharts',
    icon: 'el-icon-picture-outline',
    breadcrumbParentId: 4,
    menuParentId: 4
  },
  {
    // TODO:
    id: 5,
    title: '外链',
    icon: 'el-icon-link',
    link: 'https://www.baidu.com'
  }
];
