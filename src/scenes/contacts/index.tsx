import React from 'react';
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid/";
import { tokens} from "../../theme/theme";
import {mockDataContacts} from "../../data/mockDataContacts";
import Header from "../../components/Header";
import {GridColDef} from "@mui/x-data-grid/models/colDef/gridColDef";

const Contacts = () => {
  const theme = useTheme(); // allow you to have access to the theme provided
  const colors = tokens(theme.palette.mode); // your theme colors
  const column: GridColDef[]  = [
    {
      field: "id", // name of field from mockDataContacts.id
      headerName: "ID", // represent of column tittle name
      flex: 0.5,
    },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name", // name of field from mockDataContacts.name
      headerName: "Name", // represent of column tittle name
      flex: 1, // grow to one fraction of the size
      cellClassName: "name-column--cell", // for customize when styles was adding later color of name was change
    },
    {
      field: "age", // name of field from mockDataContacts.age
      headerName: "Age", // represent of column tittle name
      type: "number", // type of represent numbers
      headerAlign: "left", // move name of header to left
      align: "left", // move columns date to left
    },
    {
      field: "phone", // name of field from mockDataContacts.phone
      headerName: "Phone number", // represent of column tittle name
      flex: 1, // grow to one fraction of the size
    },
    {
      field: "email", // name of field from mockDataContacts.email
      headerName: "Email", // represent of column tittle name
      flex: 1, // grow to one fraction of the size
    },
    {
      field: "address", // name of field from mockDataContacts.address
      headerName: "Address", // represent of column tittle name
      flex: 1, // grow to one fraction of the size
    },
    {
      field: "city", // name of field from mockDataContacts.city
      headerName: "City", // represent of column tittle name
      flex: 1, // grow to one fraction of the size
    },
    {
      field: "zipCode", // name of field from mockDataContacts.zipCode
      headerName: "ZipCode", // represent of column tittle name
      flex: 1, // grow to one fraction of the size
    }
  ]

  return (
    <Box m={"20px"}>
      <Header title={"CONTACTS"} subtitle={"List of Contacts for featured references"}/>
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
          }
        }}
      >
        <DataGrid
          rows={mockDataContacts} // what data used for build table
          columns={column} // rules what represent how must look table
          components={{ Toolbar: GridToolbar }} // add toolbar for set up how must look a table
        />
      </Box>
    </Box>
  );
};

export default Contacts;
