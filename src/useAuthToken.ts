import React, { useState, useEffect } from 'react'
//@ts-ignore
import { createStore, useStore } from 'react-hookstore'

const authStore = createStore('authStore', localStorage['authToken'])

export const useAuthToken = () => {
  const key = 'authToken'
  // const [authToken, setAuthTokenState] = useState(localStorage[key])
  const [authToken, setAuthTokenState] = useStore(authStore)

  // writing to auth token local storage will NOT automatically update authToken via sync fn
  // https://stackoverflow.com/questions/5370784/localstorage-eventlistener-is-not-called
  const setAuthToken = (t: string) => {
    setAuthTokenState(t)
    localStorage.setItem(key, t)
  }
  
  const clearAuthToken = () => {
    console.log('clearing auth state')
    setAuthTokenState(null)
    localStorage.removeItem(key)
  }

  // listen to changes to local storage IN OTHER WINDOWS ONLY! and update appropriately
  const syncFromLocalStorage = (e: StorageEvent) => {
    if (e.key == key) { setAuthTokenState(e.newValue) }
  }

  useEffect(() => {
    window.addEventListener('storage', syncFromLocalStorage);
    return () => { window.removeEventListener('storage', syncFromLocalStorage) }
  }, [])

  return {
    authToken,
    setAuthToken,
    clearAuthToken,
  }
}

