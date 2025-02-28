import { FC } from "react";
import { ThemeSwitcher } from "@features/theme-switcher/theme-switcher";
import Logotype from "@shared/ui/logotype";
import { Separator } from "@shared/ui/separator";
import { GoogleAuthorization } from "@features/authorization/google-authorization";
import { TelegramAuthorization } from "@features/authorization/telegram-authorization/ui/telegram-authorization";
import { EmailAuthorization } from "@features/authorization/email-authorization";
import { Link } from "react-router";
export const Authorization: FC = () => {
  return (
    <div className="flex flex-col justify-between px-7 py-8 h-screen gap-6 items-center w-full">
      <div className="flex justify-between items-center w-full">
        <Link to={"/"}>
          <Logotype />
        </Link>
        <ThemeSwitcher />
      </div>
      <div className="flex flex-col gap-7 max-w-xs w-full">
        <header className="flex flex-col gap-1 tracking-tight font-semibold text-2xl leading-none">
          <h1 className="text-accent">Ставь. Реализуй</h1>
          <h1 className="text-muted-foreground">Создай свой Grotask</h1>
        </header>
        <div className="flex flex-col gap-2">
          <GoogleAuthorization />
          <TelegramAuthorization />
          <Separator className="my-2 opacity-70" />
          <EmailAuthorization />
        </div>
      </div>
      <div className="not-sr-only" />
    </div>
  );
};
