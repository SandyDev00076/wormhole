import axios from 'axios';

const headers = { 'Content-Type': 'application/json' };

export function getData(url) {
    return axios.get(url, { headers });
}

export function postData(url, data) {
    return axios.post(url, data, { headers });
}