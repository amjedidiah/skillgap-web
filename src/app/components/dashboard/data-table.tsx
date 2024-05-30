"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { SGImgIcon } from "@/lib/icons"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="pl-[36px] bg-[#F7F7F7] text-[14px]">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="pl-[36px] text-[12px] text-[#8F8F8F] pb-[10px] pt-[18px]">
                    {
                      cell.id.split("_")[1] === "DocSubmitted" ? (
                        <div className="flex bg-[#E7F4FD] px-[7px] py-[4.5px] justify-center items-center w-fit rounded-[4px] space-x-[4px]">
                          <div>
                            <SGImgIcon />
                          </div>
                          <div>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </div>
                        </div>
                      ) : cell.id.split("_")[1] === "Status" && cell.getValue() === "Resolved" ?  (
                        <div className="bg-[#E2FEE6] text-[#2A9D0D] flex justify-center w-fit px-[8px] py-[3px] rounded-[24px]">
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </div>
                      )  : cell.id.split("_")[1] === "Status" && cell.getValue() === "Ongoing" ?  (
                        <div className="bg-[#FFFAE5] text-[#DBBC1C] flex justify-center w-fit px-[9px] py-[3px] rounded-[24px]">
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </div>
                      ) : (
                        <div>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </div>
                      )
                    }
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
