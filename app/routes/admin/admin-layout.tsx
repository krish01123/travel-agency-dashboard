import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      MobileSlidebar
      <aside className="w-full max-w-[270px] hidden lg:block">Slidebar</aside>
      <aside className="children">
        <Outlet />
      </aside>
    </div>
  );
};

export default AdminLayout;
