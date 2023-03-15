import React from 'react';
import { Box, useTheme, Typography } from "@mui/material";
import {DataGrid, GridRenderCellParams} from "@mui/x-data-grid/";
import { tokens} from "../../theme/theme";
import {mockDataInvoices} from "../../data/mockDataInvoices";
import Header from "../../components/Header";
import {GridColDef} from "@mui/x-data-grid/models/colDef/gridColDef";

const Invoices = () => {
  const theme = useTheme(); // allow you to have access to the theme provided
  const colors = tokens(theme.palette.mode); // your theme colors
  const column: GridColDef[] = [ // table rules
    { field: "id", headerName: "ID" },
    {
      field: "name", // content of table cell
      headerName: "Name", // name of column Header
      flex: 1,
      cellClassName: "name-column--cell", // add class style for column
    },
    {
      field: "phone", // content of table cell
      headerName: "Phone Number", // name of column Header
      flex: 1,
    },
    {
      field: "email", // content of table cell
      headerName: "Email", // name of column Header
      flex: 1,
    },
    {
      field: "cost", // content of table cell
      headerName: "Cost", // name of column Header
      flex: 1,
      renderCell: (params: GridRenderCellParams) => ( // how to render cell
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "date", // content of table cell
      headerName: "Date", // name of column Header
      flex: 1,
    },
  ];

  return (
    <Box m={"20px"}>
      <Header title={"INVOICES"} subtitle={"List of Invoices"}/>
      <Box
        sx={{
          height: "75vh",
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: colors.grey[100],
          },
          "& .MuiCheckBox--root": {
            color: colors.greenAccent[200],
          }
        }}
      >
        <DataGrid
          checkboxSelection // add checkbox at start of row
          rows={mockDataInvoices} // what data used for build table
          columns={column} // rules what represent how must look table
        />
      </Box>
    </Box>
  );
};

export default Invoices;
