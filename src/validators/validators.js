import React from "react";

export const requiriedField = (value)=> {

    return value ? undefined : 'Required field'
}


export const minValue = (value) =>{

    return  value && value < 0 ? `Must be >0 characters or more` : undefined
}

