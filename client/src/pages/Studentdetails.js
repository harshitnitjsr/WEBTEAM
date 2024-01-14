

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../components/Layout/Layout';
import { useParams } from 'react-router-dom';

const StudentDetails = () => {
  const { registrationNumber } = useParams();
  const [studentDetails, setStudentDetails] = useState(null);

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const response = await axios.get(`/api/v1/auth/student-details/${registrationNumber}`);
        setStudentDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudentDetails();
  }, [registrationNumber]);

  return (
    <Layout>
      <div className="container mt-4">
        <h2 className="text-center mb-4">Student Details</h2>
        {studentDetails ? (
          <div>
            <div className="mb-3 text-center">
              <p className="text-dark"><strong>Name:</strong> {studentDetails.name}</p>
              <p className="text-dark"><strong>Registration Number:</strong> {studentDetails.registrationNumber}</p>
              <p className="text-dark"><strong>Batch:</strong> {studentDetails.batch}</p>
              <p className="text-dark"><strong>Semester:</strong> {studentDetails.semester}</p>
            </div>

            <div>
              
              <table className="table table-hover table-bordered table-striped">
                <thead className="table-dark">
                  <tr>
                    <th className="text-center">Subject Code</th>
                    <th className="text-center">Subject Name</th>
                    <th className="text-center">Marks</th>
                  </tr>
                </thead>
                <tbody>
                  {studentDetails.subjects.map((subject, index) => (
                    <tr key={index} className="text-center">
                      <td>{subject.subjectCode}</td>
                      <td>{subject.subjectName}</td>
                      <td>{subject.marks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Layout>
  );
};

export default StudentDetails;
