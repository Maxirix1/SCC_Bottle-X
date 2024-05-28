import React from 'react'
import '../style/login.css'

function Login () {
  return (
    <div>
        <div className="container">
            <div className="circle"></div>
            <div className="content-login">
                <h2>LOGIN</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-box">
                        <input 
                            type="number" 
                            placeholder="Student ID" 
                            value={studentId}
                            onChange={handleStudentIdChange}
                            required 
                        />
                        {/* <i className='bx bxs-user'></i> */}
                    </div>
                    <div className="input-box">
                        <input 
                            type="password" 
                            placeholder="Password (6 Digits)" 
                            maxLength="6" 
                            value={password}
                            onChange={handlePasswordChange}
                            required 
                        />
                        {/* <i className='bx bxs-lock-alt'></i> */}
                    </div>
                    <button className="button-23" role="button" type="submit">LOGIN</button>
                    <div className="register-link">
                        <p>ยังไม่มีบัญชีใช่ไหม?<a href="register.html"> สมัครสมาชิก</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
