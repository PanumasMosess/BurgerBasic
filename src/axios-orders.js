import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-a2ce1.firebaseio.com/'
});



export default instance;