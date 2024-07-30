import { useState } from "react";
import {
  Box,
  Table,
  styled,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TablePagination
} from "@mui/material";
import { SimpleCard } from "app/components";

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
    id: "#1234",
    name: "5-speed R151 manual 6-speed AC60 automatic",
    qty: "15",
    create: "12-03-2024",
    due: "12-04-2024",
    status: "Paid"
  },
  {
    id: "#1234",
    name: "5-speed R151 manual 6-speed AC60 automatic",
    qty: "15",
    create: "12-03-2024",
    due: "12-04-2024",
    status: "Paid"
  },
  {
    id: "#1234",
    name: "5-speed R151 manual 6-speed AC60 automatic",
    qty: "15",
    create: "12-03-2024",
    due: "12-04-2024",
    status: "Paid"
  },
  {
    id: "#1234",
    name: "5-speed R151 manual 6-speed AC60 automatic",
    qty: "15",
    create: "12-03-2024",
    due: "12-04-2024",
    status: "Paid"
  },
  {
    id: "#1234",
    name: "5-speed R151 manual 6-speed AC60 automatic",
    qty: "15",
    create: "12-03-2024",
    due: "12-04-2024",
    status: "Paid"
  },
  {
    id: "#1234",
    name: "5-speed R151 manual 6-speed AC60 automatic",
    qty: "15",
    create: "12-03-2024",
    due: "12-04-2024",
    status: "Paid"
  },
  {
    id: "#1234",
    name: "5-speed R151 manual 6-speed AC60 automatic",
    qty: "15",
    create: "12-03-2024",
    due: "12-04-2024",
    status: "Paid"
  },
  {
    id: "#1234",
    name: "5-speed R151 manual 6-speed AC60 automatic",
    qty: "15",
    create: "12-03-2024",
    due: "12-04-2024",
    status: "Paid"
  },
  {
    id: "#1234",
    name: "5-speed R151 manual 6-speed AC60 automatic",
    qty: "15",
    create: "12-03-2024",
    due: "12-04-2024",
    status: "Paid"
  },
  {
    id: "#1234",
    name: "5-speed R151 manual 6-speed AC60 automatic",
    qty: "15",
    create: "12-03-2024",
    due: "12-04-2024",
    status: "Paid"
  },
  {
    id: "#1234",
    name: "5-speed R151 manual 6-speed AC60 automatic",
    qty: "15",
    create: "12-03-2024",
    due: "12-04-2024",
    status: "Paid"
  },
  {
    id: "#1234",
    name: "5-speed R151 manual 6-speed AC60 automatic",
    qty: "15",
    create: "12-03-2024",
    due: "12-04-2024",
    status: "Paid"
  },
  {
    id: "#1234",
    name: "5-speed R151 manual 6-speed AC60 automatic",
    qty: "15",
    create: "12-03-2024",
    due: "12-04-2024",
    status: "Paid"
  },
  {
    id: "#1234",
    name: "5-speed R151 manual 6-speed AC60 automatic",
    qty: "15",
    create: "12-03-2024",
    due: "12-04-2024",
    status: "Paid"
  },
];
const PaymentResponse = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <main id='main' className='main'>
      <Container>
        <SimpleCard title="Product List">
          <Box width="100%" overflow="auto">
            <StyledTable>
              <TableHead>
                <TableRow>
                  <TableCell align="left">Invoice Id</TableCell>
                  <TableCell align="left">Product Name</TableCell>
                  <TableCell align="center">Create Date</TableCell>
                  <TableCell align="center">Due Date</TableCell>
                  <TableCell align="center">Qty</TableCell>
                  <TableCell align="center">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {subscribarList
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((subscriber, index) => (
                    <TableRow key={index}>
                      <TableCell align="left">{subscriber.id}</TableCell>
                      <TableCell align="left">{subscriber.name}</TableCell>
                      <TableCell align="center">{subscriber.create}</TableCell>
                      <TableCell align="center">{subscriber.due}</TableCell>
                      <TableCell align="center">{subscriber.qty}</TableCell>
                      <TableCell align="center">{subscriber.status}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </StyledTable>

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
  )
}

export default PaymentResponse;