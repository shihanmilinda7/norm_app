// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { useEffect, useState } from "react";
// import { Checkbox } from "../ui/checkbox";
// import { Input } from "../ui/input";

// const SearchableTable = ({
//   headers,
//   rowDataIn,
//   tableCaption = "A list of items",
//   setSearchTermsIn,
// }: {
//   headers: any[];
//   rowDataIn: any[];
//   tableCaption?: any;
//   setSearchTermsIn: (data: any) => void;
// }) => {
//   const [rowData, setRowData] = useState<any[]>([]);
//   const [selectedRows, setSelectedRows] = useState<any[]>([]);
//   const [searchTerms, setSearchTerms] = useState<any>({});

//   useEffect(() => {
//     const q = [...rowDataIn];
//     setRowData(q);

//     const initialSearchTerms = headers.reduce((acc, header) => {
//       acc[header.columnName] = "";
//       return acc;
//     }, {});
//     setSearchTerms(initialSearchTerms);
//   }, [rowDataIn, headers]);

// //   useEffect(() => {
// //     setSearchTermsIn(searchTerms);
// //   }, [searchTerms]);

//   const handleCheckboxChange = (row: any) => {
//     setSelectedRows((prevSelectedRows) => {
//       const isSelected = prevSelectedRows.some(
//         (selectedRow) => selectedRow.itemId === row.itemId
//       );
//       if (isSelected) {
//         return prevSelectedRows.filter(
//           (selectedRow) => selectedRow.itemId !== row.itemId
//         );
//       } else {
//         return [...prevSelectedRows, row];
//       }
//     });
//   };

//   const handleSelectAllChange = () => {
//     if (selectedRows.length === rowData.length) {
//       setSelectedRows([]);
//     } else {
//       setSelectedRows(rowData);
//     }
//   };

//   const handleSearchChange = (column: string, value: string) => {
//     setSearchTerms((prevSearchTerms: any) => ({
//       ...prevSearchTerms,
//       [column]: value,
//     }));
//     // setSearchTermsIn((prevSearchTerms: any) => ({
//     //   ...prevSearchTerms,
//     //   [column]: value,
//     // }));
//   };

// //   const filteredData = rowData.filter((row) =>
// //     headers.every((header) => {
// //       const columnName = header.columnName;
// //       const searchTerm = searchTerms[columnName] || "";
// //       return row[columnName]
// //         .toString()
// //         .toLowerCase()
// //         .includes(searchTerm.toLowerCase());
// //     })
// //   );

//   return (
//     <div>
//       <div>
//         <Table>
//           <TableCaption>{tableCaption}</TableCaption>
//           <TableHeader>
//             <TableRow>
//               <TableHead>
//                 <Checkbox
//                   checked={selectedRows.length === rowData.length}
//                   onCheckedChange={handleSelectAllChange}
//                 />
//               </TableHead>
//               <TableHead>#</TableHead>
//               {headers.map((header, index) => (
//                 <TableHead
//                   key={index}
//                   className={`text-left w-[${header.width}px]`}
//                 >
//                   {header.headerName}
//                   <Input
//                     type="text"
//                     placeholder={`Search ${header.headerName}`}
//                     value={searchTerms[header.columnName] || ""}
//                     onChange={(e) =>
//                       handleSearchChange(header.columnName, e.target.value)
//                     }
//                     className="mt-1 border rounded p-1"
//                   />
//                 </TableHead>
//               ))}
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {rowData.map((row, index) => (
//               <TableRow key={row.itemId}>
//                 <TableCell className="font-medium">
//                   <Checkbox
//                     checked={selectedRows.some(
//                       (selectedRow) => selectedRow.itemId === row.itemId
//                     )}
//                     onCheckedChange={() => handleCheckboxChange(row)}
//                   />
//                 </TableCell>
//                 <TableCell className="font-medium">{index + 1}</TableCell>
//                 {headers.map((header, index) => (
//                   <TableCell key={index} className="font-medium">
//                     {row[header.columnName]}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//       <div>
//         <h3>Selected Rows:</h3>
//         <pre>{JSON.stringify(selectedRows, null, 2)}</pre>
//       </div>
//       <div>
//         <h3>Search Terms:</h3>
//         <pre>{JSON.stringify(searchTerms, null, 2)}</pre>
//       </div>
//     </div>
//   );
// };

// export default SearchableTable;
