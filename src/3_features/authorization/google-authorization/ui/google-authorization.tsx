import Google from "@shared/assets/icons/socials/google";
import { Button } from "@shared/ui/button";
import { FC } from "react";

export const GoogleAuthorization: FC = () => {
  return (
    <Button variant={"outline"} className="justify-between">
      <Google />
      Войти с Google <span className="not-sr-only" />
    </Button>
  );
};
