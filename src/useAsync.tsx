/*
Uses new react hooks to async do a thing.
There are a couple npm packages out there that do this, but
a) none of them have typescript bindings
b) i would rather practice hooks and write this myself than write bindings for someone else's thing
*/

import React, { useState, useEffect } from 'react';

export type AsyncState<T> = {
  result: T | undefined,
  isComplete: boolean,
  isErrored: boolean,
}

export function useAsync<T>(fn: Function, ...args: any) {
  const [state, setState] = useState<AsyncState<T>>({
    result: undefined,
    isComplete: false,
    isErrored: false,
  })

  const effect = async (args: any) => {
    const result = await fn(...args)
    setState(Object.assign({}, state, {
      isComplete: true,
      result,
    }))
  }

  useEffect(() => { try {
      effect(args)
    } catch (err) {
      console.log(err)
    }
  }, args)

  return {state, setState}
}

type RenderComponent<T> =  {
  children: (r: T) => JSX.Element[] | JSX.Element
}

export function AsyncSwitcher<T = any>({isComplete, isErrored, result, children}: AsyncState<T> & RenderComponent<T>) {
  if (!isComplete) return <div>Loading</div>
  if (isErrored) return <div>Error</div>
  if (!result) return <div>No Result</div>
  return <>{children(result)}</>
}