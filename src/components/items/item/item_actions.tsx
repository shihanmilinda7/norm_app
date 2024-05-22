"use server";

import { company_dbname } from "@/db";
const Database = require("better-sqlite3");

export const getMaterialItems = async (data: any) => {
  const db = new Database(company_dbname);
  db.pragma("journal_mode = WAL");
  const query = `SELECT * FROM materialitems WHERE itemCode LIKE '%${
    data?.itemCode ? data.itemCode : ""
  }%' AND itemName LIKE '%${data?.itemName ? data.itemName : ""}%' AND unit LIKE '%${data?.unit ? data.unit : ""}%';`;
  const rows = db.prepare(query).all();
  db.close();

  if (rows) {
    return Promise.resolve({
      success: true,
      msg: "",
      data: rows,
    });
  } else {
    return Promise.reject({ success: false, msg: "Data fetching fail" });
  }
};
// export const getMaterialItems = async (data: any) => {
//   const db = new Database(company_dbname);
//   db.pragma("journal_mode = WAL");
//   const query = `SELECT * FROM materialitems;`;
//   const rows = db.prepare(query).all();
//   db.close();

//   if (rows) {
//     return Promise.resolve({
//       success: true,
//       msg: "",
//       data: rows,
//     });
//   } else {
//     return Promise.reject({ success: false, msg: "Data fetching fail" });
//   }
// };
