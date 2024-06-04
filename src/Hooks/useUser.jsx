import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';

const useUser = () => {
    const {user} = useAuth();
    const [data, setData] = useState();

    useEffect(()=> {
        fetch(`http://localhost:5000/users/user/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
            setData(data)
        })
    }, [])

    return [data]
};

export default useUser;