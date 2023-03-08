import React, { ReactElement } from "react";
import { AdminLayout } from "../../../layouts";

type Props = {};

const index = (props: Props) => {
  return <div>index</div>;
};
index.getLayout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;
export default index;
