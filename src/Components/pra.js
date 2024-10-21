import React, { useState } from 'react';

export default function Pra() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to convert email to lowercase
    const handleEmailChange = () => {
        let newEmail = email.toLowerCase();
        setEmail(newEmail);
    };

    // Function to convert password to lowercase
    const handlePasswordChange = () => {
        let newPassword = password.toLowerCase();
        setPassword(newPassword);
    };

    // Function to handle button click and execute both functions
    const handleClick = (event) => {
        event.preventDefault(); // Prevent form submission
        handleEmailChange();
        handlePasswordChange();
    };

    return (
        <form className="form-inline">
            <div className="form-group mb-2">
                <label htmlFor="inputEmail" className="sr-only">Email</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="inputEmail" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                />
            </div>
            <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="inputPassword" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
            </div>
            <button type="button" className="btn btn-primary mb-2" onClick={handleClick}>
                Confirm identity
            </button>
        </form>
    );
}
