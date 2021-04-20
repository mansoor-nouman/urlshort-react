import axios from "axios";

export function Postregister(data){
    return axios.post(`http://localhost:5000/register`,data)
}

export function Postlogin(data){
    return axios.post(`http://localhost:5000/login`,data)
}

export function Postlongurl(data){
    return axios.post(`http://localhost:5000/urlshort`,data)
}

export function Getlongurl(){
    return axios.get(`http://localhost:5000/urlshort`)
}

export function GetlongurlbyEmail(email){
    return axios.get(`http://localhost:5000/userurl/${email}`)
}

export function Getlongurlbyid(id){
    return axios.get(`http://localhost:5000/${id}`)
}