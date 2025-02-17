import { ReactNode } from "react";

type Layout = {
  children: ReactNode;
};

export const Layout = ({ children }: Layout) => {
  return (
    <div className="relative flex min-h-svh flex-col bg-current text-foreground">
      {/* Sidebar */}
      <aside className="w-60 p-4 text-white">
        <nav></nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
};
