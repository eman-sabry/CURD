 import { Button } from "@material-tailwind/react";
  import { Routes, Route, Link } from "react-router-dom";
  import Proudcts from "./components/Proudcts";
  import ViwePage from "./components/ViwePage";
  import Addpage from "./components/Addpage";
function App() {
return (
    <div className="p-10">
   
     <Routes>
      <Route path="/" element={<Proudcts/>}/>
      <Route path="/Addpage" element={<Addpage/>}/>
      <Route path="/Proudcts" element={<Proudcts/>}/>
      <Route path="/Proudcts/:id" element={<ViwePage />} />

     </Routes>
     
    </div>
  )
}

export default App
