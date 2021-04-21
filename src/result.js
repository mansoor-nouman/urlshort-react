import React, { useState,useEffect } from "react";
import { Getlongurl, GetlongurlbyEmail } from './api'

function Result(p){
    let [userData, setuserData] = useState([]);
    async function getData(){
        let users = await GetlongurlbyEmail(p.match.params.id);
        setuserData(users.data)
    }
    useEffect(() => {
        getData();
    },[userData.length])
    return ( 
        <>
            <div class="table-responsive">
            <table class = "table table-bordered" id = "dataTable" width = "100%" cellspacing="0">
              <thead>
                <tr>
                  <th>Shorturl</th>
                </tr>
              </thead>
                <tbody>
                    {
                       userData.map((user, index) => {
                           return (
                           <>   
                            <tr>
                            <a href={`https://urlshortmansoor.herokuapp.com/${user.shorturl}`} target="_blank">
                            https://urlshortmansoor.herokuapp.com/${user.shorturl}
                            </a>
                            </tr>
                            <tr>
                                {user.longurl}
                            </tr> 
                           </>
                        )
                    })
                }
                </tbody>
            </table>
            </div>
     </>
    )
}
export default Result;

