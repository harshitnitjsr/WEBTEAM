

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const StudentSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/v1/auth/search-students?query=${searchQuery}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
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
                  
                    <h2 className="text-center mb-4">Student Search</h2>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter registration number or name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>

        {searchResults.length > 0 && (
          <div>
            <h3 className="mb-3">Search Results:</h3>
            <ul className="list-group">
              {searchResults.map((student) => (
                <li key={student.registrationNumber} className="list-group-item">
                  <Link to={`/student/${student.registrationNumber}`} className="text-decoration-none">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <strong>{student.name}</strong> ({student.registrationNumber})
                      </div>
                      <div>
                        <span className="badge bg-secondary">{student.batch}</span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
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

export default StudentSearch;
