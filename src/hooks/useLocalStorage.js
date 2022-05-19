import { useState } from 'react'


function useLocalStorage(key, intialValue) {
    const [localStorageValue, setLocalStorageValue] = 
    useState(() => getLocalStorageValue(key, intialValue))

    const setValue = (value) => {
        //check if function
        const valueToStore = value instanceof Function?value(localStorageValue):value;
        //set to state
        setLocalStorageValue(value)
        //set to localsstorage
        localStorage.setItem(key,JSON.stringify(valueToStore))
    }
    return [localStorageValue, setValue]
}

function getLocalStorageValue(key, intialValue) {
    const itemFromStorage = localStorage.getItem(key);
    return itemFromStorage ?JSON.parse(itemFromStorage) : intialValue;
}
export default useLocalStorage