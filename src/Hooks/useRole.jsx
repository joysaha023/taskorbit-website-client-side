import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useRole = () => {
    const {user} = useAuth();

    const {data:role, isPending} =useQuery({
        queryKey: [user?.email],
        queryFn: async() => {
            const res = await axios.get(`http://localhost:5000/users/role/${user.email}`)
           
            return res.data?.role;
        }
    })

    return [role, isPending]
};

export default useRole;