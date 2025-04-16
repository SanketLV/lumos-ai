import Header from "@/components/Header";
import { DashboardSidebar } from "@/components/DashboardSidebar";

export default function UploadLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen overflow-hidden">
      {/* Ensure full height and no scrollbars */}
      <aside>
        <DashboardSidebar />
      </aside>
      <div className="flex-1 flex flex-col">
        <header>
          <Header />
        </header>
        <section className="flex-1 overflow-hidden">
          {/* Prevent scrollbars in the content area */}
          {children}
        </section>
      </div>
    </main>
  );
}
