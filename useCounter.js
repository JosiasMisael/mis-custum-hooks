import { useState } from "react"

export const useCounter = (initialState = 0) => {
    const [state, setstate] = useState(initialState)

    const increments =()=>{
        setstate(state +1);
    }
    const decrements =()=>{
        setstate(state -1);
    }
    const reset =()=>{
        setstate(initialState);
    }

    return {
        increments, decrements, state, reset
    }
}


