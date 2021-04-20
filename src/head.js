import React, {useState} from "react";
import { Postlongurl } from "./api";
import {useHistory} from "react-router-dom"


function Head(p){
    let [longurl, setLongurl] = useState("");
    let userData = {longurl, userEmail: p.match.params.id}
    let history= useHistory();
    function handleClick(){
        history.push(`/result/${p.match.params.id}`);
    }
    return(
        <>
        <div className="col-lg-12 text-center text-secondary mt-5">
        <h2>URL SHORTENER</h2>
        </div>
        <form onSubmit = {async (e) => {
            e.preventDefault();
            handleClick();
            console.log(userData);
            await Postlongurl(userData);
            setLongurl("");
        }}>
            <div className = "row mt-5">
                <div class="col-lg-10">
<input type="text" name="longurl" class="form-control" placeholder="Paste your long URL" value={longurl} onChange = { (e) => {
    setLongurl(e.target.value);
}}/>
                </div>
        <div className = "col-lg-2">
            <input type="submit" className="btn btn-outline-secondary" value="Submit" />
        </div>
            </div>
        </form>
        </>
    )
}
export default Head;