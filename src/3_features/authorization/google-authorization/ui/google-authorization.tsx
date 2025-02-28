import Google from "@shared/assets/icons/socials/google";
import { Button } from "@shared/ui/button";
import { FC } from "react";
import { toast } from "sonner";

export const GoogleAuthorization: FC = () => {
  const disabledAuthorization = () => {
    toast.error("Вход через Google скоро появится!", {
      description:
        "Следите за обновлениями. А сейчас используйте авторизацию по электронной почте.",
    });
  };

  return (
    <Button
      variant={"outline"}
      className="justify-between"
      onClick={disabledAuthorization}
    >
      <Google />
      Войти с Google <span className="not-sr-only" />
    </Button>
  );
};
