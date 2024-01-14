
import {Route,Routes} from "react-router-dom"


import Policy from "./pages/Result";

import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Register";


import 'react-toastify/dist/ReactToastify.css';
import AddMarksForm from "./pages/AddMarksForm";
import Result from "./pages/Result";
import Addsubject from "./pages/Addsubject";
import Dashboard from "./pages/Dashboard";
import StudentDetails from "./pages/Studentdetails";
import StudentSearch from "./pages/StudentSearch";

import UpdateStudent from "./pages/Updatestudent";
import UploadAssignment from "./pages/UploadAssignment";


function App() {
  return (
    
    <>
     <Routes>
     <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/addsubject" element={<Addsubject/>}/>
     
      <Route path="/*" element={<Policy />}/>
      
      <Route path="/pagenotfound" element={<Pagenotfound />}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/addmarks" element={<AddMarksForm/>}/>
      <Route path="/result" element={<Result/>}/>
      <Route path="/student/:registrationNumber" element={<StudentDetails/>} /> 
      <Route path="/studentsearch" element={<StudentSearch/>}/>
      <Route path="/upload" element={<UploadAssignment/>}/>
      <Route path="/updatestudent" element={<UpdateStudent/>}/>
     </Routes>
     
    
   
    </>
  );
}

export default App;
