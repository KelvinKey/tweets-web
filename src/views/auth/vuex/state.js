import ls from '@/utils/localStorage'

export default {
  user: ls.get('user'),
  token: ls.get('token')
}
