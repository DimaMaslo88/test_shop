import axios from "axios";
import {generateXAuth} from "dal/api/util/generateXAuth";

const password = "Valantis";
const xAuthValue = generateXAuth(password);


export const instance = axios.create({
baseURL:'http://api.valantis.store:40000/',
   
    headers: {
        'Content-Type': 'application/json',
        'X-Auth': xAuthValue
    }
})
