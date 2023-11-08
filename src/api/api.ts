// 1. Імпортувати axios та типи AxiosConfid та AxiosRequets
// 2. Створити обє'кт з параметрами та пропмсати baseUrl
// 3. Створити екземпляр axios
// 4. Створити функцію api яка реалізує всі основні методи передачі даних

import axios, { AxiosInstance } from 'axios';

const axiosParams = {
  baseURL:
    process.env.NODE_ENV === 'development' ? 'http://localhost:5173/' : '/',
};

const axiosInstance = axios.create(axiosParams);
