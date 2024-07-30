import React from "react";
import "../vendor.css";
import { FormControl, Grid, MenuItem, Select, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import TextField from "@mui/material/TextField";

const AddProduct = () => {
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
          marginTop: "80px",
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
          Add Product
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
                  label="Product Name"
                  type="text"
                  variant="outlined"
                  style={{ marginTop: "15px" }}
                />
                <TextField
                  id="name"
                  label="Dwscription"
                  type="text"
                  variant="outlined"
                  style={{ marginTop: "15px" }}
                />
                <TextField
                  id="name"
                  label="Category"
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
                  label="Quantity"
                  variant="outlined"
                  style={{ marginTop: "15px" }}
                />


                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    displayEmpty
                    id="demo-simple-select"
                    value={year}
                    placeholder="Status"
                    onChange={handleChange}
                    style={{ marginTop: "10px" }}
                  >
                    <MenuItem disabled value="" sx={{ color: "text.secondary" }}>
                      Status
                    </MenuItem>
                    <MenuItem value={"tn"}>In Stock</MenuItem>
                    <MenuItem value={"kerala"}>Out of Stock</MenuItem>
                  </Select>
                </FormControl>
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
                    marginTop: '20px'
                  }}
                >
                  {" "}
                  <NavLink to="/vendor/dashboard" >Submit</NavLink>
                  {/* <Link to='/dashboard/invoice' style={{fontStyle:'italic', fontFamily:'-moz-initial', fontWeight:'bold', fontSize:'18px',  backgroundColor:'#0e2a47', border:'2px solid #0e2a47', padding:'10px', borderRadius:'10px', color:'#fff', marginLeft:'20px'}}> Search</Link> */}
                </button>
              </Stack>
            </Grid>
          </div>

        </Grid>


      </div>
    </main>
  )
}

export default AddProduct;