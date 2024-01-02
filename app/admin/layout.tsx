import AdminNav from "../components/admin/AdminNav";

export const metadata = {
    title: "Talenta Admin",
    description: "Talenta Admin Dashboard",
};

const AdminLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <div>
            <AdminNav />
            {children}
        </div>
    )
};

export default AdminLayout;