import axios from 'axios';

// bc8774b1b4d020c62bb62615cad7746c
const instance = axios.create({
    baseURL: 'http://api.themoviedb.org/3'
});

export default instance;
