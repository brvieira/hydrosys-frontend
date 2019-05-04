'use strict'
import axios from '../utils/axios';
const url = '/usuarios';

function newUser(user) {
    return axios.postUrl(url + '/newUser', user);
}

function login(user) {
    return axios.postUrl(url + '/login', user);
}

function editUser(user) {
    return axios.postUrl(url + '/editUser', user);
}

function addNode(user) {
    return axios.postUrl(url + '/addnode', user);
}

export { newUser, login, editUser, addNode }