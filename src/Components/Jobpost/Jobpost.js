import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import './Jobpost.css'

function Jobpost() {
    const [formState, setFormState] = useState({
        jobTitle: '',
        jobDescription: '',
        jobCategory: '',
        jobType: '',
        jobLevel: '',
        experience: '',
        qualification: '',
        gender: '',
        minSalary: '',
        maxSalary: '',
        jobExpiredDate: '',
        jobFeeType: '',
        skills: '',
        permanentAddress: '',
        temporaryAddress: '',
        country: '',
        stateCity: '',
        zipCode: '',
        videoURL: '',
        latitude: '',
        longitude: '',
    });

    const handleChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
        // Here you can handle the form submission, e.g., send the data to a server
    };

    return (
        
        <Box component="form" onSubmit={handleSubmit} Validate autoComplete="off">
            <h1>Post Job</h1>
            <div className="row-container">
                <TextField
                    name="jobTitle"
                    label="Job Title"
                    variant="outlined"
                    fullWidth
                    value={formState.jobTitle}
                    onChange={handleChange}
                    margin="normal"
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel id="jobCategory-label">Job Category</InputLabel>
                    <Select
                        labelId="jobCategory-label"
                        label="Job category"
                        name="jobCategory"
                        value={formState.jobCategory}
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="category1">Category 1</MenuItem>
                        <MenuItem value="category2">Category 2</MenuItem>
                        {/* Add more categories as needed */}
                    </Select>
                </FormControl>
            </div>
            <TextField
                name="jobDescription"
                label="Job Description"
                variant="outlined"
                fullWidth
                value={formState.jobDescription}
                onChange={handleChange}
                margin="normal"
                multiline
                rows={6}
            />
            <div className="row-container">
                <FormControl fullWidth margin="normal">
                    <InputLabel id="jobType-label">Job Type</InputLabel>
                    <Select
                        labelId="jobType-label"
                        name="jobType"
                        label="Jobtype"
                        value={formState.jobType}
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="fullTime">Full Time</MenuItem>
                        <MenuItem value="partTime">Part Time</MenuItem>
                        {/* Add more job types as needed */}
                    </Select>
                </FormControl>
                <FormControl fullWidth margin="normal">
                    <InputLabel id="jobLevel-label">Job Level</InputLabel>
                    <Select
                        labelId="jobLevel-label"
                        name="jobLevel"
                        label="joblevel"
                        value={formState.jobLevel}
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="entryLevel">Entry Level</MenuItem>
                        <MenuItem value="midLevel">Mid Level</MenuItem>
                        <MenuItem value="seniorLevel">Senior Level</MenuItem>
                        {/* Add more job levels as needed */}
                    </Select>
                </FormControl>
            </div>

            <div className="row-container">
                <FormControl fullWidth margin="normal">
                    <InputLabel id="experience-label">Experience</InputLabel>
                    <Select
                        labelId="experience-label"
                        name="experience"
                        label="experience"
                        value={formState.experience}
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="1">1 Year</MenuItem>
                        <MenuItem value="2">2 Years</MenuItem>
                        {/* Add more experience levels as needed */}
                    </Select>
                </FormControl>
                <FormControl fullWidth margin="normal">
                    <InputLabel id="qualification-label">Qualification</InputLabel>
                    <Select
                        labelId="qualification-label"
                        name="qualification"
                        label="qualification"
                        value={formState.qualification}
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="bachelors">Bachelor's</MenuItem>
                        <MenuItem value="masters">Master's</MenuItem>
                        {/* Add more qualifications as needed */}
                    </Select>
                </FormControl>
            </div>

            <div className="row-container">
                <FormControl fullWidth margin="normal">
                    <InputLabel id="gender-label">Gender</InputLabel>
                    <Select
                        labelId="gender-label"
                        name="gender"
                        label="gender"
                        value={formState.gender}
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth margin="normal">
                    <InputLabel id="country-label">Country</InputLabel>
                    <Select
                        labelId="country-label"
                        name="country"
                        label="country"
                        value={formState.country}
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="usa">USA</MenuItem>
                        <MenuItem value="canada">Canada</MenuItem>
                        {/* Add more countries as needed */}
                    </Select>
                </FormControl>
            </div>
            <div className="row-container">
                <FormControl fullWidth margin="normal">
                    <InputLabel id="stateCity-label">State/City</InputLabel>
                    <Select
                        labelId="stateCity-label"
                        name="stateCity"
                        label="Statecity"
                        value={formState.stateCity}
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="newYork">New York</MenuItem>
                        <MenuItem value="losAngeles">Los Angeles</MenuItem>
                        {/* Add more states/cities as needed */}
                    </Select>
                </FormControl>
                <TextField
                    name="skills"
                    label="Skills (Use Commas to Separate)"
                    variant="outlined"
                    fullWidth
                    value={formState.skills}
                    onChange={handleChange}
                    margin="normal"
                />
            </div>
            <div className="row-container">
                <TextField
                    name="minSalary"
                    label="Min. Salary"
                    variant="outlined"
                    fullWidth
                    value={formState.minSalary}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    name="maxSalary"
                    label="Max. Salary"
                    variant="outlined"
                    fullWidth
                    value={formState.maxSalary}
                    onChange={handleChange}
                    margin="normal"
                />
            </div>
            <div className="row-container">
                <TextField
                    name="permanentAddress"
                    label="Permanent Address"
                    variant="outlined"
                    fullWidth
                    value={formState.permanentAddress}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    name="temporaryAddress"
                    label="Temporary Address"
                    variant="outlined"
                    fullWidth
                    value={formState.temporaryAddress}
                    onChange={handleChange}
                    margin="normal"
                />
            </div>
            <div className="row-container">
                <TextField
                    name="jobExpiredDate"
                    label="Job Expired Date"
                    type="date"
                    variant="outlined"
                    fullWidth
                    value={formState.jobExpiredDate}
                    onChange={handleChange}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    name="zipCode"
                    label="Zip Code"
                    variant="outlined"
                    fullWidth
                    value={formState.zipCode}
                    onChange={handleChange}
                    margin="normal"
                />
            </div>
            <Button type="submit" variant="contained" color="primary">
                Post Job
            </Button>
        </Box>
    );
}

export default Jobpost;
