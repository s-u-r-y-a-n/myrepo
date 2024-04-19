import React from 'react';

function LoginPage() {
    return (
        <div className="background">
            <div className="container">
                <h2>SAKTHI CABLE NETWORK</h2>
                <h2>Login Page</h2>
                <form className="input-box">
                    <div className="input-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" placeholder="Enter your username" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" placeholder="Enter your password" />
                    </div>
                    <button type="submit" className="my-submit">LOGIN</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
