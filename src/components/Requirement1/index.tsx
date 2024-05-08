import React from "react";
import { Image } from "antd";

const Requirement1: React.FC = () => (
  <div>
    <table >
      <tr>
        <td>
          <Image width={250} src={process.env.PUBLIC_URL + '/profile.jpg'} />
        </td>
        <td style={{ padding: "20px" }}>
          <p style={{ marginBottom: "10px" }}>MSSV: 2151150041</p>
          <p style={{ marginBottom: "10px" }}>Họ và tên: Nguyễn Quốc Huy</p>
          <p style={{ marginBottom: "10px" }}>Liên hệ: 0933309488</p>
          <p style={{ marginBottom: "10px" }}>Trường: Đại học giao thông vận tải TPHCM</p>
          <p style={{ marginBottom: "10px" }}>Khoa: Công nghệ thông tin</p>
          <p style={{ marginBottom: "10px" }}>Chuyên ngành: Công nghệ phần mềm</p>
        </td>
      </tr>
    </table>
  </div>
);

export default Requirement1;
