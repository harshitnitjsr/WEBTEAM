import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../components/Layout/Layout';
import toast from 'react-hot-toast';

const AddMarksForm = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [subjectList, setSubjectList] = useState([]);
  const [marksData, setMarksData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    setMarksData(subjectList.map((subject) => ({ subjectCode: subject.subjectCode, marks: '' })));
  }, [subjectList]);

  const showSubject = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`/api/v1/auth/student-subjects/${registrationNumber}`);
      setSubjectList(response.data.subjects);
      setErrorMessage('');
    } catch (error) {
      console.error('Error fetching student subjects:', error);
      toast.error(error.response.data.msg)
      setErrorMessage('Internal server error');
    }
  };

  const handleRegistrationNumberChange = (event) => {
    setRegistrationNumber(event.target.value);
  };

  const handleMarksChange = (subjectCode, event) => {
    const updatedMarksData = marksData.map((item) =>
      item.subjectCode === subjectCode ? { ...item, marks: event.target.value } : item
    );
    setMarksData(updatedMarksData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/v1/auth/addmarks', {
        marksData,
        registrationNumber,
      });

      if (response.status === 200) {
        setSuccessMessage('Marks added successfully');
        toast.success('Marks added successfully');
        setErrorMessage('');
      } else {
        setErrorMessage(response.data.msg);
        setSuccessMessage('');
        toast.error(response.data.msg);
      }
    } catch (error) {
      console.error('Error adding marks:', error);
      setErrorMessage('Internal server error');
      setSuccessMessage('');
      toast.error(error.response.data.msg);
    }
  };

  return (
    <Layout>
      <section
        id="body"
        className="vh-100 bg-image"
        style={{
          backgroundImage: 'url("https://images.shiksha.com/mediadata/images/1607068412phpatwguj.png")',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          backgroundSize: 'cover', // Use 'cover' to ensure the image covers the entire container
          backgroundRepeat: 'no-repeat', // Add this line to prevent image repeating
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
                  <h2 className="text-center mb-4">Add Marks</h2>

<form onSubmit={showSubject}>
  <div className="mb-3">
    <label htmlFor="registrationNumber" className="form-label">
      Registration Number:
    </label>
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        id="registrationNumber"
        value={registrationNumber}
        onChange={handleRegistrationNumberChange}
      />
      <button type="submit" className="btn btn-success">
        Search
      </button>
    </div>
  </div>
</form>

{subjectList.length > 0 && (
  <form onSubmit={handleSubmit}>
    <>
      <h4 className="mt-3">Subject List:</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Subject Code</th>
            <th>Subject Name</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {subjectList.map((subject) => (
            <tr key={subject.subjectCode}>
              <td className="text-dark">{subject.subjectCode}</td>
              <td className="text-dark">{subject.subjectName}</td>

              <td>
                <input
                  type="text"
                  className="form-control"
                  value={marksData.find((item) => item.subjectCode === subject.subjectCode)?.marks || ''}
                  onChange={(e) => handleMarksChange(subject.subjectCode, e)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="submit" className="btn btn-success">
        Add Marks
      </button>
    </>
  </form>
)} </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </Layout>
  );
};

export default AddMarksForm;
