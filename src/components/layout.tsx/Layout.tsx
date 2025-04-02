import { PropsWithChildren } from "react";
import { Header } from "../header/Header";

export function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
