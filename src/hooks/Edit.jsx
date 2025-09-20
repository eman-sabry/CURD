import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export default function Edit() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, ...product }) =>
      axios.put(`http://localhost:3000/products/${id}`, product),
    onSuccess: () => {
      queryClient.invalidateQueries(['products']);

    },
  });
}
