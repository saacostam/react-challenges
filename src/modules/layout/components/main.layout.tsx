import { PropsWithChildren } from "react";

export function MainLayout({ children }: PropsWithChildren) {
  return <main className="max-w-5xl mx-auto">{children}</main>;
}
