import { useState } from "react";
export const useSimpleForm = (initialState) => {
    const [formState, setFormState] = useState(initialState);
     
    const reset = ()=>{
        setFormState(initialState)
    }
    
    const handleInput =({target})=>{
        setFormState({
         ...formState, [target.name]: target.value
        })
    }
   return [formState, handleInput, reset];
}

