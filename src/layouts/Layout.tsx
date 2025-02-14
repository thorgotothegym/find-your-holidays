import { ReactNode } from "react";

type Layout = {
  children: ReactNode;
};

export const Layout = ({ children }: Layout) => {
  return (
    <div className="relative flex min-h-svh flex-col bg-background">
      <button className="bg-blue-500 hover:bg-blue-700 text-white">
        halo alo alo
      </button>
      {/* Sidebar */}
      <aside className="w-60 bg-gray-800 p-4 text-white">
        <nav></nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
};
