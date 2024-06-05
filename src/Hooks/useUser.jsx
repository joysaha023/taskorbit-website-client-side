import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  const { data, isPending, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/users`);

      return res.data;
    },
  });

  return [data, isPending, refetch];
};

export default useUser;
