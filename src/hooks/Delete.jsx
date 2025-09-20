import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export default function Delete() {
      const queryClient = useQueryClient();
  return useMutation(
   {
    mutationFn:(id) => axios.delete(`http://localhost:3000/products/${id}`),
      onSuccess: () => {
      queryClient.invalidateQueries(['products']);
   }}
  )
}
