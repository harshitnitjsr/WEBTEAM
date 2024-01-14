

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const Dashboard = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get('/api/v1/auth/dashboard');
        setStudents(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <Layout>
      <div className="container mt-4">
        <h2 className="text-center mb-4">DASHBOARD</h2>
        <div className="table-responsive">
          <table className="table table-hover table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Registration Number</th>
                <th>Total Marks</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student._id} className="table-row">
                  <td>{student.name}</td>
                  <td>
                    <Link to={`/student/${student.registrationNumber}`} className="text-primary text-decoration-none">
                      {student.registrationNumber}
                    </Link>
                  </td>
                  <td>{student.totalMarks}</td>
                  <td>{student.percentage}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
