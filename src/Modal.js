import React from 'react';
import './fromstyle.css'

const Modal = ({isvisible , name , message}) => {
   if(isvisible){
     return (
        <div id='modal'>
            <div className='modal-content'>

            <h1>{name} 👋 {message} </h1>
            </div>
        </div>
    );
   }else{
    return <></>
   }
}

export default Modal;
