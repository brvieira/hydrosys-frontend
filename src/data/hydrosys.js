'use strict'
import axios from '../utils/axios';

function getAllData() {
    return axios.callUrl('/dados');
}

export { getAllData }