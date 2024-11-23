import { useState } from "react";
import "../HopDongUyQuyen/style.css";
import "./DropDown.css";
import XoaThietBi from "./Modal/XoaThietBi";
import PagePaginist from "../BackGround/PagePaginist";

const DanhSachThietBi = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  const [checkbox4, setCheckbox4] = useState(false);
  const [checkbox5, setCheckbox5] = useState(false);
  const [checkbox6, setCheckbox6] = useState(false);
  const [checkbox7, setCheckbox7] = useState(false);
  const [checkbox8, setCheckbox8] = useState(false);
  const [checkbox9, setCheckbox9] = useState(false);
  const [checkbox10, setCheckbox10] = useState(false);
  const [checkbox11, setCheckbox11] = useState(false);
  const [checkbox12, setCheckbox12] = useState(false);
  const [checkbox13, setCheckbox13] = useState(false);

  const handleSelectAllChange = (event: any) => {
    const checked = event.target.checked;
    setSelectAll(checked);
    setCheckbox1(checked);
    setCheckbox2(checked);
    setCheckbox3(checked);
    setCheckbox4(checked);
    setCheckbox5(checked);
    setCheckbox6(checked);
    setCheckbox7(checked);
    setCheckbox8(checked);
    setCheckbox9(checked);
    setCheckbox10(checked);
    setCheckbox11(checked);
    setCheckbox12(checked);
    setCheckbox13(checked);
  };

  const [isCheckListVisible, setCheckListVisible] = useState(false);

  const toggleCheckList = () => {
    setCheckListVisible(!isCheckListVisible);
  };

  return (
    <>
      <div>
        <div
          style={{
            width: 345,
            height: 48,
            top: 86,
            left: 229,
            position: "absolute",
            color: "#FFFFFF",
          }}
        >
          <p
            style={{
              fontFamily: "Montserrat",
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: "-0.002em",
              textAlign: "left",
            }}
          >
            Danh sách thiết bị
          </p>
        </div>

        <select
          style={{
            width: "274px",
            height: "40px",
            position: "absolute",
            top: "158px",
            left: "229px",
            padding: "8px 12px 8px 16px",
            borderRadius: "8px",
            border: "1px solid #FF7506",
            justifyContent: "space-between",
            background: "#1E1E2E",
            color: "#FFFFFF",
            fontFamily: "Montserrat",
            fontSize: "16px",
            fontWeight: "400",
            letterSpacing: "-0.002em",
          }}
        >
          <option value="" selected>
            Chọn nhóm tài khoản
          </option>
          <option value="all">Tất cả</option>
          <option value="Công ty TMCP Bách Hóa Xanh">
            Công ty TMCP Bách Hóa Xanh
          </option>
          <option value="Công ty TNHH XYZ">Công ty TNHH XYZ</option>
          <option value="Công ty TMCP Adora">Công ty TMCP Adora</option>
        </select>

        <div
          style={{
            width: "274px",
            height: "40px",
            position: "absolute",
            top: "158px",
            left: 527,
          }}
        >
          <div
            style={{
              width: "274px",
              height: "40px",
              borderRadius: "8px",
              border: "1px solid #FF7506",
              justifyContent: "space-between",
              background: "#3E3E5B",
              color: "#FFFFFF",
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: "400",
              letterSpacing: "-0.002em",
            }}
            id="list1"
            className={`dropdown-check-list ${
              isCheckListVisible ? "visible" : ""
            }`}
            tabIndex={100}
          >
            <span
              style={{
                background: "#1E1E2E",
                borderRadius: "8px",
              }}
              className="anchor"
              onClick={toggleCheckList}
            >
              <div style={{ margin: "8px 12px 8px 16px" }}>Ẩn hiện cột</div>
            </span>
            <ul className="items">
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    MAC Address
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Memory
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    SKU/ID
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Hạn bảo hành
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Tên đăng nhập
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Trạng thái
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Địa điểm
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Hạn hợp đồng
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            width: "665px",
            height: "48px",
            position: "absolute",
            top: "158px",
            left: "1105px",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#2B2B3F",
          }}
        >
          <input
            type="text"
            style={{
              width: "100%",
              height: "100%",
              background: "transparent",
              border: "none",
              color: "#FFFFFF",
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: "600",
              letterSpacing: "-0.002em",
              outline: "none",
              paddingLeft: 24,
              paddingRight: 67,
            }}
            placeholder="Tìm thiết bị theo tên, SKU, địa điểm, địa chỉ Mac"
          />
          <div
            style={{
              marginLeft: "12px",
              width: "24px",
              height: "24px",
              marginTop: 11,
              marginRight: 10,
            }}
          >
            <a href="/anhson">
              <i
                style={{ color: "white" }}
                className="fa-solid fa-magnifying-glass"
              ></i>
            </a>
          </div>
        </div>

        {/* bảng */}
        <div
          style={{
            width: 1541,
            position: "absolute",
            top: 230,
            left: 229,
            borderRadius: 16,
            gap: 56,
            backgroundColor: "#2F2F41B2",
            padding: "16px 24px",
          }}
        >
          <table
            style={{
              width: "fit-content",
              height: 720,
            }}
          >
            <thead style={{ color: "#FFAC69" }}>
              <tr style={{ textAlign: "left", height: 48, width: "100%" }}>
                <th style={{ width: "71px" }}>
                  {" "}
                  <input
                    checked={selectAll}
                    onChange={handleSelectAllChange}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </th>
                <th style={{ width: "85px" }}>STT</th>
                <th style={{ width: "151px" }}>Tên thiết bị</th>
                <th style={{ width: "311px" }}>Trạng thái</th>
                <th style={{ width: "391px" }}>Địa điểm</th>
                <th style={{ width: "157px" }}>Hạn hợp đồng</th>
                <th style={{ width: "146px" }}>MAC Addresss</th>
                <th style={{ width: "181px" }}>Memory</th>
              </tr>
            </thead>
            <tbody
              style={{
                color: "#FFFFFF",
                fontFamily: "Montserrat",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "20px",
                letterSpacing: "0.015em",
                textAlign: "left",
              }}
            >
              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox1}
                    onChange={(event) => setCheckbox1(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>1</td>
                <td>Device A12231</td>
                <td>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#18E306",
                      marginRight: "5px",
                      display: "inline-block",
                      marginBottom: "1.5px",
                    }}
                  ></div>
                  Đang kích hoạt | Đang hoạt động{" "}
                </td>
                <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
                <td>21/04/2021</td>
                <td>123.12.156.10</td>
                <td>0.00GB/32GB</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox2}
                    onChange={(event) => setCheckbox2(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>2</td>
                <td>Device A12231</td>
                <td>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#18E306",
                      marginRight: "5px",
                      display: "inline-block",
                      marginBottom: "1.5px",
                    }}
                  ></div>
                  Đang kích hoạt | Đang hoạt động{" "}
                </td>
                <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
                <td>21/04/2021</td>
                <td>123.12.156.10</td>
                <td>0.00GB/32GB</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox3}
                    onChange={(event) => setCheckbox3(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>3</td>
                <td>Device A12231</td>
                <td>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#18E306",
                      marginRight: "5px",
                      display: "inline-block",
                      marginBottom: "1.5px",
                    }}
                  ></div>
                  Đang kích hoạt | Đang hoạt động{" "}
                </td>
                <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
                <td>21/04/2021</td>
                <td>123.12.156.10</td>
                <td>0.00GB/32GB</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox4}
                    onChange={(event) => setCheckbox4(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>4</td>
                <td>Device A12231</td>
                <td>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#FF4747",
                      marginRight: "5px",
                      display: "inline-block",
                      marginBottom: "1.5px",
                    }}
                  ></div>
                  Ngừng kích hoạt{" "}
                </td>
                <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
                <td>21/04/2021</td>
                <td>123.12.156.10</td>
                <td>0.00GB/32GB</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox5}
                    onChange={(event) => setCheckbox5(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>5</td>
                <td>Device A12231</td>
                <td>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#18E306",
                      marginRight: "5px",
                      display: "inline-block",
                      marginBottom: "1.5px",
                    }}
                  ></div>
                  Đang kích hoạt | Đang hoạt động{" "}
                </td>
                <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
                <td>21/04/2021</td>
                <td>123.12.156.10</td>
                <td>0.00GB/32GB</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox6}
                    onChange={(event) => setCheckbox6(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>6</td>
                <td>Device A12231</td>
                <td>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#18E306",
                      marginRight: "5px",
                      display: "inline-block",
                      marginBottom: "1.5px",
                    }}
                  ></div>
                  Đang kích hoạt | Đang hoạt động{" "}
                </td>
                <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
                <td>21/04/2021</td>
                <td>123.12.156.10</td>
                <td>0.00GB/32GB</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox7}
                    onChange={(event) => setCheckbox7(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>7</td>
                <td>Device A12231</td>
                <td>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#FF4747",
                      marginRight: "5px",
                      display: "inline-block",
                      marginBottom: "1.5px",
                    }}
                  ></div>
                  Đang bị khoá{" "}
                </td>
                <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
                <td>21/04/2021</td>
                <td>123.12.156.10</td>
                <td>0.00GB/32GB</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox8}
                    onChange={(event) => setCheckbox8(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>8</td>
                <td>Device A12231</td>
                <td>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#18E306",
                      marginRight: "5px",
                      display: "inline-block",
                      marginBottom: "1.5px",
                    }}
                  ></div>
                  Đang kích hoạt | Đang hoạt động{" "}
                </td>
                <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
                <td>21/04/2021</td>
                <td>123.12.156.10</td>
                <td>0.00GB/32GB</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox9}
                    onChange={(event) => setCheckbox9(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>9</td>
                <td>Device A12231</td>
                <td>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#18E306",
                      marginRight: "5px",
                      display: "inline-block",
                      marginBottom: "1.5px",
                    }}
                  ></div>
                  Đang kích hoạt | Đang hoạt động{" "}
                </td>
                <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
                <td>21/04/2021</td>
                <td>123.12.156.10</td>
                <td>0.00GB/32GB</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox10}
                    onChange={(event) => setCheckbox10(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>10</td>
                <td>Device A12231</td>
                <td>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#FF4747",
                      marginRight: "5px",
                      display: "inline-block",
                      marginBottom: "1.5px",
                    }}
                  ></div>
                  Đang bị khoá{" "}
                </td>
                <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
                <td>21/04/2021</td>
                <td>123.12.156.10</td>
                <td>0.00GB/32GB</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox11}
                    onChange={(event) => setCheckbox11(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>11</td>
                <td>Device A12231</td>
                <td>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#FF4747",
                      marginRight: "5px",
                      display: "inline-block",
                      marginBottom: "1.5px",
                    }}
                  ></div>
                  Ngừng kích hoạt{" "}
                </td>
                <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
                <td>21/04/2021</td>
                <td>123.12.156.10</td>
                <td>0.00GB/32GB</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox12}
                    onChange={(event) => setCheckbox12(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>12</td>
                <td>Device A12231</td>
                <td>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#18E306",
                      marginRight: "5px",
                      display: "inline-block",
                      marginBottom: "1.5px",
                    }}
                  ></div>
                  Đang kích hoạt | Đang hoạt động{" "}
                </td>
                <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
                <td>21/04/2021</td>
                <td>123.12.156.10</td>
                <td>0.00GB/32GB</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>
                  {" "}
                  <input
                    checked={checkbox13}
                    onChange={(event) => setCheckbox13(event.target.checked)}
                    type="checkbox"
                    style={{
                      width: "24px",
                      height: "24px",
                    }}
                  />
                </td>
                <td>13</td>
                <td>Device A12231</td>
                <td>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#18E306",
                      marginRight: "5px",
                      display: "inline-block",
                      marginBottom: "1.5px",
                    }}
                  ></div>
                  Đang kích hoạt | Đang hoạt động{" "}
                </td>
                <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
                <td>21/04/2021</td>
                <td>123.12.156.10</td>
                <td>0.00GB/32GB</td>
              </tr>
            </tbody>
          </table>

          <PagePaginist />
        </div>

        <div className="khung2" style={{ height: 520 }}>
          <div className="khung1">
            <a href="/suathongtin" style={{ textDecoration: "none" }}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/cong.png?alt=media&token=30da3562-77bc-4dab-850b-d87505acdc9f"
                alt="cong"
              />
              <div className="textt">
                Thêm <br /> thiết bị
              </div>
            </a>
          </div>
          <div className="khung1">
            <div data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/kichhoat.png?alt=media&token=95a625a1-ee48-47c6-b552-3f6b14eb2025"
                alt="kichhoat"
              />
              <div className="textt">
                Kích hoạt
                <br /> thiết bị
              </div>
            </div>
          </div>
          <div className="khung1">
            <div data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/khoa.png?alt=media&token=150753e6-5ca9-4340-aafb-a7c2c6699e65"
                alt="khoa"
              />
              <div className="textt">
                Khóa <br /> thiết bị
              </div>
            </div>
          </div>
          <div className="khung1">
            <div data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/rac.png?alt=media&token=9472a6a0-9eb5-4dad-b4e8-3e76c1c9f735"
                alt="rac"
              />
              <div className="textt">
                Xóa
                <br /> thiết bị
              </div>
            </div>
          </div>
        </div>

        <XoaThietBi />
      </div>
    </>
  );
};

export default DanhSachThietBi;
