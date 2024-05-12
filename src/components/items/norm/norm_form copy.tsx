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

// const NormSchema = z.object({
//   normId: z.number(),
//   normDescription: z.string(),
//   qty: z.string(),
//   unit: z.string(),
// });

// const NormForm = () => {
//   const { toast } = useToast();

//   const form = useForm<z.infer<typeof NormSchema>>({
//     resolver: zodResolver(NormSchema),
//     defaultValues: {
//       normId: 0,
//       normDescription: "norm desc",
//       qty: "10",
//       unit: "m2",
//     },
//   });

//   async function onSubmit(data: z.infer<typeof NormSchema>) {
//     const query = `INSERT INTO norms (normDescription,qty,unit) VALUES ("test",1,2);`;
//     const inserResponse = await insertNorm(query);
//     console.log(inserResponse);
//     // toast({
//     //   title: "Scheduled: Catch up ",
//     //   description: JSON.stringify(data),
//     //   action: <ToastAction altText="Goto schedule to undo">OK</ToastAction>,
//     // });
//   }

//   return (
//     <div>
//       <div>Norm Form</div>
//       <div className="w-1/2">
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="">
//             <div className="m-1">
//               <ShadcnFormInputField
//                 field
//                 control={form.control}
//                 label="Description"
//                 name="normDescription"
//                 placeholder="Description"
//                 description=""
//                 inputType="text"
//                 inputClassName="border-indigo-800"
//               />
//               <ShadcnFormInputField
//                 field
//                 control={form.control}
//                 label="Qty"
//                 name="qty"
//                 placeholder="Qty"
//                 description=""
//                 inputType="text"
//                 inputClassName="border-indigo-800"
//               />
//               <ShadcnFormInputField
//                 field
//                 control={form.control}
//                 label="Unit"
//                 name="unit"
//                 placeholder="Unit"
//                 description=""
//                 inputType="text"
//                 inputClassName="border-indigo-800"
//               />
//               <Button type="submit">Submit</Button>
//               {/* <FormField
//               control={form.control}
//               name="normDescription"
//               render={({ field }) => (
//                   <FormItem>
//                   <FormLabel>Description</FormLabel>
//                   <FormControl>
//                   <Input placeholder="shadcn" {...field} />
//                   </FormControl>
//                   <FormDescription>
//                   This is your normDescription.
//                   </FormDescription>
//                   <FormMessage />
//                   </FormItem>
//                 )}
//             /> */}
//             </div>
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// };
// export default NormForm;
