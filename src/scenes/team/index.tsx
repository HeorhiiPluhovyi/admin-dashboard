import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid/";
import { tokens} from "../../theme/theme";
import { mockDataTeam } from "../../data/mockDataTeam";
import {
  AdminPanelSettingsOutlined as AdminPanelSettingsOutlinedIcon,
  LockOpenOutlined as LockOpenOutlinedIcon,
  SecurityOutlined as SecurityOutlinedIcon,
} from "@mui/icons-material";
import Header from "../../components/Header";
import {GridColDef} from "@mui/x-data-grid/models/colDef/gridColDef";

const Team = () => {
  const theme = useTheme(); // allow you to have access to the theme provided
  const colors = tokens(theme.palette.mode); // your theme colors
  const column: GridColDef[]  = [
    {
      field: "id", // name of field from mockDataTeam.id
      headerName: "ID" // represent of column tittle name
    },
    {
      field: "name", // name of field from mockDataTeam.name
      headerName: "Name", // represent of column tittle name
      flex: 1, // grow to one fraction of the size
      cellClassName: "name-column--cell", // for customize when styles was adding later color of name was change
    },
    {
      field: "age", // name of field from mockDataTeam.age
      headerName: "Age", // represent of column tittle name
      type: "number", // type of represent numbers
      headerAlign: "left", // move name of header to left
      align: "left", // move columns date to left
    },
    {
      field: "phone", // name of field from mockDataTeam.phone
      headerName: "Phone number", // represent of column tittle name
      flex: 1, // grow to one fraction of the size
    },
    {
      field: "email", // name of field from mockDataTeam.email
      headerName: "Email", // represent of column tittle name
      flex: 1, // grow to one fraction of the size
    },
    {
      field: "access", // name of field from mockDataTeam.access
      headerName: "Access level", // represent of column tittle name
      flex: 1, // grow to one fraction of the size
      renderCell: ({row: { access }}) => { // how to render cell
        return (
          <Box
            sx={{
              maxWidth: "60%",
              minWidth: "100px",
              margin: "0 auto",
              padding: "5px",
              display: "flex",
              justifyContent: "center",
              backgroundColor: (
                access === "admin"
                  ? colors.greenAccent[600]
                  : colors.greenAccent[700]
              ),
              borderRadius: "4px",

            }}
          >
            { access === "admin" && <AdminPanelSettingsOutlinedIcon/> }
            { access === "manager" && <SecurityOutlinedIcon/> }
            { access === "user" && <LockOpenOutlinedIcon/> }
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        )
      }
    }
  ]

  return (
    <Box m={"20px"}>
      <Header title={"TEAM"} subtitle={"Managing the Team Members"}/>
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
          }
        }}
      >
        <DataGrid rows={mockDataTeam} columns={column} />
      </Box>
    </Box>
  );
};

export default Team;
