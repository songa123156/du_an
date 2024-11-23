import React, { useState } from "react";
import "../cssne/khobangi.css";
import PagePaginist from "../BackGround/PagePaginist";
import TuChoi from "./Modal/TuChoi";

interface DSNhac {
  id: number;
  hinh: string;
  title: string;
  casi: string;
  sangtac: string;
  sohopdong: string;
  isChecked: boolean;
}
const PheDuyetBG: React.FC = () => {
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
      hinh: "https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/hoa.png?alt=media&token=93a11fd5-06ab-47b2-ba99-4ec74f1877f8",
      title: "Handcrafted Fresh Bacon Multy",
      casi: "Ca sĩ: Bella Poarch",
      sangtac: "Sáng tác: Leilani Zulauf",
      sohopdong: "Số hợp đồng: HD395738503",
      isChecked: false,
    },
    {
      id: 2,
      hinh: "https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/hoa1.png?alt=media&token=0274095c-873a-436f-b179-f4ae77153150",
      title: "Handcrafted Fresh Bacon Multy",
      casi: "Ca sĩ: Bella Poarch",
      sangtac: "Sáng tác: Leilani Zulauf",
      sohopdong: "Số hợp đồng: HD395738503",
      isChecked: false,
    },
    {
      id: 3,
      hinh: "https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/hoa2.png?alt=media&token=9b63b01a-a9d5-4314-a59c-ca0887910211",
      title: "Handcrafted Fresh Bacon Multy",
      casi: "Ca sĩ: Bella Poarch",
      sangtac: "Sáng tác: Leilani Zulauf",
      sohopdong: "Số hợp đồng: HD395738503",
      isChecked: false,
    },
    {
      id: 4,
      hinh: "https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/hoa3.png?alt=media&token=cb15324d-9d32-4be7-b620-05592e6fbdf3",
      title: "Handcrafted Fresh Bacon Multy",
      casi: "Ca sĩ: Bella Poarch",
      sangtac: "Sáng tác: Leilani Zulauf",
      sohopdong: "Số hợp đồng: HD395738503",
      isChecked: false,
    },
    {
      id: 5,
      hinh: "https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/hoa4.png?alt=media&token=fe22ce03-f4fb-4880-8d2c-d6e8c665294a",
      title: "Handcrafted Fresh Bacon Multy",
      casi: "Ca sĩ: Bella Poarch",
      sangtac: "Sáng tác: Leilani Zulauf",
      sohopdong: "Số hợp đồng: HD395738503",
      isChecked: false,
    },
    {
      id: 6,
      hinh: "https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/hoa5.png?alt=media&token=87b32890-5ab2-4259-b137-4a4d7c2a2cc8",
      title: "Handcrafted Fresh Bacon Multy",
      casi: "Ca sĩ: Bella Poarch",
      sangtac: "Sáng tác: Leilani Zulauf",
      sohopdong: "Số hợp đồng: HD395738503",
      isChecked: false,
    },
    {
      id: 7,
      hinh: "https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/hoa6.png?alt=media&token=d83fb0b4-221a-48aa-84df-3197104c8bdc",
      title: "Handcrafted Fresh Bacon Multy",
      casi: "Ca sĩ: Bella Poarch",
      sangtac: "Sáng tác: Leilani Zulauf",
      sohopdong: "Số hợp đồng: HD395738503",
      isChecked: false,
    },
    {
      id: 8,
      hinh: "https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/hoa7.png?alt=media&token=eac95274-1b2c-4413-9d0a-ffefa69ab958",
      title: "Handcrafted Fresh Bacon Multy",
      casi: "Ca sĩ: Bella Poarch",
      sangtac: "Sáng tác: Leilani Zulauf",
      sohopdong: "Số hợp đồng: HD395738503",
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
      <div
        style={{
          width: "139px",
          height: "24px",
          top: "240px",
          left: "770px",
          gap: "4px",
          position: "absolute",
          color: "white",
        }}
      >
        <div
          style={{
            border: "1px solid #347AFF",
            width: 24,
            height: 24,
          }}
        >
          <input
            type="checkbox"
            onChange={handleCheckAll}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
          <span
            style={{ marginBottom: 4, position: "absolute", marginLeft: 2 }}
          >
            Chọn tất cả
          </span>
        </div>
      </div>
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
          width: 1540,
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
        <div
          className="row"
          style={{
            justifyContent: "space-between",
          }}
        >
          {danhsachs.map((danhsach) => (
            <div className="formtong4 col" key={danhsach.id}>
              <img src={danhsach.hinh} alt="" className="hinhanh4" />
              <div style={{ width: 342, height: 156 }}>
                <div className="text4">
                  <div className="tieude4">{danhsach.title}</div>
                  <div className="noidung4">{danhsach.casi}</div>
                  <div className="noidung4">{danhsach.sangtac}</div>
                  <div className="noidung4">{danhsach.sohopdong}</div>
                  <div className="khungngoai4">
                    <div className="khungtrong4">
                      <div className="theloai4">Thể loại</div>
                      <div className="loai4">Pop</div>
                    </div>
                    <div className="khungtrong4" style={{ width: 68 }}>
                      <div className="theloai4" style={{ width: 45 }}>
                        Định dạng
                      </div>
                      <div className="loai4">Audio</div>
                    </div>
                    <div className="khungtrong4" style={{ width: 68 }}>
                      <div className="theloai4" style={{ width: 45 }}>
                        Thời lượng
                      </div>
                      <div className="loai4">03:00</div>
                    </div>
                  </div>
                  <div
                    className="sua4"
                    style={{
                      width: "24px",
                      height: "24px",
                      border: "1px solid #347AFF",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={danhsach.isChecked}
                      onChange={() => handleCheckSingle(danhsach.id)}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <PagePaginist anhto={12} />
        </div>
      </div>
      {/* showModal */}
      <TuChoi />
    </>
  );
};
export default PheDuyetBG;
