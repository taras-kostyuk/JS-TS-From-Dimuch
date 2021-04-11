import React, {ChangeEvent, MouseEvent} from "react";

export const User = () => {
    const deleteUser = (event:MouseEvent<HTMLButtonElement>) => {

        console.log(event.currentTarget.name);
    }
    const inputChange = (event:ChangeEvent<HTMLInputElement>) =>{
        console.log('age number' + event.currentTarget.value)
    }

    const saveUser = () => {
        console.log("User saved")
    }
    const onNameChanged = () => {
        console.log("Name Changed")
    }
const focusLostHandler = () => {
    console.log("focus lost")
}


    return <div>
        <textarea onBlur={focusLostHandler} onChange={onNameChanged}>   </textarea>
        <input type="number" onChange={inputChange}/>

        Dimych <button name="delete" onClick={deleteUser}>x</button>
        <button name="save"  onClick={deleteUser}>x</button>
    </div>
}