import { useEffect } from 'react'
//@ts-ignore
import { createStore, useStore } from 'react-hookstore'

const AUTHTOKEN_STORAGE_KEY = 'authToken'

const initialState = localStorage[AUTHTOKEN_STORAGE_KEY]
// console.log('authStore initial state', initialState)
const authStore = createStore('authStore', initialState || null)

// refactor out usePersistentStore?
export const useAuthResponse = () => {
  const [authResponse, setAuthResponseState] = useStore(authStore)

  // writing to auth token local storage will NOT automatically update authToken via sync fn
  // https://stackoverflow.com/questions/5370784/localstorage-eventlistener-is-not-called
  const setAuthResponse = (t: string) => {
    setAuthResponseState(t)
    localStorage.setItem(AUTHTOKEN_STORAGE_KEY, t)
  }
  
  const clearAuthResponse = () => {
    setAuthResponseState(null)
    localStorage.removeItem(AUTHTOKEN_STORAGE_KEY)
  }

  // listen to changes to local storage IN OTHER WINDOWS ONLY! and update appropriately
  const syncFromLocalStorage = (e: StorageEvent) => {
    if (e.key == AUTHTOKEN_STORAGE_KEY) { setAuthResponseState(e.newValue) }
  }

  useEffect(() => {
    window.addEventListener('storage', syncFromLocalStorage);
    return () => { window.removeEventListener('storage', syncFromLocalStorage) }
  }, [])

  return {
    authResponse,
    setAuthResponse,
    clearAuthResponse,
  }
}

