export const GenerateDefaults = (mainSchema: any): any => {
  const keys: string[] = Object.keys(mainSchema.fieldList);
  const result: any = {};
  keys.forEach((key: string) => {
    const prop: any = mainSchema.fieldList[key];
    if (prop.default != undefined) {
      result[key] = prop.default;
    }
  });
  return result;
};
