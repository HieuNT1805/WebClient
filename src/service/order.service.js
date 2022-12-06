import axios from 'axios'
import authHeader from '../service/auth_header';

const url = 'https://jewelstore.onrender.com/' //api product

//function get product from api, return nhieu function
const getOders = () => {return axios.get(url + 'api/orders',{headers:authHeader()})}


export default getOders