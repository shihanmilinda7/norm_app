import { z } from "zod";

export const GenerateZodSchema = (mainSchema: any) => {
  const keys: string[] = Object.keys(mainSchema.fieldList);
  const result: any = {};

  keys.forEach((key: string) => {
    const prop: any = mainSchema.fieldList[key];

    switch (prop.dataType) {
      case "NUMBER":
        const c1 = getNumberType(prop);
        if (c1) result[prop.columnName] = c1;
        break;
      case "STRING":
        const c2 = getStringType(prop);
        if (c2) result[prop.columnName] = c2;
        break;
      case "ARRAY":
        const c3 = getArrayType(prop);
        if (c3) result[prop.columnName] = c3;
        break;
      default:
        console.log("error in generatezodformschema", prop.dataType);
        break;
    }
  });

  return result;
};
// cart: z.array(z.object({ desc: z.string(), amount: z.string() })),
const getArrayType = (prop: any): any => {
  const subFormDef = GenerateZodSchema(prop.subSchema);
  return z.array(z.object(subFormDef));
  // console.log("subFormDef", subFormDef);
};

const getNumberType = (prop: any): any => {
  if (!prop.form) return;
  let validatorFn = (val: any): boolean => {
    return true;
  };
  let validatorMessage: { message: string } = { message: "" };
  if (prop.required) {
    validatorFn = (val: any) => {
      return !isNaN(val);
    };
    validatorMessage = { message: "required" };

    return z.coerce.number().optional().refine(validatorFn, validatorMessage);
  } else {
    return z.coerce.number().optional();
  }
};

const getStringType = (prop: any): any => {
  if (!prop.form) return;
  let validatorFn = (val: any): boolean => {
    return true;
  };
  let validatorMessage: { message: string } = { message: "" };
  if (prop.required) {
    validatorFn = (val: any) => val.length > 0;
    validatorMessage = { message: "required" };
    return z.coerce.string().refine(validatorFn, validatorMessage);
  } else {
    return z.coerce.string();
  }
};
