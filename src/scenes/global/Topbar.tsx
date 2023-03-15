import React from 'react';
import {Box, IconButton, useTheme} from "@mui/material";
import {useContext} from "react";
import {ColorModeContext, tokens} from "../../theme/theme";
import {InputBase} from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon
  from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon
  from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme(); // allow you to have access to the theme provided
  const colors = tokens(theme.palette.mode); // your theme colors
  const colorMode = useContext(ColorModeContext); // used to allow to toggle different states( color mode)
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
    >
      {/* SEARCHBAR */}
      <Box
        sx={{
          display: "flex",
          borderRadius: "3px",
          backgroundColor: colors.primary[400],
        }}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark'
            ? <DarkModeOutlinedIcon />
            : <LightModeOutlinedIcon />
          }
        </IconButton>
        <IconButton><NotificationsOutlinedIcon /></IconButton>
        <IconButton><SettingsOutlinedIcon /></IconButton>
        <IconButton><PersonOutlinedIcon /></IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
