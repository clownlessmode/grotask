import Telegram from "@shared/assets/icons/socials/telegram";
import { Button } from "@shared/ui/button";
import { FC } from "react";
import { toast } from "sonner";

export const TelegramAuthorization: FC = () => {
  const disabledAuthorization = () => {
    toast.error("Вход через Telegram скоро появится!", {
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
      <Telegram />
      Войти с Telegram <span className="not-sr-only" />
    </Button>
  );
};
