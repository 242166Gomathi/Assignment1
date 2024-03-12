import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCertification } from './action';
import './Style.css'; 

const EducationDetails = () => {
  const user = useSelector(state => state.user);
  const [newCertification, setNewCertification] = useState('');
  const dispatch = useDispatch();

  const handleAddCertification = () => {
    if (newCertification.trim() !== '') {
      dispatch(addCertification(newCertification));
      setNewCertification('');
    }
  };

  return (
    <div className="container">
      <h2>Education Details</h2>
      <div>
        <h3>10th</h3>
        <div>Institute Name: {user.education.tenth.instituteName}</div>
        <div>CGPA: {user.education.tenth.cgpa}</div>
      </div>
      <div>
        <h3>Higher Secondary</h3>
        <div>Institute Name: {user.education.higherSecondary.instituteName}</div>
        <div>CGPA: {user.education.higherSecondary.cgpa}</div>
      </div>
      <div>
        <h3>Graduation</h3>
        <div>Institute Name: {user.education.graduation.instituteName}</div>
        <div>CGPA: {user.education.graduation.cgpa}</div>
      </div>
      <h2>Certification Details</h2>
      <ul>
        {user.certifications.map((certification, index) => (
          <li key={index}>{certification}</li>
        ))}
      </ul>
      {}
      <input
        type="text"
        value={newCertification}
        onChange={(e) => setNewCertification(e.target.value)}
      />
      <button onClick={handleAddCertification}>Add new</button>
    </div>
  );
};

export default EducationDetails;
