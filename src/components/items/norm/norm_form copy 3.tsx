// "use client";

// import { ShadcnFormInputField } from "@/components/schadcn-components/form-input";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { ToastAction } from "@/components/ui/toast";
// import { useToast } from "@/components/ui/use-toast";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useFieldArray, useForm } from "react-hook-form";
// import { z } from "zod";
// import { insertNorm } from "./norm_actions";
// import { NormSchema } from "./norm-schema";
// import { GenerateZodSchema } from "@/lib/zod/generate-zod-schema";
// import { GenerateDefaults } from "@/lib/zod/generate-defaultvalues";
// import { CreateInsertQuery } from "@/lib/sql-query/create-insert-query";

// const formDef = GenerateZodSchema(NormSchema);
// const NormFormSchema = z.object(formDef);
// const defaultValues: any = GenerateDefaults(NormSchema);

// // const NormFormSchema = z.object({
// //   normId: z.coerce.number().optional(),
// //   normDescription: z.coerce.string(),
// //   qty: z.coerce.number().optional(),
// //   unit: z.coerce.string(),
// //   cart: z.array(z.object({ desc: z.string(), amount: z.string() })),
// // });

// const NormForm = () => {
//   const { toast } = useToast();

//   const form = useForm<z.infer<typeof NormFormSchema>>({
//     resolver: zodResolver(NormFormSchema),
//     defaultValues: { ...defaultValues },
//   });

//   const { fields, append, prepend, remove } = useFieldArray({
//     name: "materials",
//     control: form.control,
//   });

//   async function onSubmit(data: z.infer<typeof NormFormSchema>) {
//     // const sampleObj = {
//     //   normDescription: "new Val",
//     //   qty: 10,
//     //   unit: "m3",
//     //   cart: [
//     //     { desc: "erer", amount: "fgfg" },
//     //     { desc: "erer1", amount: "fgfg1" },
//     //   ],
//     // };
//     // form.reset(sampleObj);
//     // setValue("bridgespans", qty);

//     // const insertQuery = CreateInsertQuery(NormSchema, data);
//     // const insertResponse = await insertNorm(insertQuery);
//     // const query = `INSERT INTO norms (normDescription,qty,unit) VALUES ("test",1,2);`;
//     console.log("insertResponse", data);
//     toast({
//       variant: "destructive",
//       title: "Scheduled: Catch up ",
//       description: JSON.stringify(data),
      
//       action: (
//         <ToastAction className="" altText="Goto schedule to undo">
//           OK
//         </ToastAction>
//       ),
//     });
//   }

//   return (
//     <div>
//       <div>
//         <span className="text-2xl m-2">Norm Form</span>
//       </div>
//       <div className="w-full">
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="">
//             <div className="">
//               <div className="flex gap-2 ml-2 mr-2">
//                 <ShadcnFormInputField
//                   name="normId"
//                   field={NormSchema.fieldList.normId}
//                   control={form.control}
//                   inputClassName="border-indigo-800"
//                 />
//                 <ShadcnFormInputField
//                   name="normDescription"
//                   field={NormSchema.fieldList.normDescription}
//                   control={form.control}
//                   inputClassName="border-indigo-800"
//                 />
//                 <ShadcnFormInputField
//                   name="qty"
//                   field={NormSchema.fieldList.qty}
//                   control={form.control}
//                   inputClassName="border-indigo-800"
//                 />
//                 <ShadcnFormInputField
//                   name="unit"
//                   field={NormSchema.fieldList.unit}
//                   control={form.control}
//                   inputClassName="border-indigo-800"
//                 />
//               </div>
//               <Button className="absolute bottom-10 right-10 bg-indigo-700" type="submit">
//                 Submit
//               </Button>
//             </div>
//             <button
//               type="button"
//               className="block rounded-lg mx-auto bg-blue-300 hover:bg-blue-400 p-4"
//               onClick={() =>
//                 append({
//                   normMaterialDetailId: 0,
//                   normId: 0,
//                 })
//               }
//             >
//               Append
//             </button>
//             {fields.map((field, index) => {
//               return (
//                 <div className="flex h-16 items-center" key={field.id}>
//                   <div className="w-1/4 p-2 h-full flex justify-end items-start">
//                     <p className="text-center">Post ID:</p>
//                   </div>

//                   <div className="w-2/4 my-32 flex">
//                     <div className="hidden">
//                       <ShadcnFormInputField
//                         name={`materials.${index}.normMaterialDetailId`}
//                         field={
//                           NormSchema.fieldList.materials.subSchema.fieldList
//                             .normMaterialDetailId
//                         }
//                         control={form.control}
//                         inputClassName="border-indigo-800"
//                       />
//                       <ShadcnFormInputField
//                         name={`materials.${index}.normId`}
//                         field={
//                           NormSchema.fieldList.materials.subSchema.fieldList
//                             .normId
//                         }
//                         control={form.control}
//                         inputClassName="border-indigo-800"
//                       />
//                     </div>
//                     <ShadcnFormInputField
//                       name={`materials.${index}.itemName`}
//                       field={
//                         NormSchema.fieldList.materials.subSchema.fieldList
//                           .itemName
//                       }
//                       control={form.control}
//                       inputClassName="border-indigo-800"
//                     />
//                     <ShadcnFormInputField
//                       name={`materials.${index}.qty`}
//                       field={
//                         NormSchema.fieldList.materials.subSchema.fieldList.qty
//                       }
//                       control={form.control}
//                       inputClassName="border-indigo-800"
//                     />
//                     <ShadcnFormInputField
//                       name={`materials.${index}.unit`}
//                       field={
//                         NormSchema.fieldList.materials.subSchema.fieldList.unit
//                       }
//                       control={form.control}
//                       inputClassName="border-indigo-800"
//                     />
//                     {/* <FormField
//                       control={form.control}
//                       name={`cart.${index}.desc`}
//                       render={({ field }) => (
//                         <FormItem className="w-full">
//                           <FormLabel>hhhh</FormLabel>
//                           <FormControl>
//                             <Input {...field} />
//                           </FormControl>
//                           <FormDescription>No Desc</FormDescription>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     /> */}
//                     {/* <FormField
//                       control={form.control}
//                       name={`cart.${index}.amount`}
//                       render={({ field }) => (
//                         <FormItem className="w-full">
//                           <FormLabel>amount</FormLabel>
//                           <FormControl>
//                             <Input {...field} />
//                           </FormControl>
//                           <FormDescription>No Desc</FormDescription>
//                           <FormMessage />
//                         </FormItem>
//                       )}
//                     /> */}
//                   </div>

//                   <div className="w-1/4 h-full flex justify-start items-start">
//                     <button
//                       type="button"
//                       className="bg-blue-300 hover:bg-blue-400 rounded-lg p-2"
//                       onClick={() => remove(index)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// };
// export default NormForm;
