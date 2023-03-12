export { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import { RootState } from "../../../redux/store";
import Link from "next/link";
import { Button, Modal, Pagination, PaginationProps, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import Swal from "sweetalert2";
// import Detail from "./Detail";
import { faEdit, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../../../redux/userSlice";
import { Tuser } from "../../../models/user";
type Props = {};
const ListUsers = (props: Props) => {
  const users = useSelector((state: RootState) => state.user.users);
  //   const [idDetail, setIdDetail] = useState();
  //   const [isModalOpen2, setIsModalOpen2] = useState(false);
  const dispatch = useDispatch<any>();
  //   const currenttt = useRef();
  //   console.log(currenttt.current, "sssssss");
  // //   const [current, setCurrent] = useState<any>(1);
  // //   const [total, setTotal] = useState(1);
  // //   const onChange: PaginationProps["onChange"] = (page) => {
  // //     console.log(page);
  // //     setCurrent(page);
  // //   };
  // //   setCurrent;
  useEffect(() => {
    // console.log("current", current);
    // dispatch(getBlogs(current));
    (async () => {
      await dispatch(getUsers());
      // //   currenttt.current = current;
      //   setTotal(a.payload.pagination.total);
      //   console.log(a.payload.pagination.total);
    })();
  }, [dispatch]);

  const handleRemove = (id: any) => {
    Swal.fire({
      title: "Bạn có chắc chắn muốn xóa không?",
      text: "Không thể hoàn tác sau khi xóa",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await dispatch(deleteUser(id)).unwrap();
        Swal.fire("Thành công!", "Xóa thành công.", "success");
      }
    });
  };
  const column: ColumnsType<Tuser> = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "ID",
      defaultSortOrder: "descend",
      width: "15%",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a:any, b:any) => a.Name.length - b.Name.length,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "Username",
    },

    {
      title: "action",
      dataIndex: "action",
      key: "action",
      render: ({}, { _id }) => (
        <div>
          <Link href={`/admin/users/${_id}/edit`}>
            <Button>
              <FontAwesomeIcon icon={faEdit} />{" "}
              <span className="mx-2">Edit</span>
            </Button>
          </Link>
          <Button danger onClick={() => handleRemove(_id)}>
            <FontAwesomeIcon icon={faDeleteLeft} />
            Delete
          </Button>
        </div>
      ),
    },
  ];

  //   const detailup = (id: any) => {
  //     setIsModalOpen2(true);
  //     setIdDetail(id);
  //   };
  //   const handleOk2 = () => {
  //     setIsModalOpen2(false);
  //   };
  //   const handleCancel2 = () => {
  //     setIsModalOpen2(false);
  //   };

  return (
    <div>
      <div style={{ marginBottom: 16, marginLeft: 16, marginTop: 16 }}>
        <Button className="bg-blue-600">
          <Link href={"users/add"}>{"Add user"}</Link>
          {/* Add */}
        </Button>
      </div>
      <div style={{ marginBottom: 16 }}>
        <Table
          columns={column}
          dataSource={users}
          rowKey="id"
          pagination={false}
        />
      </div>
      {/* <div style={{ marginBottom: 16, marginLeft: 16 }}>
          <Pagination current={current} onChange={onChange} total={total} />
        </div> */}
      {/* <Modal
          title="Detail "
          open={isModalOpen2}
          onOk={handleOk2}
          onCancel={handleCancel2}
          width={"74%"}
        >
          <Detail id={idDetail} />
        </Modal> */}
    </div>
  );
};

export default ListUsers;
