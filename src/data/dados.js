'use strict'
import axios from '../utils/axios';
const url = '/dados';

function getAllData() {
    return axios.callUrl(url);
}

export { getAllData }