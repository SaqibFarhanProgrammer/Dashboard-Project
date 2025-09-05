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
} from "@mui/material";

const developers = [
  { id: 1, name: "Ali Huzaifa", role: "Full Stack Developer" },
  { id: 2, name: "Saqib Farhan", role: "React Specialist" },
  { id: 4, name: "Ali Huzaifa", role: "UI/UX Designer" },
];

const DeveloperPage = () => {
  return (
    <div className="p-6">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <Typography variant="h4" fontWeight="bold">
            Developer Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            All Developer Name List
          </Typography>
        </div>

        <Button variant="contained" sx={{ bgcolor: "black", ":hover": { bgcolor: "#333" } }}>
          Add New Developer
        </Button>
      </div>

      {/* Table Section */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: "grey.200" }}>
            <TableRow>
              <TableCell><b>S.No#</b></TableCell>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Developer Role</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {developers.map((dev, index) => (
              <TableRow key={dev.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{dev.name}</TableCell>
                <TableCell>{dev.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DeveloperPage;
