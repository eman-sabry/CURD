export const fetchProuduct = async(id) =>{
    const res =await fetch(`http://localhost:3000/products/${id}`);
    return res.json();
}