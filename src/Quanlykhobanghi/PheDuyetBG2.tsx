import React, { useState } from "react";
import "../cssne/khobangi.css";
import TuChoi from "./Modal/TuChoi";
import PagePaginist from "../BackGround/PagePaginist";

interface DSNhac {
  id: number;
  tenbg: string;
  theloai: string;
  dinhdang: string;
  thoiluong: string;
  casi: string;
  tacgia: string;
  maisrc: string;
  sohopdong: string;
  ngaytai: string;
  isChecked: boolean;
}
const PheDuyetBG1: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Xử lý logic tìm kiếm
    console.log("Search term:", searchTerm);
  };
  const [danhsachs, setdanhsachs] = useState<DSNhac[]>([
    {
      id: 1,
      tenbg: "Gorgeous Wooden Bike",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Phan Mạnh Quỳnh",
      tacgia: "Phan Mạnh Quỳnh",
      maisrc: "KRA40105463",
      sohopdong: "HD395738503",
      ngaytai: "12/05/2021  16:46:12",
      isChecked: false,
    },
    {
      id: 2,
      tenbg: "Gorgeous Wooden Bike",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Phan Mạnh Quỳnh",
      tacgia: "Phan Mạnh Quỳnh",
      maisrc: "KRA40105463",
      sohopdong: "HD395738503",
      ngaytai: "12/05/2021  16:46:12",
      isChecked: false,
    },
    {
      id: 3,
      tenbg: "Gorgeous Wooden Bike",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Phan Mạnh Quỳnh",
      tacgia: "Phan Mạnh Quỳnh",
      maisrc: "KRA40105463",
      sohopdong: "HD395738503",
      ngaytai: "12/05/2021  16:46:12",
      isChecked: false,
    },
    {
      id: 4,
      tenbg: "Gorgeous Wooden Bike",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Phan Mạnh Quỳnh",
      tacgia: "Phan Mạnh Quỳnh",
      maisrc: "KRA40105463",
      sohopdong: "HD395738503",
      ngaytai: "12/05/2021  16:46:12",
      isChecked: false,
    },
    {
      id: 5,
      tenbg: "Gorgeous Wooden Bike",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Phan Mạnh Quỳnh",
      tacgia: "Phan Mạnh Quỳnh",
      maisrc: "KRA40105463",
      sohopdong: "HD395738503",
      ngaytai: "12/05/2021  16:46:12",
      isChecked: false,
    },
    {
      id: 6,
      tenbg: "Gorgeous Wooden Bike",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Phan Mạnh Quỳnh",
      tacgia: "Phan Mạnh Quỳnh",
      maisrc: "KRA40105463",
      sohopdong: "HD395738503",
      ngaytai: "12/05/2021  16:46:12",
      isChecked: false,
    },
    {
      id: 7,
      tenbg: "Gorgeous Wooden Bike",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Phan Mạnh Quỳnh",
      tacgia: "Phan Mạnh Quỳnh",
      maisrc: "KRA40105463",
      sohopdong: "HD395738503",
      ngaytai: "12/05/2021  16:46:12",
      isChecked: false,
    },
    {
      id: 8,
      tenbg: "Gorgeous Wooden Bike",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Phan Mạnh Quỳnh",
      tacgia: "Phan Mạnh Quỳnh",
      maisrc: "KRA40105463",
      sohopdong: "HD395738503",
      ngaytai: "12/05/2021  16:46:12",
      isChecked: false,
    },
    {
      id: 9,
      tenbg: "Gorgeous Wooden Bike",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Phan Mạnh Quỳnh",
      tacgia: "Phan Mạnh Quỳnh",
      maisrc: "KRA40105463",
      sohopdong: "HD395738503",
      ngaytai: "12/05/2021  16:46:12",
      isChecked: false,
    },
    {
      id: 10,
      tenbg: "Gorgeous Wooden Bike",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Phan Mạnh Quỳnh",
      tacgia: "Phan Mạnh Quỳnh",
      maisrc: "KRA40105463",
      sohopdong: "HD395738503",
      ngaytai: "12/05/2021  16:46:12",
      isChecked: false,
    },
    {
      id: 11,
      tenbg: "Gorgeous Wooden Bike",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Phan Mạnh Quỳnh",
      tacgia: "Phan Mạnh Quỳnh",
      maisrc: "KRA40105463",
      sohopdong: "HD395738503",
      ngaytai: "12/05/2021  16:46:12",
      isChecked: false,
    },
    {
      id: 12,
      tenbg: "Gorgeous Wooden Bike",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Phan Mạnh Quỳnh",
      tacgia: "Phan Mạnh Quỳnh",
      maisrc: "KRA40105463",
      sohopdong: "HD395738503",
      ngaytai: "12/05/2021  16:46:12",
      isChecked: false,
    },
  ]);
  const handleCheckAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    const updatedDanhsach = danhsachs.map((danhsach) => ({
      ...danhsach,
      isChecked: checked,
    }));
    setdanhsachs(updatedDanhsach);
  };
  const handleCheckSingle = (id: number) => {
    const updatedDanhsach = danhsachs.map((danhsach) => {
      if (danhsach.id === id) {
        return {
          ...danhsach,
          isChecked: !danhsach.isChecked,
        };
      }
      return danhsach;
    });
    setdanhsachs(updatedDanhsach);
  };

  return (
    <>
      <div className="ttcb4">Kho bản ghi</div>
      <form onSubmit={handleFormSubmit} className="timkiem4">
        <input
          type="text"
          placeholder="Tên bản ghi, ca sĩ,..."
          value={searchTerm}
          onChange={handleInputChange}
          className="input4"
        />
        <a href="/#" type="submit" style={{ background: "#2B2B3F" }}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/Search.png?alt=media&token=fa67623b-8b52-48ae-8e06-11debd3f5d01"
            alt=""
          />
        </a>
      </form>
      {/* danh sach dropdown */}
      <div
        className="textt4"
        style={{
          width: "68px",
          top: "238px",
          left: "229px",
        }}
      >
        Thể loại:
      </div>
      <select
        className="select4"
        style={{
          width: "131px",
          top: "230px",
          left: "313px",
        }}
      >
        <option value="all">Tất cả</option>
        <option value="performer">Pop</option>
        <option value="manufacturer">EDM</option>
        <option value="manufacturer">Ballad</option>
      </select>
      <div
        className="textt4"
        style={{
          width: "91px",
          top: "238px",
          left: "508px",
        }}
      >
        Định dạng:
      </div>
      <select
        className="select4"
        style={{
          width: "131px",
          top: "230px",
          left: "615px",
        }}
      >
        <option value="all">Tất cả</option>
        <option value="performer">Âm thanh</option>
        <option value="manufacturer">Video</option>
      </select>

      {/* danh sach dropdown */}

      {/* icon menu */}
      <div
        className="textt4"
        style={{
          top: "238px",
          left: "1690px",
        }}
      >
        <a href="/pheduyetbg1">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/List.png?alt=media&token=e4bfde7d-d6a7-4b37-b1c9-002c643fdc4d"
            className="icon4"
            alt=""
          />
        </a>
      </div>

      <div
        className="textt4"
        style={{
          top: "238px",
          left: "1738px",
        }}
      >
        <a href="/pheduyetbg">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/tab.png?alt=media&token=19348d31-a86d-43ca-9283-965e581eee9f"
            className="icon4"
            alt=""
          />
        </a>
      </div>
      {/* icon menu */}

      <div className="khungt" style={{ height: 224 }}>
        <div className="khugne">
          <a href="/suatt" style={{ textDecoration: "none" }}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/ok.png?alt=media&token=a9394f4f-75c0-457d-a833-2bc357596b74"
              alt="sua"
              className="icon1"
            />
            <div className="texttt">Phê duyệt</div>
          </a>
        </div>
        <div className="khugne">
          <a
            href="/#"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{ textDecoration: "none" }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/huy2.png?alt=media&token=d683aa76-b6d8-4f7e-aa42-d037a28ba850"
              alt="sua"
              className="icon1"
            />
            <div className="texttt">Từ chối</div>
          </a>
        </div>
      </div>
      <div
        style={{
          width: 1541,
          height: "fit-content",
          position: "absolute",
          top: 294,
          left: 229,
          padding: "16px 24px",
          borderRadius: 16,
          gap: 56,
          backgroundColor: "#2F2F41B2",
        }}
      >
        <table
          style={{
            width: "1485px",
            height: "fit-content",
          }}
        >
          <thead>
            <tr style={{ textAlign: "left", height: 48, color: "#FFAC69" }}>
              <th style={{ width: "51px" }}>
                <input
                  type="checkbox"
                  onChange={handleCheckAll}
                  style={{
                    width: "24px",
                    height: "24px",
                    border: "1px solid #347AFF",
                  }}
                />
              </th>
              <th style={{ width: "94" }}>stt</th>
              <th style={{ width: "292" }}>Tên bản ghi</th>
              <th style={{ width: "200" }}>Ca sĩ</th>
              <th style={{ width: "195" }}>Tác giả</th>
              <th style={{ width: "183" }}>Mã ISRC</th>
              <th style={{ width: "185" }}>Số hợp đồng</th>
              <th style={{ width: "199" }}>Ngày tải</th>
              <th style={{ width: "94" }}></th>
            </tr>
          </thead>
          <tbody>
            {danhsachs.map((danhsach) => (
              <tr
                style={{
                  color: "#FFFFFF",
                  marginBottom: "1px",
                  borderBottom: "1px solid #727288",
                }}
              >
                <td>
                  <input
                    type="checkbox"
                    checked={danhsach.isChecked}
                    onChange={() => handleCheckSingle(danhsach.id)}
                    style={{
                      width: "24px",
                      height: "24px",
                      border: "1px solid #347AFF",
                    }}
                  />
                </td>
                <td>{danhsach.id}</td>
                <td>
                  {danhsach.tenbg} <br />
                  <span
                    style={{
                      opacity: "70%",
                    }}
                  >
                    {danhsach.theloai}
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        backgroundColor: "#347AFF",
                        borderRadius: "50%",
                        display: "inline-block",
                        margin: "3px 3px 3px 3px",
                      }}
                    ></div>
                    {danhsach.dinhdang}
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        backgroundColor: "#347AFF",
                        borderRadius: "50%",
                        display: "inline-block",
                        margin: "3px 3px 3px 3px",
                      }}
                    ></div>
                    {danhsach.thoiluong}
                  </span>
                </td>

                <td>{danhsach.casi}</td>
                <td>{danhsach.tacgia}</td>
                <td>{danhsach.maisrc}</td>

                <td>{danhsach.sohopdong}</td>
                <td>12/05/2021 16:46:12</td>
                <td>
                  <a href="/#" style={{ color: "#FF7506" }}>
                    Nghe
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <PagePaginist anhto={12} />
      </div>
      {/* showModal */}
      <TuChoi />
    </>
  );
};
export default PheDuyetBG1;
