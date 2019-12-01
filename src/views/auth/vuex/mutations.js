import * as TYPES from './mutations-types'
import { setToken } from '@/utils/http'
import ls from '@/utils/localStorage'

export default {
  [TYPES.SET_TOKEN] (state, value) {
    state.token = value
    setToken(value)
    ls.set('token', value)
  },
  [TYPES.SET_USER] (state, value) {
    state.user = value
    ls.set('user', value)
  }
}
