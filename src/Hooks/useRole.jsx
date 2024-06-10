import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useRole = () => {
    const {user} = useAuth();

    const {data, isPending} =useQuery({
        queryKey: [user?.email],
        queryFn: async() => {
            const res = await axios.get(`https://taskorbit-website-server-side.vercel.app/users/role/${user.email}`)
           
            return res.data;
        }
    })

    return [data, isPending]
};

export default useRole;