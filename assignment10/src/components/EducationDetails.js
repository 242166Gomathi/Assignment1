import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCertification } from './actions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'; 
import Paper from '@mui/material/Paper'; 
import Typography from '@mui/material/Typography';
import '../styles/Dashboard.css';

function EducationDetails() {
  const [newCertification, setNewCertification] = useState('');
  const dispatch = useDispatch();
  const { tenth, higherSecondary, graduation, certifications } = useSelector((state) => state);

  const handleAddCertification = () => {
    if (newCertification.trim()) {
      dispatch(addCertification(newCertification)); // Dispatch the action
      setNewCertification('');
    }
  };

  return (
    <Paper elevation={3} className="education-details-container">
      <Typography variant="h5">Education Details</Typography>
      <table className="education-details-table">
        <thead>
          <tr>
            <th>Std</th>
            <th>Institute Name</th>
            <th>CGPA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10th</td>
            <td>{tenth.instituteName}</td>
            <td>{tenth.cgpa}</td>
          </tr>
          <tr>
            <td>Higher Secondary</td>
            <td>{higherSecondary.instituteName}</td>
            <td>{higherSecondary.cgpa}</td>
          </tr>
          <tr>
            <td>Graduation</td>
            <td>{graduation.instituteName}</td>
            <td>{graduation.cgpa}</td>
          </tr>
        </tbody>
      </table>
      <br></br>
      <br>
      </br>
      <Typography variant="h5">Certifications</Typography>
      <div className="certifications-container">
        {certifications.map((certification, index) => (
          <div key={index} className="certification">
            <span>{index + 1}.</span> {}
            <span>{certification}</span>
          </div>
        ))}
      </div>
      <TextField
        label="Enter new certification"
        variant="outlined"
        value={newCertification}
        onChange={(e) => setNewCertification(e.target.value)}
      />
      <br /><br />
      <Button variant="contained" onClick={handleAddCertification}>Add New</Button> {}
    </Paper>
  );
}

export default EducationDetails;
