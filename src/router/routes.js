export default [
  {
    path: '/auth/register',
    name: 'Register',
    component: () => import('@/views/auth/Register')
  },
  {
    path: '/auth/validate-phone',
    name: 'ValidatePhone',
    component: () => import('@/views/auth/ValidatePhone')
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: () => import('@/views/auth/Login')
  }
]
