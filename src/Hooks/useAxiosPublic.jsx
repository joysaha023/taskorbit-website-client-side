import axios from 'axios';
import React from 'react';

const axiosPublic = axios.create({
    baseURL: 'https://taskorbit-website-server-side.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;