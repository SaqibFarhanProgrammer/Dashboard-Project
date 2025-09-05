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

const stacks = [
  { id: 1, name: "React.js", type: "Frontend Framework" },
  { id: 2, name: "Next.js", type: "Fullstack Framework" },
  { id: 3, name: "Vue.js", type: "Frontend Framework" },
  { id: 4, name: "Angular", type: "Frontend Framework" },
  { id: 5, name: "Node.js", type: "Backend Runtime" },
  { id: 6, name: "Express.js", type: "Backend Framework" },
  { id: 7, name: "MongoDB", type: "Database" },
  { id: 8, name: "PostgreSQL", type: "Database" },
  { id: 9, name: "Firebase", type: "Backend + Hosting" },
  { id: 10, name: "React Native", type: "Mobile App Framework" },
  { id: 11, name: "Flutter", type: "Mobile App Framework" },
  { id: 12, name: "Swift", type: "iOS Development" },
  { id: 13, name: "Kotlin", type: "Android Development" },
  { id: 14, name: "Tailwind CSS", type: "UI Styling" },
  { id: 15, name: "Material UI", type: "UI Component Library" },
];

const StackPage = () => {
  return (
    <div className="p-6">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <Typography variant="h4" fontWeight="bold">
            Developer Stack
          </Typography>
          <Typography variant="body2" color="text.secondary">
            All Web & App Developer Stack List
          </Typography>
        </div>

        <Button
          variant="contained"
          sx={{ bgcolor: "black", ":hover": { bgcolor: "#333" } }}
        >
          Add New Stack
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
                <b>Stack Name</b>
              </TableCell>
              <TableCell>
                <b>Category</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stacks.map((stack, index) => (
              <TableRow key={stack.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{stack.name}</TableCell>
                <TableCell>{stack.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StackPage;
