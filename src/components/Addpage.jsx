
import { Formik, Form, Field } from "formik";
import { Button } from "@material-tailwind/react";
import Add from '../hooks/Add';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
export default function Addpage() {
    const initialValues={
    name:"",
    price:"",
    category:""
}
const nav=useNavigate();
const Addp=Add()
const handelSubmit=(values)=>{
    Addp.mutate(values,{
        onSuccess: () => {
          Swal.fire({
            icon: 'success',
            title: 'product added Successfully!',
            timer: 2000,
            showConfirmButton: false,
          });
          nav("/")
        },
        onError: () => {
          Swal.fire({
            icon: 'error',
            title: 'add Failed',
            text: 'There was a problem add the product.',
          });
        },
      });
    console.log(values)


}

  return (
    <div className=" flex flex-col p-10 justify-center px-40">
        <h1 className="text-2xl text-center font-bold">
            Add Prouduct page
        </h1>
      <Formik initialValues={initialValues} onSubmit={handelSubmit}  >
{
    ()=>(
         <Form className="space-y-6">
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-1">Name</label>
          <Field
          type="text"
          name="name"
            required
          className="w-full border border-gray-400 rounded-md px-4 py-2 bg-white text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          
        />
        
          </div>
        
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-1">Price</label>
            <Field
              type="number"
              name="price"
                required
               className="w-full border border-gray-400 rounded-md px-4 py-2 bg-white text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
          </div>
        
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-1">Category</label>
            <Field
              type="text"
              name="category"
                required
              className="w-full border border-gray-400 rounded-md px-4 py-2 bg-white text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
          </div>
        
          <div className="flex justify-center gap-3 pt-4">
          
            <Button
              type="submit"
              variant="gradient"
              color="green"
              className="px-6"
            >
              <span>add</span>
            </Button>
          </div>
        </Form>
    )
}
      </Formik>
    </div>
  )
}
