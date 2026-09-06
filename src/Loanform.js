import React, { useState } from 'react';
import './fromstyle.css'
import Modal from './Modal'

const Loanform = () => {

    const [showeModal , setShoweModal] = useState(false);
    const [loanInput , setLoanInput] = useState({
        name: '',
        phoneNumber: '',
        age:'',
        isEmployee: false,
        salary: '',
    });
 console.log(loanInput);

    const handelSubmit = (event) => {
        event.preventDefault();
        setShoweModal(true);
    };

    // const btinIsDisabel = () => {
    //     const check = loanInput.name == ''  || loanInput.phoneNumber == '' || loanInput.age == '';
    //     console.log(check);
    //     return check;
    // }
    const btinIsDisabel = loanInput.name == ''  || loanInput.phoneNumber == '' || loanInput.age == '';

    const handelCloseModal = () => {
        setShoweModal(false);
    }
    return (
        <>
            <form className='flex'>
                <h1>Requesting A Loan</h1>
                <hr />

                <label>Name</label>
                <input type="text" placeholder="Enter your name" value={loanInput.name} onChange={(event) => {setLoanInput({...loanInput ,name: event.target.value})}}  />

                <label>Phone Number:</label>
                <input type="tel" placeholder="Enter your phone number" value={loanInput.phoneNumber} onChange={(event) => {setLoanInput({...loanInput ,phoneNumber: event.target.value})}} />

                <label>Age:</label>
                <input type="number" placeholder="Enter your age" value={loanInput.age} onChange={(event) => {setLoanInput({...loanInput ,age: event.target.value})}}  />

                <label>Are You An Employee:</label>
                <input type='checkbox' checked={loanInput.isEmployee} onChange={(even) => { setLoanInput({...loanInput , isEmployee: even.target.checked}) }} />

                <label>Please Choose Your Salary:</label>
                <select value={loanInput.salary} onChange={(event) => {setLoanInput({...loanInput , salary: event.target.value})}}>
                    <option>less than $500</option>
                    <option>Between $500-$2000</option>
                    <option>Above $2000</option>
                </select>

                <button type="submit" onClick={handelSubmit} disabled={btinIsDisabel}>Submit</button>
            </form>


            <div onClick={handelCloseModal}>
            <Modal isvisible={showeModal} name={loanInput.name} message='The From Has Been Submitted Successfully 😊' />
            </div>
        </>
    );
}

export default Loanform;
