import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout/Layout';
import toast from 'react-hot-toast';

const UploadAssignment = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('pdf', pdfFile);

      const res = await axios.post(`http://localhost:5000/upload-assignment/${registrationNumber}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (res.data.success) {
        alert('Assignment uploaded successfully!');
      } else {
        alert('Failed to upload assignment');
      }

      toast.success("uploaded successfully")
    } catch (error) {toast.success("uploaded successfully")
      console.error(error);
    }
    toast.success("uploaded successfully")
  };

  return (
    <Layout>
      <div className="container mt-5">
        <h2 className="mb-4 text-primary">Upload Assignment</h2>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Registration Number"
            onChange={(e) => setRegistrationNumber(e.target.value.toUpperCase())}
          />
        </div>
        <div className="mb-3">
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
          />
        </div>
        <button className="btn btn-primary mb-4" onClick={handleUpload}>
          Upload Assignment
        </button>
      </div>
    </Layout>
  );
};

export default UploadAssignment;
