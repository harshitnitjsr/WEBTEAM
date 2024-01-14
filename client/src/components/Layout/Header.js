import React from 'react'
import { NavLink } from 'react-router-dom'
import "./App.css"



const Header = () => {

  return (
    <div>
  &lt;&gt;
  <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div className="container">
      
    <NavLink className="navbar-brand" to="/dashboard">
  <img
    src="https://media.licdn.com/dms/image/C510BAQEaiswddRNVCA/company-logo_200_200/0/1631360427321?e=2147483647&v=beta&t=31oklMdqR8d2fvCvuv5eExeB9b8UEXcNKnIfY7glbfo"
    className="img-fluid"
    alt="Logo"
    style={{ width: '60px', height: '60px' }}
  />
</NavLink> <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ms-auto">
        <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard"> Dashboard</NavLink>
          </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/register">REGISTER STUDENT</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/addsubject">ADD SUBJECTS</NavLink>
          </li>
         
         
          <li className="nav-item">
            <NavLink className="nav-link" to="/addmarks">Add Marks</NavLink>
          </li>
        
            <li className="nav-item">
            <NavLink className="nav-link" to="/result">RESULT</NavLink>
          </li>
         
          <li className="nav-item">
            <NavLink className="nav-link" to="/studentsearch">Search</NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink className="nav-link" to="/upload">Assignment</NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink className="nav-link" to="/updatestudent">Update Student</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <header>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" style={{backgroundImage: 'url("https://i.ytimg.com/vi/o5HmrEC2WhQ/maxresdefault.jpg")'}}>
         
        </div>
        {/* <div className="carousel-item" style={{backgroundImage: 'url(https://nitjsr.ac.in/backend/uploads/banner/add/d5dc67bc-12b6-4b43-9b7e-a2b1559bdfbb-IMG-20231021-WA0005.jpg")'}}>
         
        </div> */}
        <div className="carousel-item" style={{backgroundImage: 'url("https://i.ytimg.com/vi/tw2qNMPwFYg/maxresdefault.jpg")'}}>
          
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </header>


</div>

  )
}

export default Header
