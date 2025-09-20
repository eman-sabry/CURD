import {
  Button,
  Dialog,

  DialogBody,


} from "@material-tailwind/react";
 import { FaEdit   } from 'react-icons/fa';
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import Edit from "../hooks/Edit";
import Swal from 'sweetalert2';

export default function EditModel({product}) {

      const [open, setOpen] = useState(false);
 const Editp=Edit();
  const handleOpen = () => setOpen(!open);
  const initialValues = {
    id: product?.id || "",
    name: product?.name || "",
    price: product?.price || "",
    category: product?.category || "",
  };
  const handleSubmit = (values) => {
    
  Editp.mutate(values, {
    onSuccess: () => {
      Swal.fire({
        icon: 'success',
        title: 'Edited Successfully!',
        text: 'The product was updated.',
        timer: 2000,
        showConfirmButton: false,
      });
      handleOpen(); 
    },
    onError: () => {
      Swal.fire({
        icon: 'error',
        title: 'Edit Failed',
        text: 'There was a problem updating the product.',
      });
    },
  });

  console.log("Submitting with Formik:", values);
};

  return (
    <>
     
      <Button className='flex text-deep-orange-400 border-deep-orange-400' variant="outlined" onClick={handleOpen} >  <FaEdit />   Edit</Button>
      <Dialog open={open} handler={handleOpen}>
       
        <DialogBody >
         <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {() => (
             <Form className="space-y-6">
  <div className="flex flex-col">
    <label className="text-lg font-medium mb-1">Name</label>
  <Field
  type="text"
  name="name"
  className="w-full border border-gray-400 rounded-md px-4 py-2 bg-white text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

  </div>

  <div className="flex flex-col">
    <label className="text-lg font-medium mb-1">Price</label>
    <Field
      type="number"
      name="price"
       className="w-full border border-gray-400 rounded-md px-4 py-2 bg-white text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
  </div>

  <div className="flex flex-col">
    <label className="text-lg font-medium mb-1">Category</label>
    <Field
      type="text"
      name="category"
      className="w-full border border-gray-400 rounded-md px-4 py-2 bg-white text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
  </div>

  <div className="flex justify-end gap-3 pt-4">
    <Button
      variant="text"
      color="red"
      onClick={handleOpen}
      className="mr-1"
    >
      <span>Cancel</span>
    </Button>

    <Button
      type="submit"
      variant="gradient"
      color="green"
      className="px-6"
    >
      <span>Save</span>
    </Button>
  </div>
</Form>

            )}
          </Formik>   </DialogBody>
        
      </Dialog>
    </>
  )
}
