import React, { ReactElement, useEffect } from "react";
import { AdminLayout } from "../../layouts";
type Props = {};

const Dashboard = (props: Props) => {
  return <div className="mt-[200px] ml-[400px]">Dashboard</div>;
};
Dashboard.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;
export default Dashboard;
