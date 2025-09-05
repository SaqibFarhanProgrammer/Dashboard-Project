"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";
import { FileDown, Filter } from "lucide-react";

// ---------------- Mock Data ----------------
const reportData = [
  { month: "Jan", revenue: 12000, expenses: 8000 },
  { month: "Feb", revenue: 14300, expenses: 9500 },
  { month: "Mar", revenue: 13200, expenses: 9100 },
  { month: "Apr", revenue: 16800, expenses: 10400 },
  { month: "May", revenue: 21400, expenses: 14300 },
  { month: "Jun", revenue: 19800, expenses: 12800 },
  { month: "Jul", revenue: 24100, expenses: 16000 },
];

const detailedReport = [
  { id: "RPT-1001", department: "Sales", revenue: 12000, expenses: 8000, date: "2025-07-01" },
  { id: "RPT-1002", department: "Marketing", revenue: 14300, expenses: 9500, date: "2025-07-05" },
  { id: "RPT-1003", department: "Operations", revenue: 13200, expenses: 9100, date: "2025-07-10" },
  { id: "RPT-1004", department: "Support", revenue: 16800, expenses: 10400, date: "2025-07-15" },
];

// ---------------- Component ----------------
export default function ReportPage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <Typography variant="h4" fontWeight="bold">
            Reports
          </Typography>
          <Typography variant="body2" color="text.secondary">
            View financial and departmental reports with charts & tables.
          </Typography>
        </div>
        <div className="flex gap-3">
          <TextField size="small" placeholder="Search reports…" />
          <Select defaultValue="monthly" size="small">
            <MenuItem value="monthly">Monthly</MenuItem>
            <MenuItem value="quarterly">Quarterly</MenuItem>
            <MenuItem value="yearly">Yearly</MenuItem>
          </Select>
          <Button variant="contained" startIcon={<Filter size={16} />}>
            Apply Filters
          </Button>
          <Button variant="outlined" startIcon={<FileDown size={16} />}>
            Export
          </Button>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card elevation={2}>
          <CardHeader title="Revenue vs Expenses (Line Chart)" />
          <CardContent style={{ height: "300px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={reportData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={2} />
                <Line type="monotone" dataKey="expenses" stroke="#f43f5e" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card elevation={2}>
          <CardHeader title="Revenue Breakdown (Bar Chart)" />
          <CardContent style={{ height: "300px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={reportData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#22c55e" radius={[6, 6, 0, 0]} />
                <Bar dataKey="expenses" fill="#f59e0b" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Table */}
      <Card elevation={2}>
        <CardHeader title="Detailed Report" />
        <CardContent>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Report ID</TableCell>
                <TableCell>Department</TableCell>
                <TableCell align="right">Revenue</TableCell>
                <TableCell align="right">Expenses</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {detailedReport.map((r) => (
                <TableRow key={r.id}>
                  <TableCell>{r.id}</TableCell>
                  <TableCell>{r.department}</TableCell>
                  <TableCell align="right">${r.revenue.toLocaleString()}</TableCell>
                  <TableCell align="right">${r.expenses.toLocaleString()}</TableCell>
                  <TableCell>{r.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Footer */}
      <Typography
        variant="caption"
        color="text.secondary"
        align="center"
        display="block"
        sx={{ mt: 4 }}
      >
        Reports generated with React + TypeScript + Recharts + MUI
      </Typography>
    </div>
  );
}
