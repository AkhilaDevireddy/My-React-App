// import './TabButton.css';
import { useState } from 'react';
// import { AppHeaderDetails } from '../AppCoverPage/AppCoverPage'

export default function ClickButton({ stmt, children }) {     // Here children props should be named as {children}, no other choice.
    function handleClick() {
        console.log({stmt})
    }
    return <button onClick={handleClick}>{children}</button>
}

export function Appy() {
    const [ styleStatus, setStyleStatus ] = useState("")
    function ToggleHandler() {
        setStyleStatus("active")
    }
    return (
        <div>
            <div className={styleStatus}>
                <p>Style me!</p>
            </div>
            <button onClick={ToggleHandler}>Toggle style</button>
        </div>
    );
}
