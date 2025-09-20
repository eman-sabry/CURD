import React from 'react'
import {fetchProuduct} from "../hooks/Viwe"
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Spinner } from "@material-tailwind/react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
 
export default function ViwePage() {
    const {id}=useParams()
   const { data:proudct, isLoading, isError, error } = useQuery({
      queryKey: ["products",id],
      queryFn:()=> fetchProuduct(id),
    });
     if (isLoading) return (
   <div className='flex justify-center items-center'>
    <Spinner />
  </div>
    );
      if (isError) return <p>Error: {error.message}</p>;
      
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-96">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {proudct.name}
          </Typography>
          <Typography className="mb-2 text-gray-700">
            Price: ${proudct.price}
          </Typography>
          <Typography className="text-gray-700">
            Category: {proudct.category}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button >
            <Link to="/">Back</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
