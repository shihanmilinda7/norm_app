"use client";

import { ShadcnFormInputField } from "@/components/schadcn-components/form-input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { insertNorm } from "./norm_actions";
import { NormSchema } from "./norm-schema";
import { GenerateZodSchema } from "@/lib/zod/generate-zod-schema";
import { GenerateDefaults } from "@/lib/zod/generate-defaultvalues";
import { CreateInsertQuery } from "@/lib/sql-query/create-insert-query";
import { FcAddRow } from "react-icons/fc";
import { CiSquareRemove } from "react-icons/ci";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ShadcnTableInputField } from "@/components/schadcn-components/table-input";
import SearchableTable from "@/components/searchable-table/searchable-table";
import { useEffect, useState } from "react";
import { getMaterialItems } from "../item/item_actions";
import MaterialDrawer from "../item/material_drawer";

const formDef = GenerateZodSchema(NormSchema);
const NormFormSchema = z.object(formDef);
const defaultValues: any = GenerateDefaults(NormSchema);

// const NormFormSchema = z.object({
//   normId: z.coerce.number().optional(),
//   normDescription: z.coerce.string(),
//   qty: z.coerce.number().optional(),
//   unit: z.coerce.string(),
//   cart: z.array(z.object({ desc: z.string(), amount: z.string() })),
// });

const NormForm = () => {
  const { toast } = useToast();

  // const [materialItems, setMaterialItems] = useState<any[]>([]);
  // const [searchTerms, setSearchTerms] = useState<any>();

  // const materialItemTableHeaders = [
  //   // { columnName: "", headerName: "#", width: "100" },
  //   { columnName: "itemCode", headerName: "Item Code", width: "120" },
  //   { columnName: "itemName", headerName: "Item Name", width: "200" },
  //   { columnName: "unit", headerName: "Unit", width: "100" },
  // ];

  const form = useForm<z.infer<typeof NormFormSchema>>({
    resolver: zodResolver(NormFormSchema),
    defaultValues: { ...defaultValues },
  });

  const { fields, append, prepend, remove } = useFieldArray({
    name: "materials",
    control: form.control,
  });

  // const fetchMaterialItems = async (terms: any) => {
  //   const result: any = await getMaterialItems(terms);
  //   setMaterialItems(result.data);
  // };

  // useEffect(() => {
  //   fetchMaterialItems(searchTerms);
  // }, [searchTerms]);

  // const setSearchTermsValues = (data: any) => {
  //   setSearchTerms(data);
  // };

  async function onSubmit(data: z.infer<typeof NormFormSchema>) {
    // const sampleObj = {
    //   normDescription: "new Val",
    //   qty: 10,
    //   unit: "m3",
    //   cart: [
    //     { desc: "erer", amount: "fgfg" },
    //     { desc: "erer1", amount: "fgfg1" },
    //   ],
    // };
    // form.reset(sampleObj);
    // setValue("bridgespans", qty);

    // const insertQuery = CreateInsertQuery(NormSchema, data);
    // const insertResponse = await insertNorm(insertQuery);
    // const query = `INSERT INTO norms (normDescription,qty,unit) VALUES ("test",1,2);`;
    console.log("insertResponse", data);
    toast({
      variant: "destructive",
      title: "Scheduled: Catch up ",
      description: JSON.stringify(data),

      action: (
        <ToastAction className="" altText="Goto schedule to undo">
          OK
        </ToastAction>
      ),
    });
  }

  return (
    <div>
      <div>
        <span className="text-2xl m-2">
          Norm Form
          {/* {JSON.stringify(searchTerms)} */}
        </span>
        {/* <MaterialDrawer /> */}
        {/* <SearchableTable
          headers={materialItemTableHeaders}
          rowDataIn={materialItems}
          setSearchTermsIn={setSearchTerms}
        /> */}
      </div>
      <div className="w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <div className="">
              <div className="flex gap-2 ml-2 mr-2">
                <ShadcnFormInputField
                  name="normId"
                  field={NormSchema.fieldList.normId}
                  control={form.control}
                  inputClassName="border-indigo-800"
                />
                <ShadcnFormInputField
                  name="normDescription"
                  field={NormSchema.fieldList.normDescription}
                  control={form.control}
                  inputClassName="border-indigo-800"
                />
                <ShadcnFormInputField
                  name="qty"
                  field={NormSchema.fieldList.qty}
                  control={form.control}
                  inputClassName="border-indigo-800"
                />
                <ShadcnFormInputField
                  name="unit"
                  field={NormSchema.fieldList.unit}
                  control={form.control}
                  inputClassName="border-indigo-800"
                />
              </div>
              <div>
                <div>
                  <div className="flex">
                    <span className="text-xl m-2 border-b-2 border-indigo-600">
                      Materials
                    </span>
                    <MaterialDrawer />
                    {/* <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger
                          type="button"
                          onClick={() =>
                            append({
                              normMaterialDetailId: 0,
                              normId: 0,
                            })
                          }
                        >
                          <Badge className="">
                            <FcAddRow className="h-8 w-8" />
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Add to material</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider> */}
                  </div>
                  <div className="mx-4">
                    <Table>
                      <TableCaption>A list of your materials.</TableCaption>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px] text-left">
                            #
                          </TableHead>
                          <TableHead className="text-left">Item</TableHead>
                          <TableHead className="text-left">Unit</TableHead>
                          <TableHead className="text-left">Qty</TableHead>
                          <TableHead className="w-[100px] text-left">
                            #
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {fields.map((field, index) => {
                          return (
                            <TableRow key={field.id} className="py-0">
                              <div className="hidden">
                                <ShadcnFormInputField
                                  name={`materials.${index}.normMaterialDetailId`}
                                  field={
                                    NormSchema.fieldList.materials.subSchema
                                      .fieldList.normMaterialDetailId
                                  }
                                  control={form.control}
                                  inputClassName="border-indigo-800"
                                />
                                <ShadcnFormInputField
                                  name={`materials.${index}.normId`}
                                  field={
                                    NormSchema.fieldList.materials.subSchema
                                      .fieldList.normId
                                  }
                                  control={form.control}
                                  inputClassName="border-indigo-800"
                                />
                              </div>
                              <TableCell className="font-medium">
                                <span className="border-gray-300 rounded-none">
                                  {index + 1}
                                </span>
                              </TableCell>
                              <TableCell className="font-medium px-0 py-0">
                                <ShadcnTableInputField
                                  name={`materials.${index}.itemName`}
                                  field={
                                    NormSchema.fieldList.materials.subSchema
                                      .fieldList.itemName
                                  }
                                  control={form.control}
                                  inputClassName="border-gray-300 rounded-none"
                                />
                              </TableCell>
                              <TableCell className="font-medium px-0 py-0">
                                <ShadcnTableInputField
                                  name={`materials.${index}.unit`}
                                  field={
                                    NormSchema.fieldList.materials.subSchema
                                      .fieldList.unit
                                  }
                                  control={form.control}
                                  inputClassName="border-gray-300 rounded-none"
                                />
                              </TableCell>
                              <TableCell className="font-medium px-0 py-0">
                                <ShadcnTableInputField
                                  name={`materials.${index}.qty`}
                                  field={
                                    NormSchema.fieldList.materials.subSchema
                                      .fieldList.qty
                                  }
                                  control={form.control}
                                  inputClassName="border-gray-300 rounded-none"
                                />
                              </TableCell>
                              <TableCell className="font-medium py-0">
                                <Badge
                                  variant="destructive"
                                  className=""
                                  onClick={() => remove(index)}
                                >
                                  <CiSquareRemove className="h-8 w-8" />
                                </Badge>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
              <Button
                className="absolute bottom-10 right-10 bg-indigo-700"
                type="submit"
              >
                Submit
              </Button>
            </div>
            {/* <button
              type="button"
              className="block rounded-lg mx-auto bg-blue-300 hover:bg-blue-400 p-4"
              onClick={() =>
                append({
                  normMaterialDetailId: 0,
                  normId: 0,
                })
              }
            >
              Append
            </button> */}
          </form>
        </Form>
      </div>
    </div>
  );
};
export default NormForm;

{
  /* <div className="w-1/4 h-full flex justify-start items-start">
<button
  type="button"
  className="bg-blue-300 hover:bg-blue-400 rounded-lg p-2"
  onClick={() => remove(index)}
>
  Delete
</button>
</div> */
}
