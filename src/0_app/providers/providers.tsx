import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "./theme-provider";
import { Toaster, ToasterProps } from "sonner";

const toasterConfig: ToasterProps = {
  position: "top-center",
};

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <Toaster {...toasterConfig} />
      {children}
    </ThemeProvider>
  );
};

export default Providers;
