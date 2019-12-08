export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/Home')
  },
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
  },
  {
    path: '/topic/:topic_id',
    name: 'TopicTweets',
    component: () => import('@/views/home/Home')
  },
  {
    path: '/tweets/:tid',
    name: 'ShowTweet'
  }
]
