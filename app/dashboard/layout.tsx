import SideNav from "@/app/dashboard/headNav/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
