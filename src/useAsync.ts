/*
Uses new react hooks to async do a thing.
There are a couple npm packages out there that do this, but
a) none of them have typescript bindings
b) i would rather practice hooks and write this myself than write bindings for someone else's thing
*/

import { useState, useEffect } from 'react';

// export type AsyncStatePending<T> = {
//   result: undefined
//   isComplete: false,
//   isErrored: false,
// }

export type AsyncState<T> = {
  result: T | undefined,
  isComplete: boolean,
  isErrored: boolean,
}

// export type AsyncStateErrored<T> = {
//   result: undefined,
//   isComplete: false,
//   isErrored: true,
// }

// export type AsyncState<T> = AsyncStatePending<T> | AsyncStateErrored<T> | AsyncStateComplete<T>

export function useAsync<T>(fn: Function, args?: any) {
  const [state, setState] = useState<AsyncState<T>>({
    result: undefined,
    isComplete: false,
    isErrored: false,
  })

  const effect = async (args: any) => {
    // setState(Object.assign({}, state, {isComplete: true}))
    const result = await fn(args)
    setState(Object.assign({}, state, {
      isComplete: true,
      result,
    }))
  }

  useEffect(() => { effect(args) }, [])

  return {state, setState}
}