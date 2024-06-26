"use server";

import { company_db } from "@/db";

// import Database from "better-sqlite3";
// const Database = require("better-sqlite3");

export const insertNorm = async (data: any) => {
  // const db = new Database("norm.db");
  // console.log("stmt", data.columnValues);
  company_db.pragma("journal_mode = WAL");
  const stmt = company_db.prepare(data.insertStatementMain);
  const info = stmt.run(data.dataValuesMain);
  company_db.close();

  if (info.changes == 1) {
    return Promise.resolve({
      success: true,
      msg: "",
      lastInsertRowid: info.lastInsertRowid,
    });
  } else {
    return Promise.reject({ success: false, msg: "Insert failed" });
  }
  //  // return info;
};
