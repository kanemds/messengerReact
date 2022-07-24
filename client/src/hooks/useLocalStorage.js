import {useEffect, useState } from 'react'


const PREFIX = 'whatsapp-clone-'

// set local storage
// data stored in the browser will remain even when the browser window is closed.
function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey)
    if (jsonValue != null) return JSON.parse(jsonValue)
    if (typeof initialValue === 'function') {
      return initialValue()
    } else {
      return initialValue
    }
  })

  // convert them to a string with JSON.stringify() before saving
  // retrieve the data, convert them to an object with JSON.parse()
  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value))
  }, [prefixedKey,value])
  return [value, setValue]
}

export default useLocalStorage