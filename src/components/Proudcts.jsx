import {fetchProuducts} from '../hooks/Prouducts'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

import { useQuery } from "@tanstack/react-query";
import { Button, Spinner } from "@material-tailwind/react";
 import { Card, Typography } from "@material-tailwind/react";
 import { FaEdit ,FaTrash,FaEye   } from 'react-icons/fa';
 import EditModel from './EditModel';
 import Delete from '../hooks/Delete';
 import { useNavigate } from 'react-router-dom';
export default function Proudcts() {
  const nav=useNavigate()
  const TABLE_HEAD = ["Name", "Price", "category", "","",""];
 const Deletep=Delete();
  const { data:proudcts, isLoading, isError, error } = useQuery({
      queryKey: ["products"],
      queryFn: fetchProuducts,
    });
 if (isLoading) return (
<div className='flex justify-center items-center'>
    <Spinner />
  </div>
);
  if (isError) return <p>Error: {error.message}</p>;
  
    const handleDelete = (id) => {
      
 Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to undo this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#d33',
  cancelButtonColor: '#3085d6',
  confirmButtonText: 'Yes, delete it!',
  cancelButtonText: 'Cancel',
}).then((result)  => {
    if (result.isConfirmed) {
      Deletep.mutate(id);
      Swal.fire({
        title: 'Deleted!',
        text: 'Product has been deleted.',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
      });
    }
  });
};

  return (
      <Card className=" h-full w-full overflow-scroll">
        
        <h1 className='text-center text-5xl m-10'>
          CURD page
        </h1>
    
 <div className="flex justify-start mb-6 ml-6">
  <Button
    color="green"
    size="lg"
    className="px-6 py-3 font-semibold text-white shadow-md hover:shadow-lg transition duration-300 ease-in-out w-auto"
  >
    <Link to="/Addpage" className="w-full h-full inline-block">
      + Add Product
    </Link>
  </Button>
</div>

     
      

      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head,index) => (
              <th key={index} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {proudcts.map((proudct, index) => (
            <tr key={index} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {proudct.name}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {proudct.price}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {proudct.category}
                </Typography>
              </td>
              <td className="p-4">
            <EditModel product={proudct}/>
                 
              </td>
              <td className="p-4">
                <Button onClick={()=>handleDelete(proudct.id)} className='flex  text-deep-orange-700 border-deep-orange-700' variant="outlined">  <FaTrash />   Delete</Button>
              </td>
              <td className="p-4">
                 <Button onClick={()=> nav(`/Proudcts/${proudct.id}`)} className='flex text-cyan-500 border-cyan-500' variant="outlined">  <FaEye />   Viwe</Button>
              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}
