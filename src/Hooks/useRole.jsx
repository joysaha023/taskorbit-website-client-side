import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useRole = () => {
    const {user} = useAuth();

    const {data, isPending} =useQuery({
        queryKey: [user?.email],
        queryFn: async() => {
            const res = await axios.get(`http://localhost:5000/users/role/${user.email}`)
            console.log(res.data)
            return res.data;
        }
    })

    return [data, isPending]
};

export default useRole;