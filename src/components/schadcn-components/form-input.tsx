import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

export const ShadcnFormInputField = ({
  field,
  control,
  inputClassName = "",
}: {
  field: any;
  control: any;
  inputClassName?: string;
}): any => {
  const label = field.label;
  const name = field.name;
  const placeholder = field.placeholder;
  const inputType = field.inputType;
  const description = field.description;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>{label} </FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              type={inputType}
              className={inputClassName}
              {...field}
            />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
