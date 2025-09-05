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

const certificates = [
  { id: 1, title: "React.js Fundamentals", issuedBy: "Coursera", year: "2023" },
  { id: 2, title: "Full Stack Web Development", issuedBy: "freeCodeCamp", year: "2022" },
  { id: 3, title: "Flutter App Development", issuedBy: "Udemy", year: "2024" },
  { id: 4, title: "JavaScript Advanced", issuedBy: "Pluralsight", year: "2021" },
  { id: 5, title: "Database Management (MongoDB)", issuedBy: "MongoDB University", year: "2023" },
  { id: 6, title: "Cloud Computing Basics", issuedBy: "AWS Academy", year: "2022" },
];

const CertificatePage = () => {
  return (
    <div className="p-6">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <Typography variant="h4" fontWeight="bold">
            Certificates
          </Typography>
          <Typography variant="body2" color="text.secondary">
            All Achieved Certificates List
          </Typography>
        </div>

        <Button
          variant="contained"
          sx={{ bgcolor: "black", ":hover": { bgcolor: "#333" } }}
        >
          Add New Certificate
        </Button>
      </div>

      {/* Table Section */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: "grey.200" }}>
            <TableRow>
              <TableCell>
                <b>S.No#</b>
              </TableCell>
              <TableCell>
                <b>Certificate Title</b>
              </TableCell>
              <TableCell>
                <b>Issued By</b>
              </TableCell>
              <TableCell>
                <b>Year</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {certificates.map((cert, index) => (
              <TableRow key={cert.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{cert.title}</TableCell>
                <TableCell>{cert.issuedBy}</TableCell>
                <TableCell>{cert.year}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CertificatePage;
