import axios from 'axios';

const axInstance = axios.create({
    baseURL: 'https://react-my-burger-9947f.firebaseio.com/'
});

export default axInstance;