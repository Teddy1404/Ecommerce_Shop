import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import { useAuth } from "../../context/auth";
const AdminDash = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      design this code more beautiful{" "}
      <div className=" md:flex ">
        <div
          className="sm:w-[50%] m-10 bg-black text-white
        "
        >
          <AdminMenu />
        </div>
        <div className="sm:w-1/2 p-2 m-10 ">
          <h3> Admin Name : {auth?.user?.name}</h3>
          <h3> Admin Email : {auth?.user?.email}</h3>
          <h3> Admin Contact : {auth?.user?.phone}</h3>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDash;
