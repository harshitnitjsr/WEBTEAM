import Layout from '../components/Layout/Layout';
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Result = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const getResult = async () => {
    try {
      const response = await axios.get(`/api/v1/auth/result/${registrationNumber}`);
      setResult(response.data);
      setError(null);
      toast.success('Result fetched successfully');
    } catch (error) {
      setError('Student not found');
      setResult(null);
      toast.error('Student not found');
    }
  };

 

  const calculatePercentage = () => {
    const totalSubjects = result.subjects.length;
    const totalMarks = result.subjects.reduce((acc, subject) => acc + subject.marks, 0);
    return ((totalMarks / (totalSubjects * 100)) * 100).toFixed(2);
  };

  return (
    <Layout>
      <div className="container mt-5">
        <h2 className="mb-4 text-primary">Check Your Result</h2>
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
        <button className="btn btn-primary mb-4" onClick={getResult}>
          Get Result
        </button>

        {error && <p className="text-danger">{error}</p>}

        {result && (
          <div>
            <h3 className="mb-3 text-success">Result:</h3>
            <p className="mb-2">
              <strong className="text-info">Name:</strong> {result.name}
            </p>
            <p className="mb-2">
              <strong className="text-info">Registration Number:</strong> {result.registrationNumber}
            </p>
            <p className="mb-2">
              <strong className="text-info">Total Marks:</strong> {result.totalMarks}
            </p>
            <p className="mb-2">
              <strong className="text-info">Percentage:</strong> {calculatePercentage()}%
            </p>
            <h4 className="mb-3 text-success">Subjects:</h4>
            <table className="table table-bordered table-hover table-striped">
              <thead>
                <tr className="bg-primary text-white">
                  <th>Subject Code</th>
                  <th>Subject Name</th>
                  <th>Marks</th>
                </tr>
              </thead>
              <tbody>
                {result.subjects.map((subject, index) => (
                  <tr key={index} className="text-dark" >
                    <td className="text-dark">{subject.subjectCode}</td>
                    <td className="text-dark">{subject.subjectName}</td>
                    <td>
                      <strong>{subject.marks}</strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Result;
