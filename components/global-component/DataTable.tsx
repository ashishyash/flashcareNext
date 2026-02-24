import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Column<T> = {
  key: keyof T | string;
  label: string;
  align?: "left" | "center" | "right";
  render?: (row: T) => React.ReactNode;
};

type DataTableProps<T extends { id: number }> = {
  columns: Column<T>[];
  data: readonly T[];
  checkedIds: Set<number>; // selection state from parent
  onToggleSelectAll: (checked: boolean) => void;
  onCheckboxChange: (id: number, checked: boolean) => void;
};

export function DataTable<T extends { id: number }>({
  columns,
  data,
  checkedIds,
  onToggleSelectAll,
  onCheckboxChange,
}: DataTableProps<T>) {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => setCurrentPage(page);
  const handlePrevious = () => currentPage > 1 && setCurrentPage((p) => p - 1);
  const handleNext = () =>
    currentPage < totalPages && setCurrentPage((p) => p + 1);

  const getPageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage, "...", totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="rounded-lg border overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="text-xs font-bold text-brand-black2">
            <TableRow>
              {/* Select All Checkbox */}
              <TableHead>
                <Checkbox
                  className="rounded-md"
                  checked={data.length > 0 && checkedIds.size === data.length}
                  onCheckedChange={(checked) =>
                    onToggleSelectAll(checked as boolean)
                  }
                  aria-label="Select all rows"
                />
              </TableHead>
              {columns.map((col) => (
                <TableHead
                  key={col.key.toString()}
                  className={col.align === "center" ? "text-center" : ""}
                >
                  {col.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {paginatedData.map((row) => (
              <TableRow key={row.id} className="hover:bg-slate-50">
                {/* Row Checkbox */}
                <TableCell>
                  <Checkbox
                    className="rounded-md border-brand-cyan1"
                    checked={checkedIds.has(row.id)}
                    onCheckedChange={(checked) =>
                      onCheckboxChange(row.id, checked as boolean)
                    }
                    aria-label={`Select row ${row.id}`}
                  />
                </TableCell>
                {columns.map((col) => (
                  <TableCell
                    key={col.key.toString()}
                    className={`text-sm text-brand-black2 ${
                      col.align === "center"
                        ? "text-center"
                        : col.align === "right"
                          ? "text-right"
                          : ""
                    }`}
                  >
                    {col.render ? col.render(row) : (row as any)[col.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {data.length > 0 && (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-4 py-3 bg-gray-50 rounded-b-lg border-t">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <span className="text-sm text-brand-black2 whitespace-nowrap">
              Rows per page:
            </span>
            <Select
              value={itemsPerPage.toString()}
              onValueChange={handleItemsPerPageChange}
            >
              <SelectTrigger className="w-[70px] h-8 text-sm text-brand-black2 border-sidebar-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="text-brand-black2">
                {[5, 10, 20, 50].map((size) => (
                  <SelectItem
                    key={size}
                    value={size.toString()}
                    className="data-[highlighted]:bg-brand-cyan1 data-[highlighted]:text-white"
                  >
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="text-sm text-brand-black2 mt-2 sm:mt-0">
              Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
              {Math.min(currentPage * itemsPerPage, data.length)} of{" "}
              {data.length} records
            </div>
          </div>

          <div className="flex items-center gap-1 w-full sm:w-auto justify-between sm:justify-end">
            <Button
              variant="ghost"
              size="sm"
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="h-8 w-8 p-0 text-brand-black2 hover:text-white hover:bg-brand-cyan1 disabled:opacity-50"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {getPageNumbers().map((page, index) =>
              typeof page === "number" ? (
                <Button
                  key={index}
                  variant={currentPage === page ? "default" : "ghost"}
                  size="sm"
                  onClick={() => handlePageChange(page)}
                  className={`h-8 w-8 p-0 text-sm ${
                    currentPage === page
                      ? "bg-brand-black2 text-white hover:bg-brand-cyan1"
                      : "text-brand-cyan3 hover:bg-brand-cyan1"
                  }`}
                >
                  {page}
                </Button>
              ) : (
                <span key={index} className="px-2 text-gray-400">
                  ...
                </span>
              ),
            )}

            <Button
              variant="ghost"
              size="sm"
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="h-8 w-8 p-0 text-brand-black2 hover:text-white hover:bg-brand-cyan1 disabled:opacity-50"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
