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
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { insertNorm } from "./norm_actions";
// import { NormSchema } from "./norm-schema";
// import { GenerateZodSchema } from "@/lib/zod/generate-zod-schema";
// import { GenerateDefaults } from "@/lib/zod/generate-defaultvalues";
// import { CreateInsertQuery } from "@/lib/sql-query/create-insert-query";

// const formDef = GenerateZodSchema(NormSchema);
// const NormFormSchema = z.object(formDef);
// const defaultValues = GenerateDefaults(NormSchema);
// // const NormFormSchema = z.object({
// //   normId: z.number(),
// //   normDescription: z.string(),
// //   qty: z.string(),
// //   unit: z.string(),
// // });

// const NormForm = () => {
//   const { toast } = useToast();

//   const form = useForm<z.infer<typeof NormFormSchema>>({
//     resolver: zodResolver(NormFormSchema),
//     defaultValues: { ...defaultValues },
//   });

//   async function onSubmit(data: z.infer<typeof NormFormSchema>) {
//     const insertQuery = CreateInsertQuery(NormSchema, data);
//     const insertResponse = await insertNorm(insertQuery);
//     // const query = `INSERT INTO norms (normDescription,qty,unit) VALUES ("test",1,2);`;
//     console.log("insertResponse", insertResponse);
//     toast({
//       title: "Scheduled: Catch up ",
//       description: JSON.stringify(data),
//       action: <ToastAction altText="Goto schedule to undo">OK</ToastAction>,
//     });
//   }

//   return (
//     <div>
//       <div>Norm Form</div>
//       <div className="w-1/2">
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="">
//             <div className="m-1">
//               <ShadcnFormInputField
//                 field={NormSchema.fieldList.normDescription}
//                 control={form.control}
//                 inputClassName="border-indigo-800"
//               />
//               <ShadcnFormInputField
//                 field={NormSchema.fieldList.qty}
//                 control={form.control}
//                 inputClassName="border-indigo-800"
//               />
//               <ShadcnFormInputField
//                 field={NormSchema.fieldList.unit}
//                 control={form.control}
//                 inputClassName="border-indigo-800"
//               />
//               <Button type="submit">Submit</Button>
//             </div>
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// };
// export default NormForm;
