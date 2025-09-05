"use client"; // if you're in Next.js app router

import React from "react";
import dynamic from "next/dynamic";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { TrendingUp, Users, ShoppingBag, DollarSign, Filter } from "lucide-react";

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
  TextField,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

// ✅ Dynamically import motion.div (fixes Next.js + React 19 issue)
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

// ---------------- Mock Data ----------------
const kpis = [
  { label: "Revenue", value: "$82,450", delta: "+12.4%", icon: DollarSign },
  { label: "Orders", value: "1,243", delta: "+5.1%", icon: ShoppingBag },
  { label: "Active Users", value: "9,482", delta: "+3.8%", icon: Users },
  { label: "Growth", value: "24.3%", delta: "+1.2%", icon: TrendingUp },
];

const salesOverTime = [
  { month: "Jan", sales: 12000, orders: 220 },
  { month: "Feb", sales: 14300, orders: 240 },
  { month: "Mar", sales: 13200, orders: 230 },
  { month: "Apr", sales: 16800, orders: 290 },
  { month: "May", sales: 21400, orders: 330 },
  { month: "Jun", sales: 19800, orders: 310 },
  { month: "Jul", sales: 24100, orders: 360 },
];

const categoryShare = [
  { name: "Electronics", value: 400 },
  { name: "Apparel", value: 300 },
  { name: "Home", value: 200 },
  { name: "Sports", value: 180 },
];

const recentOrders = [
  { id: "INV-1045", customer: "Ayesha Khan", amount: 245.5, status: "Paid", date: "2025-09-01" },
  { id: "INV-1044", customer: "Bilal Ahmed", amount: 119.99, status: "Pending", date: "2025-08-31" },
  { id: "INV-1043", customer: "Fatima Noor", amount: 980.0, status: "Paid", date: "2025-08-30" },
  { id: "INV-1042", customer: "Sajid Ali", amount: 64.0, status: "Refunded", date: "2025-08-29" },
];

const pieColors = ["#0ea5e9", "#22c55e", "#f59e0b", "#ef4444"];

// ---------------- Component ----------------
export default function Dashboard():  React.ReactElement  {
  return (
    <div style={{ padding: "24px", background: "#f9fafb", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "24px" }}>
        <div>
          <Typography variant="h4" fontWeight="bold">
     Dashboard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Simple, clean, and responsive dashboard with charts.
          </Typography>
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          <TextField size="small" placeholder="Search orders, customers…" />
          <Select defaultValue="7d" size="small">
            <MenuItem value="7d">Last 7 days</MenuItem>
            <MenuItem value="30d">Last 30 days</MenuItem>
            <MenuItem value="90d">Last 90 days</MenuItem>
            <MenuItem value="ytd">Year to date</MenuItem>
          </Select>
          <Button variant="contained" startIcon={<Filter size={16} />}>
            Filter
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div style={{ display: "grid", gap: "16px", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
        {kpis.map((kpi, idx) => (
          <MotionDiv
            key={kpi.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            <Card elevation={2}>
              <CardHeader
                title={<Typography variant="subtitle2">{kpi.label}</Typography>}
                action={<kpi.icon size={20} color="#6b7280" />}
              />
              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  {kpi.value}
                </Typography>
                <Typography variant="caption" color="green">
                  {kpi.delta} vs last period
                </Typography>
              </CardContent>
            </Card>
          </MotionDiv>
        ))}
      </div>

      {/* Charts */}
      <div style={{ display: "grid", gap: "16px", marginTop: "24px", gridTemplateColumns: "2fr 1fr" }}>
        {/* Line Chart */}
        <Card elevation={2}>
          <CardHeader title="Sales Over Time" />
          <CardContent style={{ height: "300px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesOverTime}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#2563eb" strokeWidth={2} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="orders" stroke="#22c55e" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card elevation={2}>
          <CardHeader title="Category Share" />
          <CardContent style={{ height: "300px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip />
                <Pie data={categoryShare} dataKey="value" nameKey="name" outerRadius={90} paddingAngle={2}>
                  {categoryShare.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Bar Chart + Table */}
      <div style={{ display: "grid", gap: "16px", marginTop: "24px", gridTemplateColumns: "3fr 2fr" }}>
        {/* Bar Chart */}
        <Card elevation={2}>
          <CardHeader title="Monthly Orders" />
          <CardContent style={{ height: "300px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesOverTime}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="orders" radius={[8, 8, 0, 0]} fill="#0ea5e9" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recent Orders Table */}
        <Card elevation={2}>
          <CardHeader title="Recent Orders" />
          <CardContent>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Invoice</TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recentOrders.map((o) => (
                  <TableRow key={o.id}>
                    <TableCell>{o.id}</TableCell>
                    <TableCell>{o.customer}</TableCell>
                    <TableCell align="right">${o.amount.toFixed(2)}</TableCell>
                    <TableCell>{o.status}</TableCell>
                    <TableCell>{o.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <Typography variant="caption" color="text.secondary" align="center" display="block" sx={{ mt: 4 }}>
        Built with React + TypeScript, Recharts, MUI, and Framer Motion.
      </Typography>
    </div>
  );
}
