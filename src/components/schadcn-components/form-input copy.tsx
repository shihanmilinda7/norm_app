// import {
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "../ui/form";
// import { Input } from "../ui/input";

// export const ShadcnFormInputField = ({
//   field,
//   control,
//   label,
//   name,
//   placeholder = "",
//   description = "",
//   inputType = "text",
//   inputClassName = "",
// }: {
//   field: any;
//   control: any;
//   label: any;
//   name: any;
//   placeholder: any;
//   description: any;
//   inputType: any;
//   inputClassName?: string;
// }): any => {
//   //   const label = field.label;
//   //   const name = field.name;
//   //   const placeholder = field.placeholder;
//   //   const inputType = field.inputType;
//   return (
//     <FormField
//       control={control}
//       name={name}
//       render={({ field }) => (
//         <FormItem className="w-full">
//           <FormLabel>{label} </FormLabel>
//           <FormControl>
//             <Input
//               placeholder={placeholder}
//               type={inputType}
//               className={inputClassName}
//               {...field}
//             />
//           </FormControl>
//           <FormDescription>{description}</FormDescription>
//           <FormMessage />
//         </FormItem>
//       )}
//     />
//   );
// };
