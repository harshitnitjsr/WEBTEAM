import React from 'react';
import Layout from '../components/Layout/Layout';
import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [batch, setBatch] = useState('');
  const [semester, setSemester] = useState('');
  const [subjects, setSubjects] = useState([]);

  const handleSubjectChange = (index, key, value) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index][key] = value;
    setSubjects(updatedSubjects);
  };

  const handleAddSubject = () => {
    setSubjects([...subjects, { subjectCode: '', subjectName: '' }]);
  };

  const handleRemoveSubject = (index) => {
    const updatedSubjects = [...subjects];
    updatedSubjects.splice(index, 1);
    setSubjects(updatedSubjects);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`/api/v1/auth/registerstudent`, {
        name,
        registrationNumber,
        batch,
        semester,
        subjects,
      });

      if (res && res.data.success) {
        toast.success(res.data.msg);
      } else {
        toast.error(res.data.msg);
      }
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  return (
    <Layout>
      <section
        id="body"
        className="vh-100 bg-image"
        style={{
          backgroundImage: 'url("https://img.collegepravesh.com/2016/10/NIT-Jamshedpur.jpg")',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
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
                    <h2 className="text-uppercase text-center mb-5">REGISTER STUDENT</h2>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <input type="text" className="form-control form-control-lg" name="name" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                      </div>
                      <div className="mb-4">
                        <input type="text" className="form-control form-control-lg" name="registrationNumber" placeholder="Registration Number" value={registrationNumber} onChange={(e) => setRegistrationNumber(e.target.value)} />
                      </div>
                      <div className="mb-4">
                        <input type="text" className="form-control form-control-lg" name="semester" placeholder="Semester" value={semester} onChange={(e) => setSemester(e.target.value)} />
                      </div>
                      <div className="mb-4">
                        <input type="text" className="form-control form-control-lg" name="batch" placeholder="Batch" value={batch} onChange={(e) => setBatch(e.target.value)} />
                      </div>
                      <div className="mb-4">
                        <h5 className="text-uppercase">Subjects</h5>
                        {subjects.map((subject, index) => (
                          <div key={index} className="mb-3">
                            <input
                              type="text"
                              placeholder="Subject Code"
                              className="form-control"
                              value={subject.subjectCode.toUpperCase()}
                              onChange={(e) => handleSubjectChange(index, 'subjectCode', e.target.value)}
                            />
                            <input
                              type="text"
                              placeholder="Subject Name"
                              className="form-control"
                              value={subject.subjectName}
                              onChange={(e) => handleSubjectChange(index, 'subjectName', e.target.value)}
                            />
                            <button type="button" className="btn btn-danger" onClick={() => handleRemoveSubject(index)}>
                              Remove
                            </button>
                          </div>
                        ))}
                        <button type="button" className="btn btn-success" onClick={handleAddSubject}>
                          Add Subject
                        </button>
                      </div>
                      <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
                        Register
                      </button>
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

export default Register;
