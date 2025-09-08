"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/shadcncomponenets/ui/card"
import { Calendar } from "@/shadcncomponenets/ui/calendar"

export default function CalendarPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="p-6 w-full">
      <h1 className="text-3xl font-bold mb-6">📅 Calendar</h1>

      <Card className="h-[400px] flex flex-col items-center justify-center">
        <CardHeader>
          <CardTitle>Select Date</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </CardContent>
      </Card>
    </div>
  )
}
