import Cookies from 'js-cookie'

export function getToken(key) {
  return Cookies.get(key)
}

export function setToken(key, value) {
  return Cookies.set(key, value)
}

export function removeToken(key) {
  return Cookies.remove(key)
}
