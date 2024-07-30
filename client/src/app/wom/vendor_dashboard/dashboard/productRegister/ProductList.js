import React, { useState } from "react";
import {
  Box,
  Table,
  styled,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  useMediaQuery,
  useTheme,
  TableContainer,
  Paper
} from "@mui/material";
import { SimpleCard } from "app/components";
import { Link } from "react-router-dom";

// STYLED COMPONENT
const StyledTable = styled(Table)(() => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } }
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } }
  }
}));

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const subscribarList = [
  {
    name: "5-speed R151 manual 6-speed AC60 automatic",
    qty: "15",
    status: "In Stock",
    price: "₹ 2500",
    categories: "Petrol"
  },
  {
    name: "5-speed R151 manual 6-speed RC60 manual",
    qty: "15",
    status: "In Stock",
    price: "₹ 2500",
    categories: "Petrol"
  },
  {
    name: "6-speed AC60 automatic",
    qty: "15",
    status: "In Stock",
    price: "₹ 2500",
    categories: "Petrol"
  },
  {
    name: "5-speed R151 manual 6-speed RC60 manual 6-speed AC60 automatic",
    qty: "15",
    status: "In Stock",
    price: "₹ 2500",
    categories: "Petrol"
  },
  {
    name: "5-speed R151 manual 6-speed AC60 automatic",
    qty: "15",
    status: "In Stock",
    price: "₹ 2500",
    categories: "Petrol"
  },
  {
    name: "5-speed R151 manual 6-speed RC60 manual",
    qty: "15",
    status: "In Stock",
    price: "₹ 2500",
    categories: "Petrol"
  },
  {
    name: "6-speed AC60 automatic",
    qty: "15",
    status: "In Stock",
    price: "₹ 2500",
    categories: "Petrol"
  },
  {
    name: "5-speed R151 manual 6-speed RC60 manual 6-speed AC60 automatic",
    qty: "15",
    status: "In Stock",
    price: "₹ 2500",
    categories: "Petrol"
  },
  {
    name: "5-speed R151 manual 6-speed AC60 automatic",
    qty: "15",
    status: "In Stock",
    price: "₹ 2500",
    categories: "Petrol"
  },
  {
    name: "5-speed R151 manual 6-speed RC60 manual",
    qty: "15",
    status: "In Stock",
    price: "₹ 2500",
    categories: "Petrol"
  },
  {
    name: "6-speed AC60 automatic",
    qty: "15",
    status: "In Stock",
    price: "₹ 2500",
    categories: "Petrol"
  },
  {
    name: "5-speed R151 manual 6-speed RC60 manual 6-speed AC60 automatic",
    qty: "15",
    status: "In Stock",
    price: "₹ 2500",
    categories: "Petrol"
  },
  {
    name: "5-speed R151 manual 6-speed AC60 automatic",
    qty: "15",
    status: "In Stock",
    price: "₹ 2500",
    categories: "Petrol"
  }
];

const ProductList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Product List</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to=" " className="a">
                <i className="bi bi-card-checklist"></i>
              </Link>
            </li>
            <li className="breadcrumb-item active">Product List</li>
          </ol>
        </nav>
      </div>
      <Container>
        <SimpleCard title="Product List">
          <Box width="100%" overflow="auto">
            <TableContainer component={Paper}>
              <StyledTable>
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Product Name</TableCell>
                    {!isMobile && <TableCell align="center">Categories</TableCell>}
                    <TableCell align="center">Price</TableCell>
                    {!isMobile && <TableCell align="center">Qty</TableCell>}
                    <TableCell align="center">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {subscribarList
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((subscriber, index) => (
                      <TableRow key={index}>
                        <TableCell align="left">{subscriber.name}</TableCell>
                        {!isMobile && <TableCell align="center">{subscriber.categories}</TableCell>}
                        <TableCell align="center">{subscriber.price}</TableCell>
                        {!isMobile && <TableCell align="center">{subscriber.qty}</TableCell>}
                        <TableCell align="center">{subscriber.status}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </StyledTable>
            </TableContainer>
            <TablePagination
              sx={{ px: 2 }}
              page={page}
              component="div"
              rowsPerPage={rowsPerPage}
              count={subscribarList.length}
              onPageChange={handleChangePage}
              rowsPerPageOptions={[5, 10, 25]}
              onRowsPerPageChange={handleChangeRowsPerPage}
              nextIconButtonProps={{ "aria-label": "Next Page" }}
              backIconButtonProps={{ "aria-label": "Previous Page" }}
            />
          </Box>
        </SimpleCard>
      </Container>
    </main>
  );
};

export default ProductList;
