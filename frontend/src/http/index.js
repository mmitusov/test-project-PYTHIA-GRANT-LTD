import axios from "axios";
 
const $host = axios.create({
    baseURL: 'http://localhost:3005/'
})

export {
    $host
};