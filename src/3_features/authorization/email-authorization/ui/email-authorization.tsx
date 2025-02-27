import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@shared/ui/form";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@shared/ui/input";
import { Button } from "@shared/ui/button";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
export const EmailAuthorization: FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Электронная почта</FormLabel>
            <FormControl>
              <Input type="email" placeholder="Электронная почта" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Пароль</FormLabel>
            <FormControl>
              <Input type="password" placeholder="Пароль" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <Button>Продолжить</Button>
    </Form>
  );
};
