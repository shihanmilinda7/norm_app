// import {
//     Table,
//     TableBody,
//     TableCaption,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
//   } from "@/components/ui/table";
//   import { useEffect, useState } from "react";
//   import { Checkbox } from "../ui/checkbox";
  
//   const SearchableTable = ({
//     headers,
//     rowDataIn,
//     tableCaption = "A list of items",
//   }: {
//     headers: any[];
//     rowDataIn: any[];
//     tableCaption?: any;
//   }) => {
//     const [rowData, setRowData] = useState<any[]>([]);
//     const [selectedRows, setSelectedRows] = useState<any[]>([]);
  
//     useEffect(() => {
//       const q = [...rowDataIn];
//       setRowData(q);
//     }, [rowDataIn]);
  
//     const handleCheckboxChange = (row: any) => {
//       setSelectedRows((prevSelectedRows) => {
//         const isSelected = prevSelectedRows.some(
//           (selectedRow) => selectedRow.itemId === row.itemId
//         );
//         if (isSelected) {
//           return prevSelectedRows.filter(
//             (selectedRow) => selectedRow.itemId !== row.itemId
//           );
//         } else {
//           return [...prevSelectedRows, row];
//         }
//       });
//     };
  
//     const handleSelectAllChange = () => {
//       if (selectedRows.length === rowData.length) {
//         setSelectedRows([]);
//       } else {
//         setSelectedRows(rowData);
//       }
//     };
  
//     return (
//       <div>
//         <div>
//           <Table>
//             <TableCaption>{tableCaption}</TableCaption>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>
//                   <Checkbox
//                     checked={selectedRows.length === rowData.length}
//                     onCheckedChange={handleSelectAllChange}
//                   />
//                 </TableHead>
//                 <TableHead>#</TableHead>
//                 {headers.map((header, index) => (
//                   <TableHead key={index} className={`text-left w-[${header.width}px]`}>
//                     {header.headerName}
//                   </TableHead>
//                 ))}
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {rowData.map((row, index) => (
//                 <TableRow key={row.itemId}>
//                   <TableCell className="font-medium">
//                     <Checkbox
//                       checked={selectedRows.some(
//                         (selectedRow) => selectedRow.itemId === row.itemId
//                       )}
//                       onCheckedChange={() => handleCheckboxChange(row)}
//                     />
//                   </TableCell>
//                   <TableCell className="font-medium">{index + 1}</TableCell>
//                   {headers.map((header, index) => (
//                     <TableCell key={index} className="font-medium">
//                       {row[header.columnName]}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//         <div>
//           <h3>Selected Rows:</h3>
//           <pre>{JSON.stringify(selectedRows, null, 2)}</pre>
//         </div>
//       </div>
//     );
//   };
  
//   export default SearchableTable;
  