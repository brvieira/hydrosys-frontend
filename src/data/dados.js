'use strict'
import axios from '../utils/axios';
const url = '/dados';

function getAllData() {
    return axios.callUrl(url);
}

function getDataByToken(token) {
    return axios.callUrl(url+'/getData/'+token);
}

export { getAllData, getDataByToken }