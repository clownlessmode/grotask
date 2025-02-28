import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@shared/ui/form";
import { FC } from "react";
import { Input } from "@shared/ui/input";
import { Button } from "@shared/ui/button";
import useForm from "../model/hook";
import { preventSpaces } from "@shared/lib/prevent-spaces";
import { FormValues } from "../model/types";

export const EmailAuthorization: FC = () => {
  const form = useForm();
  const handleSubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-2"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Электронная почта</FormLabel>
              <FormControl>
                <Input
                  id={field.name}
                  type="email"
                  placeholder="Электронная почта"
                  onKeyDown={preventSpaces}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Пароль</FormLabel>
              <FormControl>
                <Input
                  id={field.name}
                  type="password"
                  placeholder="Пароль"
                  onKeyDown={preventSpaces}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button disabled={!form.formState.isValid}>Продолжить</Button>
        <FormMessage />
      </form>
    </Form>
  );
};
