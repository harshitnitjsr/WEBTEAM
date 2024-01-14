import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Layout from '../components/Layout/Layout';

const UpdateStudent = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [batch, setBatch] = useState('');
  const [semester, setSemester] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(`/api/v1/auth/update/${registrationNumber}`, {
        name,
        batch,
        semester,
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

  const getUser = async () => {
    try {
      const response = await axios.put(`/api/v1/auth/update/${registrationNumber}`);
      setResult(response.data.user); 
      setError(null);
      toast.success('User fetched successfully');
    } catch (error) {
      setError('Student not found');
      setResult(null);
      toast.error('Student not found');
    }
  };

  return (
    <Layout>
      <div className="container mt-5">
        <h2 className="mb-4 text-primary">Update Student</h2>
        <div className="mb-3">
          <label className="form-label text-info">
            Registration Number:
            <input
              type="text"
              className="form-control"
              value={registrationNumber}
              onChange={(e) => setRegistrationNumber(e.target.value)}
            />
          </label>
        </div>
        <button className="btn btn-primary mb-4" onClick={getUser}>
          Get User
        </button>

        {error && <p className="text-danger">{error}</p>}

        {result && (
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="name"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="semester"
                  placeholder="Semester"
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="batch"
                  placeholder="Batch"
                  value={batch}
                  onChange={(e) => setBatch(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
                Update
              </button>
            </form>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default UpdateStudent;
