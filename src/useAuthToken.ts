import { useEffect } from 'react'
//@ts-ignore
import { createStore, useStore } from 'react-hookstore'

const AUTHTOKEN_STORAGE_KEY = 'authToken'

const authStore = createStore('authStore', localStorage[AUTHTOKEN_STORAGE_KEY])

// refactor out usePersistentStore?
export const useAuthToken = () => {
  const [authToken, setAuthTokenState] = useStore(authStore)

  // writing to auth token local storage will NOT automatically update authToken via sync fn
  // https://stackoverflow.com/questions/5370784/localstorage-eventlistener-is-not-called
  const setAuthToken = (t: string) => {
    setAuthTokenState(t)
    localStorage.setItem(AUTHTOKEN_STORAGE_KEY, t)
  }
  
  const clearAuthToken = () => {
    setAuthTokenState(null)
    localStorage.removeItem(AUTHTOKEN_STORAGE_KEY)
  }

  // listen to changes to local storage IN OTHER WINDOWS ONLY! and update appropriately
  const syncFromLocalStorage = (e: StorageEvent) => {
    if (e.key == AUTHTOKEN_STORAGE_KEY) { setAuthTokenState(e.newValue) }
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

