import React from "react";
import "./vendor.css";
import { FormControl, Grid, MenuItem, Select, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import TextField from "@mui/material/TextField";

const VendorRegister = () => {
  const [year, setYear] = useState("");

  const handleChange = (event) => {
    setYear(event.target.value);
  };
  return (
    <main id='main' className='main'>
      <div
        className="text"
        style={{
          border: "4px solid black",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "5px 3px",
          marginTop: "40px",
          marginBottom: "20px",
          marginRight: "100px",
        }}
      >
        <h4
          style={{
            textAlign: "center",
            fontWeight: "650",
            border: "2px solid black",
            padding: "5px",
          }}
        >
          Company Contact Information
        </h4>

        <Grid container spacing={2.5} style={{ marginTop: "2px" }}>
          <div
            style={{
              display: "flex",
              width: "100%",
              marginLeft: "20px",
              gap: "50px",
            }}
          >
            <Grid item xs={12}>
              <Stack spacing={1}>
                {/* <InputLabel>Year</InputLabel> */}
                <TextField
                  id="name"
                  label="Organization / Business Name"
                  type="text"
                  variant="outlined"
                  style={{ marginTop: "15px", marginBottom: "20px" }}
                />
              </Stack>
            </Grid>
          </div>
        </Grid>

        <h4
          style={{
            textAlign: "center",
            fontWeight: "650",
            border: "2px solid black",
            padding: "5px",
          }}
        >
          Company Address
        </h4>

        <Grid container spacing={2.5} style={{ marginTop: "2px" }}>
          <div
            style={{
              display: "flex",
              width: "100%",
              marginLeft: "20px",
              gap: "50px",
            }}
          >
            <Grid item xs={6}>
              <Stack spacing={1}>
                {/* <InputLabel>Year</InputLabel> */}
                <TextField
                  id="name"
                  label="Company Name"
                  type="text"
                  variant="outlined"
                  style={{ marginTop: "15px" }}
                />
                <TextField
                  id="name"
                  label="Street Address"
                  type="text"
                  variant="outlined"
                  style={{ marginTop: "15px" }}
                />
                <TextField
                  id="name"
                  label="Street Address Line 2"
                  type="text"
                  variant="outlined"
                  style={{ marginTop: "15px" }}
                />
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={1}>
                {/* <InputLabel>Year</InputLabel> */}
                <TextField
                  id="outlined-basic"
                  label="Postal (Zip) Code"
                  variant="outlined"
                  style={{ marginTop: "15px" }}
                />

                <TextField
                  id="name"
                  label="City"
                  type="text"
                  variant="outlined"
                  style={{ marginTop: "15px" }}
                />

                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    displayEmpty
                    id="demo-simple-select"
                    value={year}
                    placeholder="State/Province"
                    onChange={handleChange}
                    style={{ marginTop: "10px" }}
                  >
                    <MenuItem disabled value="" sx={{ color: "text.secondary" }}>
                      State/Province
                    </MenuItem>
                    <MenuItem value={"tn"}>Tamil Nadu</MenuItem>
                    <MenuItem value={"kerala"}>Kerala</MenuItem>
                    <MenuItem value={"karnataka"}>Karnataka</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </Grid>
          </div>
        </Grid>
        <h4
          style={{
            textAlign: "center",
            fontWeight: "650",
            border: "2px solid black",
            padding: "5px",
            marginTop: "20px",
          }}
        >
          Banking Information
        </h4>

        <Grid container spacing={2.5} style={{ marginTop: "2px" }}>
          <div
            style={{
              display: "flex",
              width: "100%",
              marginLeft: "20px",
              gap: "50px",
            }}
          >
            <Grid item xs={6}>
              <Stack spacing={1}>
                {/* <InputLabel>Year</InputLabel> */}
                <TextField
                  id="name"
                  label="Bank Name"
                  type="text"
                  variant="outlined"
                  style={{ marginTop: "15px" }}
                />
                <TextField
                  id="name"
                  label="Branch Name"
                  type="text"
                  variant="outlined"
                  style={{ marginTop: "15px" }}
                />
                <TextField
                  id="name"
                  label="Accounter Name"
                  type="text"
                  variant="outlined"
                  style={{ marginTop: "15px" }}
                />
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack spacing={1}>
                {/* <InputLabel>Year</InputLabel> */}
                <TextField
                  id="name"
                  label="Account Number"
                  type="number"
                  variant="outlined"
                  style={{ marginTop: "15px" }}
                />
                <TextField
                  id="name"
                  label="IFSC code"
                  type="text"
                  variant="outlined"
                  style={{ marginTop: "15px" }}
                />
                <TextField
                  id="name"
                  label="Upi id (optional)"
                  type="text"
                  variant="outlined"
                  style={{ marginTop: "15px" }}
                />
              </Stack>
            </Grid>
          </div>

          <Grid item xs={12}>
            <div
              className="button"
              style={{
                fontStyle: "italic",
                fontWeight: "bold",
                fontSize: "16px",
                backgroundColor: "#0e2a47",
                border: "2px solid #0e2a47",
                padding: "10px",
                borderRadius: "10px",
                color: "#fff",
                margin: "0",
              }}
            >
              <NavLink to="/home">Back</NavLink>
            </div>

            <button
              style={{
                fontStyle: "italic",
                fontWeight: "bold",
                fontSize: "16px",
                backgroundColor: "#0e2a47",
                border: "2px solid #0e2a47",
                padding: "10px",
                borderRadius: "10px",
                color: "#fff",
                margin: "0",
                marginLeft: "50px",
              }}
            >
              {" "}
              <NavLink to="/vendor/dashboard" >Submit</NavLink>
              {/* <Link to='/dashboard/invoice' style={{fontStyle:'italic', fontFamily:'-moz-initial', fontWeight:'bold', fontSize:'18px',  backgroundColor:'#0e2a47', border:'2px solid #0e2a47', padding:'10px', borderRadius:'10px', color:'#fff', marginLeft:'20px'}}> Search</Link> */}
            </button>
          </Grid>
        </Grid>
      </div>
    </main>
  );
};

export default VendorRegister;
