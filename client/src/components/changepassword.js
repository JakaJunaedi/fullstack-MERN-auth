import React, { useState } from 'react';
import axios from 'axios';

const ChangePassword = (props) => {

    const [password, setPassword] = useState('')
    const [errorPassword, setErrorPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');
    const [alert, setAlert] = useState('');

    const changePassword = (e) => {
        //console.log(e.target.value)
        const value = e.target.value
        setPassword(value)
        if (!value) {
            setErrorPassword('Password tidak boleh kosong')
        }else{
            setErrorPassword('')
        }
    }

    const changePasswordConfirm = (e) => {
        //console.log(e.target.value)
        const value = e.target.value
        setConfirmPassword(value)
        if (!value) {
            setErrorConfirmPassword('Password tidak boleh kosong')
            // jika password tidak sama
        } else if( password !== value) {
            setErrorConfirmPassword('password tidak valid')
        }
        else{
            setErrorConfirmPassword('')
        }
    }

    const simpanPassword = () => {
        const data = {
            password: password,
            token: props.match.params.token
        }
        //mengambil parameter token
        //console.log(props.match.params.token)

        axios.put(`http://localhost:8000/api/test/changepassword`, data)
        .then(res => {
            //console.log(res)
            if (res) {
                setPassword('')
                setConfirmPassword('')
                setAlert("Password Berhasil di ganti")
            }
        })
    }

    return (
        <>
        <div className="card">
            <div className="card-body">
                {
                    alert && (
                        <div className="alert alert-success">
                            {alert}
                        </div>
                    )
                }
                <div className="form-group">
                    <label>New Password</label>
                    <input type="password" className="form-control" placeholder="Masukan Password Baru"
                    value={password} onChange={changePassword}
                    />
                    {/** error kosong */}
                    {errorPassword && (
                        <p className="text-danger">{errorPassword}</p>
                    )}

                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Masukan Ulang Password Baru"
                    value={confirmPassword} onChange={changePasswordConfirm} />
                    {/** error kosong */}
                    {errorConfirmPassword && (
                        <p className="text-danger">{errorConfirmPassword}</p>
                    )}
                </div>
                <button className="btn btn-primary" onClick={simpanPassword}>Submit</button>{' '}
            </div>
        </div>
        </>
    )
}

export default ChangePassword;
