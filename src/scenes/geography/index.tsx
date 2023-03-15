import React from 'react';
import Header from "../../components/Header";
import {Box} from "@mui/material";
import GeographyChart from "../../components/GeographyChart";

const Georpaphy = () => {
  return (
    <Box m="20px">
      <Header title="Geography Chart" subtitle="Simple Geography Chart" />
      <Box height="75vh">
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Georpaphy;
