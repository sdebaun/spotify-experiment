import React, { useState, useEffect } from 'react'

// this clever useStore stuff courtesy of:
// https://blog.usejournal.com/global-state-management-with-react-hooks-5e453468c5bf
type Setter<T> = (val: T | null) => void

type Store<T> = {
  state: T,
  setState: (value: T | null) => void,
  setters: Setter<T>[]
}

const store: Store<string> = {
  state: '',
  setState(value: any) {
    this.state = value;
    this.setters.forEach(setter => setter(this.state))
  },
  setters: []
}

store.setState = store.setState.bind(store)

const useStore = (initialState: any):[string | null, Setter<string>] => {
  const [state, set] = useState<string | null>(initialState)
  if (!store.setters.includes(set)) { store.setters.push(set) }
  return [ state, store.setState ]
}

export const useAuthToken = () => {
  const key = 'authToken'
  // const [authToken, setAuthTokenState] = useState(localStorage[key])
  const [authToken, setAuthTokenState] = useStore(localStorage[key])

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