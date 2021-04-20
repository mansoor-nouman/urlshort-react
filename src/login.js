import React, { useState } from "react";
import {Link, useHistory } from "react-router-dom";
import {Postlogin} from './api'


function Login(){
let [userEmail, setuserEmail] = useState("");
let [userPassword, setuserPassword] = useState("");
 let history = useHistory();
 let userdata  = {userEmail, userPassword}
 return(
     <>
     <div class="container mt-5">
         <div class = "d-flex justify-content-center h-100">
             <div class="card1">
                 <div class="card-header">
                     <h3>Login</h3>
                 </div>
                 <div class="card-body">
                     <form onSubmit={async (e) => {
                         e.preventDefault();
                         let logdata = await Postlogin(userdata);
                         window.localStorage.setItem("app_token", logdata.data.token)
                         let token = logdata.data.token;
                         if(token){
                             history.push(`/head/${userEmail}`);
                         }
                         else{
                             history.push(`/login`);
                         }
                         setuserEmail("");
                         setuserPassword("");
                     }}>
                           <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                                    </div>
                                    <input type="email" class="form-control" placeholder="email" required value={userEmail} onChange={(e) => {
                                        setuserEmail(e.target.value);
                                    }} />
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" class="form-control" placeholder="password" required value={userPassword} onChange={(e) => {
                                        setuserPassword(e.target.value);
                                    }} />
                                </div>
                                <div class="form-group">
                                    <input type="submit" value="Login" class="btn float-right btn-warning" />
                                </div>
                     </form>
                 </div>
                 <div class="card-footer">
                            <div class="d-flex justify-content-center links">
                                Don't have an account?<Link to="/register">Register</Link>
                            </div>
                        </div>
             </div>
         </div>
     </div>
     </>
 )

}
export default Login;