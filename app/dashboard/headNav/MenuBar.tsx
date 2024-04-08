"use client";
import React from "react";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const MenuBar = () => {
  return (
    <div>
      {" "}
      <TextField
        label="With normal TextField"
        id="outlined-start-adornment"
        sx={{ m: 1, width: "25ch" }}
        InputProps={{
          startAdornment: <SearchIcon />,
        }}
      />
    </div>
  );
};

export default MenuBar;
