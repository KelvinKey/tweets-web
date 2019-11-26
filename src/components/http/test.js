/**   
 * api接口统一管理
 */
import {get, post } from './axios'

// 用户登录
export const apiLoadTest = a => post('/auth/login', a);

// 用户注册
export const test1 = b => post('/auth/register', b);

// 获取图片验证码
export const test2 = c => post('/auth/captcha', c);

// 发送短信验证码
export const test3 = d => post('/auth/verification', d);