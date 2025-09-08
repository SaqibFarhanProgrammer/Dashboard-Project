"use client";

import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../shadcncomponenets/ui/card";
import { Button } from "../../shadcncomponenets/ui/button";
import { MapPin } from "lucide-react";

const locations = [
  {
    title: "Head Office",
    address: "123 Main Street, Karachi",
    color: "bg-blue-500",
  },
  {
    title: "Branch Office",
    address: "45 Mall Road, Lahore",
    color: "bg-green-500",
  },
  {
    title: "Warehouse",
    address: "Industrial Zone, Islamabad",
    color: "bg-purple-500",
  },
];

export default function LocationPage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">📍 Locations</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Map Section */}
        <Card className="md:col-span-2 shadow-lg rounded-2xl border overflow-hidden">
          <CardHeader className="border-b">
            <CardTitle className="text-lg font-semibold">Map View</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {/* Static Dummy Map Image */}
            <img
              src="https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png"
              alt="Dummy Map"
              className="w-full h-[500px] object-cover"
            />
          </CardContent>
        </Card>

        {/* Locations List */}
        <Card className="shadow-lg rounded-2xl border">
          <CardHeader className="border-b">
            <CardTitle className="text-lg font-semibold">
              Saved Locations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {locations.map((loc, i) => (
              <LocationItem
                key={i}
                title={loc.title}
                address={loc.address}
                color={loc.color}
              />
            ))}
            <Button className="w-full mt-4">+ Add New Location</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function LocationItem({
  title,
  address,
  color,
}: {
  title: string;
  address: string;
  color: string;
}) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg border hover:bg-gray-50">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${color}`}
      >
        <MapPin size={18} />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
        <p className="text-xs text-gray-500">{address}</p>
      </div>
    </div>
  );
}
