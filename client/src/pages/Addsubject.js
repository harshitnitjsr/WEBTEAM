

import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout/Layout';
import toast from 'react-hot-toast';

const Addsubject = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [subjectCode, setSubjectCode] = useState('');
  const [subjectName, setSubjectName] = useState('');

  const handleRegistrationNumberChange = (event) => {
    setRegistrationNumber(event.target.value);
  };

  const handleSubjectCodeChange = (event) => {
    setSubjectCode(event.target.value);
  };

  const handleSubjectNameChange = (event) => {
    setSubjectName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/v1/auth/addsubjects', { subjectCode, subjectName, registrationNumber });

      if (response.status === 200) {
        toast.success("Subject added successfully");
        setSubjectCode('');
        setSubjectName('');
        setRegistrationNumber('');
      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
      console.error('Error adding subject:', error);
      toast.error(error.response.data.msg);
    }
  };

  return (
    <Layout>
    <section
        id="body"
        className="vh-100 bg-image"
        style={{
          backgroundImage: 'url("https://www.collegebatch.com/static/clg-gallery/national-institute-of-technology-jamshedpur-214725.jpg")',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat', 
        }}
      >
      <div
        id="content"
        className="mask d-flex align-items-center h-100 gradient-custom-3"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
        }}
      >
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div
                className="card"
                style={{
                  borderRadius: 15,
                  border: '2px solid #3498db',
                  boxShadow: '0 0 10px rgba(52, 152, 219, 0.5)',
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                }}
              >
                <div className="card-body p-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
                  
                  <h2 className="text-center mb-4">Add Subject</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="registrationNumber" className="form-label">Registration Number:</label>
                    <input type="text" className="form-control" id="registrationNumber" value={registrationNumber} onChange={handleRegistrationNumberChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subjectCode" className="form-label">Subject Code:</label>
                    <input type="text" className="form-control" id="subjectCode" value={subjectCode} onChange={handleSubjectCodeChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subjectName" className="form-label">Subject Name:</label>
                    <input type="text" className="form-control" id="subjectName" value={subjectName} onChange={handleSubjectNameChange} />
                  </div>
                  <button type="submit" className="btn btn-success btn-block">Add Subject</button>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
  );
};

export default Addsubject;
