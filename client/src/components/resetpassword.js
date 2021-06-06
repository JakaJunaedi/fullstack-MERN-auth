import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword = () => {

    const[email, setEmail] = useState('');
    const[error, setError] = useState('');
    const[alert, setAlert] = useState('');

    const changeEmail = (e) => {
        //console.log(e.target.value)
        setEmail(e.target.value)
        setError('')
    }

    // button send
    const send = () => {
        //console.log('d tekan')
        if (!email) {
            setError('email harus diisi');
        }else{
            axios.put(`http://localhost:8000/api/test/resetpassword`, {email: email})
            .then(res => {
                //console.log(res)
                setEmail('')
                setAlert("Silakan Cek Email")
                setTimeout(() => {
                    setAlert('')
                }, 3000)
            })
        }
    }

    return (
        <>
            <div className="card">
                <div className="card">
                    {/** Alert Sukses */}
                    {alert && (
                        <div className="alert alert-success"><p>{alert}</p></div>
                    )}

                    {/** Alert Error */}
                    {error && (
                        <div className="alert alert-danger"><p>{error}</p></div>
                    )}
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Masukan Email" className="form-control"
                        value={email} onChange={changeEmail}
                        />
                    </div>
                    <button className="btn btn-primary" onClick={send}>Send</button>
                </div>
            </div>
        </>
    )
}

export default ResetPassword;
