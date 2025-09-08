"use client";
import React from "react";
import {
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";

const developers = [
  { id: 1, name: "Ali Huzaifa", role: "Full Stack Developer" },
  { id: 2, name: "Saqib Farhan", role: "Software Developer" },
];

const DeveloperPage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
        component={Paper}
        elevation={2}
        p={2}
        borderRadius={2}
      >
        <div>
          <Typography variant="h5" fontWeight="bold">
            Developer Management
          </Typography>
          <Typography variant="body2" color="text.secondary">
            List of all registered developers
          </Typography>
        </div>

        <Button
          variant="contained"
          sx={{ bgcolor: "black", ":hover": { bgcolor: "#333" } }}
        >
          Add Developer
        </Button>
      </Box>

      {/* Table Section */}
      <TableContainer component={Paper} elevation={2}>
        <Table>
          <TableHead sx={{ bgcolor: "grey.100" }}>
            <TableRow>
              <TableCell>
                <b>S.No#</b>
              </TableCell>
              <TableCell>
                <b>Name</b>
              </TableCell>
              <TableCell>
                <b>Developer Role</b>
              </TableCell>
              <TableCell align="center">
                <b>Actions</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {developers.map((dev, index) => (
              <TableRow
                key={dev.id}
                sx={{
                  "&:nth-of-type(odd)": { bgcolor: "grey.50" },
                  "&:hover": { bgcolor: "grey.100" },
                }}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{dev.name}</TableCell>
                <TableCell>{dev.role}</TableCell>
                <TableCell align="center">
                  <Button size="small" variant="outlined" sx={{ mr: 1 }}>
                    Edit
                  </Button>
                  <Button size="small" variant="outlined" color="error">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DeveloperPage;
