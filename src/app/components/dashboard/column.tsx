"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  SkillTest: string
  ID: string
  DateAndTime: string
  Players: string
  Status: string
  Referee: string
  DocSubmitted: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "SkillTest",
    header: "SkillTest",
  },
  {
    accessorKey: "ID",
    header: "ID",
  },
  {
    accessorKey: "DateAndTime",
    header: "DateAndTime",
  },
  {
    accessorKey: "Players",
    header: "Players",
  },
  {
    accessorKey: "Referee",
    header: "Referee",
  },
  {
    accessorKey: "DocSubmitted",
    header: "DocSubmitted",
  },
  {
    accessorKey: "Status",
    header: "Status",
  },
]
