import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export default function Add() {
      const queryClient = useQueryClient();
  return useMutation (
   {
    mutationFn:(p) => axios.post('http://localhost:3000/products',p),
    onSuccess: () => {
      queryClient.invalidateQueries(['products']);
    },
   }
  )
}
