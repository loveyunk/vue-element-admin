import NProgress from 'nprogress';
import router from './router';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

router.beforeEach((to, from, next) => {
  NProgress.start();

  // redirect to login page if user is not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (loggedIn) {
    if (to.path === '/login') {
      next({ path: '/' });
      NProgress.done();
    } else {
      next();
    }
  } else if (authRequired) {
    next(`/login?redirect=${to.path}`);
    NProgress.done();
  } else {
    next();
  }
});

router.afterEach(() => {
  NProgress.done();
});
