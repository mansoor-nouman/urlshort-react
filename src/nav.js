import React from "react"
import {Link, useHistory} from "react-router-dom"


function Navigate()
{
    let history = useHistory();
    return(
        <>
        <nav class="navabr navbar-expand-lg navbar-light bg-secondary">
            <a class="navbar-brand text-light">URL Shortener</a>
            <button class="navbar-toggler" type= "button" data-toggle="collapse"
            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navabr-nav">
                <Link class="nav-item nav-link active text-light" to="/">Home</Link>
                <Link class="nav-item nav-link text-light" to="/register">Register</Link>
                <Link class="nav-item nav-link text-light"  to="/login">Login</Link>
                <Link class="nav-item nav-link text-light" to="/login" onClick={()=>{
                    window.localStorage.removeItem("app_token");
                    history.push(`/adminlogin`);
                }}>Logout</Link>
                </div>
            </div>
        </nav>
        </>
    )
}
export default Navigate;