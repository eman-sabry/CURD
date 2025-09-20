 export const fetchProuducts =async () =>{
    const res= await fetch("http://localhost:3000/products")
    return res.json()
}