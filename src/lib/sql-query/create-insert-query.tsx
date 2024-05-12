export const CreateInsertQuery = (mainSchema: any, data: any) => {
  const columnNames = [];
  const columnValues = [];
  let errorMsg = "";

  for (const key in mainSchema.fieldList) {
    if (mainSchema.fieldList[key].db && !mainSchema.fieldList[key].pk) {
      const defaultValue = mainSchema.fieldList[key].default;

      if (data[key] !== undefined && data[key] !== null) {
        columnNames.push(key);
        columnValues.push(data[key]);
      } else if (defaultValue !== undefined && defaultValue !== null) {
        columnNames.push(key);
        columnValues.push(defaultValue);
      } else {
        if (mainSchema.fields[key].null == false) {
          errorMsg += key + " is required;";
        }
      }
    }
  }

  const tableName = mainSchema.tableName;
  const insertStatementMain = `INSERT INTO ${tableName} (${columnNames.join(
    ", "
  )}) VALUES (${columnValues.map((value) => "?").join(", ")})`;

  return {
    insertStatementMain,
    dataValuesMain: columnValues,
    errorMsg,
  };
};
