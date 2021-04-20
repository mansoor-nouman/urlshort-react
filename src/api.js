import axios from "axios";

export function Postregister(data){
    return axios.post(`https://urlshortmansoor.herokuapp.com/register`,data)
}

export function Postlogin(data){
    return axios.post(`https://urlshortmansoor.herokuapp.com/login`,data)
}

export function Postlongurl(data){
    return axios.post(`https://urlshortmansoor.herokuapp.com/urlshort`,data)
}

export function Getlongurl(){
    return axios.get(`https://urlshortmansoor.herokuapp.com/urlshort`)
}

export function GetlongurlbyEmail(email){
    return axios.get(`https://urlshortmansoor.herokuapp.com/userurl/${email}`)
}

export function Getlongurlbyid(id){
    return axios.get(`https://urlshortmansoor.herokuapp.com/${id}`)
}