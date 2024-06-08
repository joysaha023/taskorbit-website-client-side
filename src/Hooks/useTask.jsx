import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useTask = () => {

    const { data: task = [], refetch } = useQuery({
        queryKey: ["task"],
        queryFn: async () => {
          const res = await axios.get("http://localhost:5000/task");
          return res.data;
        },
      });


    return [task, refetch] 
};

export default useTask;