import { SidebarDemo } from "@/components/sidebar";

export default function UploadLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SidebarDemo>{children}</SidebarDemo>
    </div>
  );
}
