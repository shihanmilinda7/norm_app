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

// const SearchableTable = ({
//   headers,
//   rowDataIn,
//   tableCaption = "A list of items",
// }: {
//   headers: any[];
//   rowDataIn: any[];
//   tableCaption?: any;
// }) => {
//   const [rowData, setRowData] = useState<any[]>([]);

//   useEffect(() => {
//     const q = [...rowDataIn];
//     setRowData(q);
//   }, [rowDataIn]);

//   return (
//     <div>
//       <div>
//         <Table>
//           <TableCaption>{tableCaption}</TableCaption>
//           <TableHeader>
//             <TableRow>
//               <TableHead>
//                 <Checkbox disabled checked />
//               </TableHead>
//               <TableHead>#</TableHead>
//               {headers.map((header) => (
//                 <TableHead className={`text-left w-[${header.width}px]`}>
//                   {header.headerName}
//                 </TableHead>
//               ))}
//               {/* <TableHead>Status</TableHead>
//               <TableHead>Method</TableHead>
//               <TableHead className="text-right">Amount</TableHead> */}
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {rowData.map((row, index) => (
//               <TableRow id={row.itemId}>
//                 <TableCell className="font-medium">
//                   <Checkbox />
//                 </TableCell>
//                 <TableCell className="font-medium">{index + 1}</TableCell>
//                 {headers.map((header, index) => (
//                   <TableCell className="font-medium">{row[`${header.columnName}`]}</TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// };
// export default SearchableTable;
