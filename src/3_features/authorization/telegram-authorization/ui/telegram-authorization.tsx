import Telegram from "@shared/assets/icons/socials/telegram";
import { Button } from "@shared/ui/button";
import { FC } from "react";

export const TelegramAuthorization: FC = () => {
  return (
    <Button variant={"outline"} className="justify-between">
      <Telegram />
      Войти с Telegram <span className="not-sr-only" />
    </Button>
  );
};
