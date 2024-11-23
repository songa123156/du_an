import React, { useEffect, useState } from "react";
import "./css/style.css";
import ActiveBar from "./IconSideBar/ActiveBar";

interface TypeProps {
  value: number;
}

const SideBar = (props: TypeProps) => {
  const [isCheckListVisible, setCheckListVisible] = useState(false);
  const toggleCheckList = () => {
    setCheckListVisible(true);
  };
  const [isCheckListVisible1, setCheckListVisible1] = useState(false);
  const toggleCheckList1 = () => {
    setCheckListVisible1(true);
  };

  const [isCheckListVisible2, setCheckListVisible2] = useState(false);
  const toggleCheckList2 = () => {
    setCheckListVisible2(true);
  };

  const [isCheckListVisible3, setCheckListVisible3] = useState(false);
  const toggleCheckList3 = () => {
    setCheckListVisible3(true);
  };

  const [checkNavbar, setcheckNavbar] = useState(false);

  const handleNavbar = () => {
    setcheckNavbar(!checkNavbar);
  };

  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const link = window.location.href;
    const path = link.substring(window.location.origin.length).toLowerCase();
    setActiveLink(path);
  }, []);

  const [isCheck, setCheck] = useState(false);

  const toggleCheck = () => {
    setCheck(!isCheck);
  };

  const [tenFlag, setTenFlag] = useState("Tiếng Việt");
  const [Flag, setFlag] = useState("vietnam");
  const imagePath = `/Icons/${Flag}.png`;

  return (
    <>
      {isCheck && (
        <div
          onClick={() => {
            setCheck(false);
          }}
          style={{
            height: "100vh",
            width: "100vw",
            position: "absolute",
            zIndex: 9999,
          }}
        ></div>
      )}

      <div
        className="side1 CoCuaAi"
        style={{ zIndex: `${isCheck ? "99999" : "0"}` }}
      >
        <div>
          <div
            style={{
              width: "143px",
              height: "40px",
              borderRadius: "8px",
              border: "1px solid #FF7506",
              justifyContent: "space-between",
              color: "#FFFFFF",
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: "400",
              letterSpacing: "-0.002em",
            }}
            id="list1"
            className={`dropdown-check-list ${
              isCheck ? "visible side2" : "side2"
            }`}
            tabIndex={100}
          >
            <span
              style={{
                background: "#1E1E2E",
                borderRadius: "8px",
                padding: "8px 4px 8px 8px",
              }}
              className="anchor"
              onClick={toggleCheck}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                {tenFlag}
                <img
                  src={imagePath}
                  style={{ width: 22, height: 22, marginLeft: 8 }}
                  alt=""
                />
              </div>
            </span>

            <ul className="items">
              <li
                onClick={() => {
                  toggleCheck();
                  setTenFlag("Tiếng Việt");
                  setFlag("vietnam");
                }}
              >
                Tiếng Việt
                <img
                  src="/Icons/vietnam.png"
                  style={{
                    width: 22,
                    height: 22,
                    marginRight: 10,
                    float: "right",
                  }}
                  alt=""
                />
              </li>
              <li
                onClick={() => {
                  toggleCheck();
                  setTenFlag("Tiếng Nhật");
                  setFlag("japan");
                }}
              >
                Tiếng Nhật
                <img
                  src="/Icons/japan.png"
                  style={{
                    width: 22,
                    height: 22,
                    marginRight: 10,
                    float: "right",
                  }}
                  alt=""
                />
              </li>
              {/* zach */}
              <li
                onClick={() => {
                  toggleCheck();
                  setTenFlag("Tiếng Anh");
                  setFlag("united-kingdom");
                }}
              >
                Tiếng Anh
                <img
                  src="/Icons/united-kingdom.png"
                  style={{
                    width: 22,
                    height: 22,
                    marginRight: 10,
                    float: "right",
                  }}
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            width: 132,
            height: 40,
            top: 24,
            left: 1542,
            gap: 8,
            marginRight: 24,
            position: "absolute",
          }}
        >
          <a href="/trang1" style={{ textDecoration: "none" }}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/admin.jpg?alt=media&token=9a625f88-689d-48e4-82fb-d19827df0ae2"
              alt="mdo"
              style={{
                width: 40,
                height: "40.58px",
                borderRadius: 200,
                position: "absolute",
              }}
            />
            <div
              style={{
                width: 74,
                height: 24,
                left: 5,
                fontFamily: "Montserrat",
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: "-0.002em",
                textAlign: "center",
                color: "rgb(245, 245, 255)",
                marginLeft: 35,
                position: "relative",
                textDecoration: "none",
              }}
            />
            <div
              style={{
                width: 49,
                height: 17,
                left: 6,
                fontFamily: "Montserrat",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.015em",
                textAlign: "center",
                color: "rgb(182, 81, 0)",
                marginLeft: 35,
                position: "relative",
                textDecoration: "none",
              }}
            >
              Admin
            </div>
          </a>
        </div>
      </div>

      {props.value === 1 ? (
        <div className="side3 sideeffect">
          <img src="/images/logo.png" alt="" className="side4" />

          <div className="side5">
            <a
              href="/sidebardefault/khobangghi"
              className={
                activeLink === "/sidebardefault/khobangghi" ||
                activeLink === "/sidebardefault/khobangghi1" ||
                activeLink === "/sidebardefault/pheduyetbg" ||
                activeLink === "/sidebardefault/pheduyetbg1"
                  ? "active"
                  : ""
              }
            >
              <div
                className={
                  activeLink === "/sidebardefault/khobangghi" ||
                  activeLink === "/sidebardefault/khobangghi1" ||
                  activeLink === "/sidebardefault/pheduyetbg" ||
                  activeLink === "/sidebardefault/pheduyetbg1"
                    ? "d-block"
                    : "d-none"
                }
              >
                <ActiveBar />
              </div>

              <span className="kichStorage">
                <span
                  style={{ fontSize: 40 }}
                  className={
                    activeLink === "/sidebardefault/khobangghi" ||
                    activeLink === "/sidebardefault/khobangghi1" ||
                    activeLink === "/sidebardefault/pheduyetbg" ||
                    activeLink === "/sidebardefault/pheduyetbg1"
                      ? "active icon-snapedit_1712710374806 side6"
                      : "icon-snapedit_1712710374806 side6"
                  }
                >
                  <span className="path1" />
                  <span className="path2" />
                  <span className="path3" />
                  <span className="path4" />
                  <span className="path5" />
                  <span className="path6" />
                  <span className="path7" />
                  <span className="path8" />
                  <span className="path9" />
                  <span className="path10" />
                  <span className="path11" />
                  <span className="path12" />
                  <span className="path13" />
                  <span className="path14" />
                  <span className="path15" />
                  <span className="path16" />
                  <span className="path17" />
                  <span className="path18" />
                  <span className="path19" />
                  <span className="path20" />
                  <span className="path21" />
                  <span className="path22" />
                  <span className="path23" />
                  <span className="path24" />
                  <span className="path25" />
                  <span className="path26" />
                  <span className="path27" />
                  <span className="path28" />
                  <span className="path29" />
                  <span className="path30" />
                  <span className="path31" />
                  <span className="path32" />
                  <span className="path33" />
                  <span className="path34" />
                  <span className="path35" />
                  <span className="path36" />
                  <span className="path37" />
                  <span className="path38" />
                </span>
              </span>
              <p className="side7">Kho bản ghi</p>
            </a>
          </div>

          <div className="side8">
            <a
              href="/sidebardefault/dsplaylist"
              className={
                activeLink === "/sidebardefault/dsplaylist" ||
                activeLink === "/sidebardefault/dsplaylist1"
                  ? "active"
                  : ""
              }
            >
              <div
                className={
                  activeLink === "/sidebardefault/dsplaylist" ||
                  activeLink === "/sidebardefault/dsplaylist1"
                    ? "d-block"
                    : "d-none"
                }
              >
                <ActiveBar />
              </div>
              <span className="kichPlaylist">
                <span
                  className={
                    activeLink === "/sidebardefault/dsplaylist" ||
                    activeLink === "/sidebardefault/dsplaylist1"
                      ? "active icon-snapedit_1712729669425 side6"
                      : "icon-snapedit_1712729669425 side6"
                  }
                >
                  <span className="path1" />
                  <span className="path2" />
                  <span className="path3" />
                  <span className="path4" />
                  <span className="path5" />
                  <span className="path6" />
                  <span className="path7" />
                  <span className="path8" />
                  <span className="path9" />
                  <span className="path10" />
                  <span className="path11" />
                  <span className="path12" />
                  <span className="path13" />
                  <span className="path14" />
                  <span className="path15" />
                  <span className="path16" />
                  <span className="path17" />
                  <span className="path18" />
                </span>
              </span>
              <p className="side7">Playlist</p>
            </a>
          </div>

          <div className="side8">
            <a
              href="/sidebardefault/danhsachlichphat"
              className={
                activeLink === "/sidebardefault/danhsachlichphat"
                  ? "active"
                  : ""
              }
            >
              <div
                className={
                  activeLink === "/sidebardefault/danhsachlichphat"
                    ? "d-block"
                    : "d-none"
                }
              >
                <ActiveBar />
              </div>
              <span className="kichComplane">
                <span
                  className={
                    activeLink === "/sidebardefault/danhsachlichphat"
                      ? "active icon-snapedit_1712729853060 side6"
                      : "icon-snapedit_1712729853060 side6"
                  }
                >
                  <span className="path1" />
                  <span className="path2" />
                  <span className="path3" />
                  <span className="path4" />
                  <span className="path5" />
                  <span className="path6" />
                  <span className="path7" />
                  <span className="path8" />
                  <span className="path9" />
                  <span className="path10" />
                  <span className="path11" />
                  <span className="path12" />
                  <span className="path13" />
                  <span className="path14" />
                  <span className="path15" />
                  <span className="path16" />
                  <span className="path17" />
                  <span className="path18" />
                  <span className="path19" />
                  <span className="path20" />
                  <span className="path21" />
                  <span className="path22" />
                  <span className="path23" />
                  <span className="path24" />
                  <span className="path25" />
                  <span className="path26" />
                  <span className="path27" />
                  <span className="path28" />
                  <span className="path29" />
                  <span className="path30" />
                  <span className="path31" />
                  <span className="path32" />
                  <span className="path33" />
                  <span className="path34" />
                  <span className="path35" />
                  <span className="path36" />
                  <span className="path37" />
                  <span className="path38" />
                  <span className="path39" />
                  <span className="path40" />
                </span>
              </span>
              <p className="side7">Lập lịch phát</p>
            </a>
          </div>

          <div
            className={
              activeLink === "/sidebardefault/dshopdong" ||
              activeLink === "/sidebardefault/danhsachhopdongkhaithac" ||
              // trang khác
              activeLink === "/sidebardefault/danhsachthietbi" ||
              // trang khác
              activeLink === "/sidebardefault/danhsachdoitacuyquyen" ||
              // trang khác
              activeLink === "/sidebardefault/donvisudung"
                ? "active side9"
                : "side9"
            }
            onMouseMove={toggleCheckList1}
            onMouseOut={() => setCheckListVisible1(false)}
          >
            <div
              className={
                activeLink === "/sidebardefault/dshopdong" ||
                activeLink === "/sidebardefault/danhsachhopdongkhaithac" ||
                // trang khác
                activeLink === "/sidebardefault/danhsachthietbi" ||
                // trang khác
                activeLink === "/sidebardefault/danhsachdoitacuyquyen" ||
                // trang khác
                activeLink === "/sidebardefault/donvisudung"
                  ? "d-block"
                  : "d-none"
              }
            >
              <ActiveBar />
            </div>
            <span className="kichManager">
              <span
                className={
                  activeLink === "/sidebardefault/dshopdong" ||
                  activeLink === "/sidebardefault/danhsachhopdongkhaithac" ||
                  // trang khác
                  activeLink === "/sidebardefault/danhsachthietbi" ||
                  // trang khác
                  activeLink === "/sidebardefault/danhsachdoitacuyquyen" ||
                  // trang khác
                  activeLink === "/sidebardefault/donvisudung"
                    ? "active icon-snapedit_1712730021307 side6"
                    : "icon-snapedit_1712730021307 side6"
                }
              >
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
                <span className="path4" />
                <span className="path5" />
                <span className="path6" />
                <span className="path7" />
                <span className="path8" />
                <span className="path9" />
                <span className="path10" />
                <span className="path11" />
                <span className="path12" />
                <span className="path13" />
                <span className="path14" />
                <span className="path15" />
                <span className="path16" />
                <span className="path17" />
                <span className="path18" />
                <span className="path19" />
                <span className="path20" />
                <span className="path21" />
                <span className="path22" />
                <span className="path23" />
                <span className="path24" />
                <span className="path25" />
                <span className="path26" />
                <span className="path27" />
                <span className="path28" />
                <span className="path29" />
                <span className="path30" />
                <span className="path31" />
                <span className="path32" />
                <span className="path33" />
                <span className="path34" />
                <span className="path35" />
                <span className="path36" />
                <span className="path37" />
                <span className="path38" />
                <span className="path39" />
                <span className="path40" />
                <span className="path41" />
                <span className="path42" />
                <span className="path43" />
                <span className="path44" />
                <span className="path45" />
                <span className="path46" />
                <span className="path47" />
                <span className="path48" />
                <span className="path49" />
                <span className="path50" />
                <span className="path51" />
                <span className="path52" />
                <span className="path53" />
                <span className="path54" />
                <span className="path55" />
                <span className="path56" />
                <span className="path57" />
                <span className="path58" />
                <span className="path59" />
                <span className="path60" />
                <span className="path61" />
                <span className="path62" />
                <span className="path63" />
                <span className="path64" />
                <span className="path65" />
                <span className="path66" />
                <span className="path67" />
                <span className="path68" />
                <span className="path69" />
                <span className="path70" />
                <span className="path71" />
              </span>
            </span>
            <p className="side7">Quản lý </p>
            <i className="fa-solid fa-ellipsis-vertical side10"></i>
            <div
              id="list1"
              className={`side11 dropdown-check-list ${
                isCheckListVisible1 ? "visible" : ""
              }`}
              tabIndex={100}
              style={{ width: 185 }}
            >
              <span className="anchor d-none"></span>
              <ul
                className="items"
                style={{ textAlign: "left", paddingLeft: 24 }}
              >
                <li>
                  <a href="/sidebardefault/dshopdong">Quản lý hợp đồng</a>
                </li>
                <li>
                  <a href="/sidebardefault/danhsachthietbi">Quản lý thiết bị</a>
                </li>
                <li>
                  <a href="/sidebardefault/danhsachdoitacuyquyen">
                    Đơn vị ủy quyền
                  </a>
                </li>
                <li>
                  <a href="/sidebardefault/donvisudung">Đơn vị sử dụng</a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={
              activeLink === "/sidebardefault/chartbaocaodoanhthu" ||
              // trang khacs

              activeLink === "/sidebardefault/lichsudoisoatdoanhthu" ||
              // trang khác
              activeLink === "/sidebardefault/quanlyphanphoidoanhthu"
                ? "active side9"
                : "side9"
            }
            onMouseMove={toggleCheckList}
            onMouseOut={() => setCheckListVisible(false)}
          >
            <div
              className={
                activeLink === "/sidebardefault/chartbaocaodoanhthu" ||
                // trang khacs

                activeLink === "/sidebardefault/lichsudoisoatdoanhthu" ||
                // trang khác
                activeLink === "/sidebardefault/quanlyphanphoidoanhthu"
                  ? "d-block"
                  : "d-none"
              }
            >
              <ActiveBar />
            </div>
            <span className="kichSale">
              <span
                className={
                  activeLink === "/sidebardefault/chartbaocaodoanhthu" ||
                  // trang khacs

                  activeLink === "/sidebardefault/lichsudoisoatdoanhthu" ||
                  // trang khác
                  activeLink === "/sidebardefault/quanlyphanphoidoanhthu"
                    ? "active icon-snapedit_1712730087688 side6"
                    : "icon-snapedit_1712730087688 side6"
                }
              >
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
                <span className="path4" />
                <span className="path5" />
                <span className="path6" />
                <span className="path7" />
                <span className="path8" />
                <span className="path9" />
                <span className="path10" />
                <span className="path11" />
                <span className="path12" />
                <span className="path13" />
                <span className="path14" />
                <span className="path15" />
                <span className="path16" />
                <span className="path17" />
                <span className="path18" />
                <span className="path19" />
                <span className="path20" />
                <span className="path21" />
                <span className="path22" />
              </span>
            </span>
            <p className="side7">Doanh thu </p>
            <i className="fa-solid fa-ellipsis-vertical side10"></i>
            <div
              id="list1"
              className={`side11 dropdown-check-list ${
                isCheckListVisible ? "visible" : ""
              }`}
              tabIndex={100}
              style={{ width: 185 }}
            >
              <span className="anchor d-none"></span>
              <ul
                className="items"
                style={{ textAlign: "left", paddingLeft: 24 }}
              >
                <li>
                  <a href="/sidebardefault/chartbaocaodoanhthu">
                    Báo cáo doanh thu
                  </a>
                </li>
                <li>
                  <a href="/sidebardefault/lichsudoisoatdoanhthu">
                    Lịch sử đối soát
                  </a>
                </li>
                <li>
                  <a href="/sidebardefault/quanlyphanphoidoanhthu">
                    Phân phối doanh thu
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={
              activeLink === "/sidebardefault/phanquyennguoidung" ||
              activeLink === "/sidebardefault/vaitronguoidungtrenhethong" ||
              // trang khác

              activeLink === "/sidebardefault/caidatcauhinh" ||
              activeLink === "/sidebardefault/caidatcauhinhthongtintacpham" ||
              activeLink === "/sidebardefault/chinhsuathongtintacphamp13" ||
              activeLink === "/sidebardefault/loaihopdong3" ||
              activeLink === "/sidebardefault/p13thongtintacpham" ||
              activeLink === "/sidebardefault/quanlyloaihopdong" ||
              activeLink === "/sidebardefault/canhbaohethantacpham" ||
              // trang khác
              activeLink === "/sidebardefault/doisoattheothang"
                ? "active side9"
                : "side9"
            }
            onMouseMove={toggleCheckList2}
            onMouseOut={() => setCheckListVisible2(false)}
          >
            <div
              className={
                activeLink === "/sidebardefault/phanquyennguoidung" ||
                activeLink === "/sidebardefault/vaitronguoidungtrenhethong" ||
                // trang khác

                activeLink === "/sidebardefault/caidatcauhinh" ||
                activeLink === "/sidebardefault/caidatcauhinhthongtintacpham" ||
                activeLink === "/sidebardefault/chinhsuathongtintacphamp13" ||
                activeLink === "/sidebardefault/loaihopdong3" ||
                activeLink === "/sidebardefault/p13thongtintacpham" ||
                activeLink === "/sidebardefault/quanlyloaihopdong" ||
                activeLink === "/sidebardefault/canhbaohethantacpham" ||
                // trang khác
                activeLink === "/sidebardefault/doisoattheothang"
                  ? "d-block"
                  : "d-none"
              }
            >
              <ActiveBar />
            </div>
            <span className="kichSetting">
              <span
                className={
                  activeLink === "/sidebardefault/phanquyennguoidung" ||
                  activeLink === "/sidebardefault/vaitronguoidungtrenhethong" ||
                  // trang khác

                  activeLink === "/sidebardefault/caidatcauhinh" ||
                  activeLink ===
                    "/sidebardefault/caidatcauhinhthongtintacpham" ||
                  activeLink === "/sidebardefault/chinhsuathongtintacphamp13" ||
                  activeLink === "/sidebardefault/loaihopdong3" ||
                  activeLink === "/sidebardefault/p13thongtintacpham" ||
                  activeLink === "/sidebardefault/quanlyloaihopdong" ||
                  activeLink === "/sidebardefault/canhbaohethantacpham" ||
                  // trang khác
                  activeLink === "/sidebardefault/doisoattheothang"
                    ? "active icon-Setting-icon-2-1 side6"
                    : "icon-Setting-icon-2-1 side6"
                }
              >
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
                <span className="path4" />
                <span className="path5" />
                <span className="path6" />
                <span className="path7" />
                <span className="path8" />
                <span className="path9" />
                <span className="path10" />
                <span className="path11" />
                <span className="path12" />
                <span className="path13" />
                <span className="path14" />
                <span className="path15" />
                <span className="path16" />
                <span className="path17" />
                <span className="path18" />
                <span className="path19" />
                <span className="path20" />
                <span className="path21" />
                <span className="path22" />
                <span className="path23" />
                <span className="path24" />
                <span className="path25" />
                <span className="path26" />
                <span className="path27" />
                <span className="path28" />
                <span className="path29" />
                <span className="path30" />
                <span className="path31" />
                <span className="path32" />
                <span className="path33" />
                <span className="path34" />
                <span className="path35" />
                <span className="path36" />
                <span className="path37" />
                <span className="path38" />
                <span className="path39" />
                <span className="path40" />
                <span className="path41" />
                <span className="path42" />
                <span className="path43" />
                <span className="path44" />
                <span className="path45" />
                <span className="path46" />
                <span className="path47" />
                <span className="path48" />
                <span className="path49" />
                <span className="path50" />
                <span className="path51" />
                <span className="path52" />
                <span className="path53" />
                <span className="path54" />
                <span className="path55" />
                <span className="path56" />
                <span className="path57" />
                <span className="path58" />
                <span className="path59" />
                <span className="path60" />
                <span className="path61" />
                <span className="path62" />
                <span className="path63" />
                <span className="path64" />
                <span className="path65" />
                <span className="path66" />
                <span className="path67" />
                <span className="path68" />
                <span className="path69" />
                <span className="path70" />
                <span className="path71" />
                <span className="path72" />
                <span className="path73" />
                <span className="path74" />
                <span className="path75" />
                <span className="path76" />
                <span className="path77" />
                <span className="path78" />
                <span className="path79" />
                <span className="path80" />
                <span className="path81" />
                <span className="path82" />
                <span className="path83" />
                <span className="path84" />
                <span className="path85" />
                <span className="path86" />
                <span className="path87" />
                <span className="path88" />
                <span className="path89" />
                <span className="path90" />
                <span className="path91" />
                <span className="path92" />
                <span className="path93" />
                <span className="path94" />
                <span className="path95" />
                <span className="path96" />
                <span className="path97" />
              </span>
            </span>
            <p className="side7">Cài đặt</p>
            <i className="fa-solid fa-ellipsis-vertical side10"></i>
            <div
              id="list1"
              className={`side11 dropdown-check-list ${
                isCheckListVisible2 ? "visible" : ""
              }`}
              tabIndex={100}
              style={{ width: 216 }}
            >
              <span className="anchor d-none"></span>
              <ul
                className="items"
                style={{ textAlign: "left", paddingLeft: 24 }}
              >
                <li>
                  <a href="/sidebardefault/phanquyennguoidung">
                    Phân quyền người dùng
                  </a>
                </li>
                <li>
                  <a href="/sidebardefault/caidatcauhinh">Cấu hình</a>
                </li>
                <li>
                  <a href="/sidebardefault/canhbaohethantacpham">
                    Quản lý hợp đồng
                  </a>
                </li>
                <li>
                  <a href="/sidebardefault/caidatcauhinhthongtintacpham">
                    Thông tin tác phẩm
                  </a>
                </li>
                <li>
                  <a href="/sidebardefault/doisoattheothang">Chu kì đối soát</a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={
              activeLink === "/sidebardefault/feedback" ||
              activeLink === "/sidebardefault/taiapp" ||
              activeLink === "/sidebardefault/feedbackthu" ||
              activeLink === "/sidebardefault/feedbackadmin" ||
              activeLink === "/sidebardefault/huongdansudung"
                ? "active side9"
                : "side9"
            }
            onMouseMove={toggleCheckList3}
            onMouseOut={() => setCheckListVisible3(false)}
          >
            <div
              className={
                activeLink === "/sidebardefault/feedback" ||
                activeLink === "/sidebardefault/taiapp" ||
                activeLink === "/sidebardefault/feedbackthu" ||
                activeLink === "/sidebardefault/feedbackadmin" ||
                activeLink === "/sidebardefault/huongdansudung"
                  ? "d-block"
                  : "d-none"
              }
            >
              <ActiveBar />
            </div>
            <span className="kichSupport">
              <span
                className={
                  activeLink === "/sidebardefault/feedback" ||
                  activeLink === "/sidebardefault/taiapp" ||
                  activeLink === "/sidebardefault/feedbackthu" ||
                  activeLink === "/sidebardefault/feedbackadmin" ||
                  activeLink === "/sidebardefault/huongdansudung"
                    ? "active icon-Support-1 side6"
                    : "icon-Support-1 side6"
                }
              >
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
                <span className="path4" />
                <span className="path5" />
                <span className="path6" />
                <span className="path7" />
                <span className="path8" />
                <span className="path9" />
                <span className="path10" />
                <span className="path11" />
                <span className="path12" />
                <span className="path13" />
                <span className="path14" />
                <span className="path15" />
                <span className="path16" />
                <span className="path17" />
                <span className="path18" />
                <span className="path19" />
                <span className="path20" />
                <span className="path21" />
                <span className="path22" />
                <span className="path23" />
                <span className="path24" />
                <span className="path25" />
                <span className="path26" />
                <span className="path27" />
                <span className="path28" />
                <span className="path29" />
                <span className="path30" />
                <span className="path31" />
                <span className="path32" />
                <span className="path33" />
                <span className="path34" />
                <span className="path35" />
                <span className="path36" />
                <span className="path37" />
                <span className="path38" />
                <span className="path39" />
                <span className="path40" />
                <span className="path41" />
                <span className="path42" />
                <span className="path43" />
                <span className="path44" />
                <span className="path45" />
                <span className="path46" />
                <span className="path47" />
                <span className="path48" />
                <span className="path49" />
                <span className="path50" />
                <span className="path51" />
                <span className="path52" />
                <span className="path53" />
                <span className="path54" />
                <span className="path55" />
                <span className="path56" />
                <span className="path57" />
                <span className="path58" />
                <span className="path59" />
                <span className="path60" />
                <span className="path61" />
                <span className="path62" />
                <span className="path63" />
                <span className="path64" />
                <span className="path65" />
              </span>
            </span>
            <p className="side7">Hỗ trợ</p>
            <i className="fa-solid fa-ellipsis-vertical side10"></i>
            <div
              id="list1"
              className={`side11 dropdown-check-list ${
                isCheckListVisible3 ? "visible" : ""
              }`}
              tabIndex={100}
              style={{ width: 194 }}
            >
              <span className="anchor d-none"></span>
              <ul
                className="items"
                style={{ textAlign: "left", paddingLeft: 24 }}
              >
                <li>
                  <a href="/sidebardefault/huongdansudung">Hướng dẫn sử dụng</a>
                </li>
                <li>
                  <a href="/sidebardefault/taiapp">Tải App</a>
                </li>
                <li>
                  <a href="/sidebardefault/feedback">feedback</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="sideeffect">
          <div
            className="sidebar"
            style={{
              display: !checkNavbar ? "flex" : "none",
            }}
          >
            <div className="side12">
              <button onClick={handleNavbar} className="side13">
                &gt;
              </button>
            </div>
          </div>
          <div
            style={{ display: checkNavbar ? "flex" : "none", width: "100vw" }}
          >
            <div className="side3">
              <img src="/images/logo.png" alt="" className="side4" />

              <div className="side5">
                <a
                  href="/sidebardefault/khobangghi"
                  className={
                    activeLink === "/sidebarhidden/ctbangghi" ? "active" : ""
                  }
                >
                  <div
                    className={
                      activeLink === "/sidebarhidden/ctbangghi"
                        ? "d-block"
                        : "d-none"
                    }
                  >
                    <ActiveBar />
                  </div>

                  <span className="kichStorage">
                    <span
                      style={{ fontSize: 40 }}
                      className={
                        activeLink === "/sidebarhidden/ctbangghi"
                          ? "active icon-snapedit_1712710374806 side6"
                          : "icon-snapedit_1712710374806 side6"
                      }
                    >
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                      <span className="path6" />
                      <span className="path7" />
                      <span className="path8" />
                      <span className="path9" />
                      <span className="path10" />
                      <span className="path11" />
                      <span className="path12" />
                      <span className="path13" />
                      <span className="path14" />
                      <span className="path15" />
                      <span className="path16" />
                      <span className="path17" />
                      <span className="path18" />
                      <span className="path19" />
                      <span className="path20" />
                      <span className="path21" />
                      <span className="path22" />
                      <span className="path23" />
                      <span className="path24" />
                      <span className="path25" />
                      <span className="path26" />
                      <span className="path27" />
                      <span className="path28" />
                      <span className="path29" />
                      <span className="path30" />
                      <span className="path31" />
                      <span className="path32" />
                      <span className="path33" />
                      <span className="path34" />
                      <span className="path35" />
                      <span className="path36" />
                      <span className="path37" />
                      <span className="path38" />
                    </span>
                  </span>
                  <p className="side7">Kho bản ghi</p>
                </a>
              </div>

              <div className="side8">
                <a
                  href="/sidebardefault/dsplaylist"
                  className={
                    activeLink === "/sidebarhidden/playlisttop" ||
                    activeLink === "/sidebarhidden/suaplaylist" ||
                    activeLink === "/sidebarhidden/thembanghiplaylist" ||
                    activeLink === "/sidebarhidden/themplaylist"
                      ? "active"
                      : ""
                  }
                >
                  <div
                    className={
                      activeLink === "/sidebarhidden/playlisttop" ||
                      activeLink === "/sidebarhidden/suaplaylist" ||
                      activeLink === "/sidebarhidden/thembanghiplaylist" ||
                      activeLink === "/sidebarhidden/themplaylist"
                        ? "d-block"
                        : "d-none"
                    }
                  >
                    <ActiveBar />
                  </div>
                  <span className="kichPlaylist">
                    <span
                      className={
                        activeLink === "/sidebarhidden/playlisttop" ||
                        activeLink === "/sidebarhidden/suaplaylist" ||
                        activeLink === "/sidebarhidden/thembanghiplaylist" ||
                        activeLink === "/sidebarhidden/themplaylist"
                          ? "active icon-snapedit_1712729669425 side6"
                          : "icon-snapedit_1712729669425 side6"
                      }
                    >
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                      <span className="path6" />
                      <span className="path7" />
                      <span className="path8" />
                      <span className="path9" />
                      <span className="path10" />
                      <span className="path11" />
                      <span className="path12" />
                      <span className="path13" />
                      <span className="path14" />
                      <span className="path15" />
                      <span className="path16" />
                      <span className="path17" />
                      <span className="path18" />
                    </span>
                  </span>
                  <p className="side7">Playlist</p>
                </a>
              </div>

              <div className="side8">
                <a
                  href="/sidebardefault/danhsachlichphat"
                  className={
                    activeLink === "/sidebarhidden/aplichchothietbi" ||
                    activeLink === "/sidebarhidden/chinhsualichphat" ||
                    activeLink === "/sidebarhidden/chitietlichphat" ||
                    activeLink === "/sidebarhidden/themlichphatmoi"
                      ? "active"
                      : ""
                  }
                >
                  <div
                    className={
                      activeLink === "/sidebarhidden/aplichchothietbi" ||
                      activeLink === "/sidebarhidden/chinhsualichphat" ||
                      activeLink === "/sidebarhidden/chitietlichphat" ||
                      activeLink === "/sidebarhidden/themlichphatmoi"
                        ? "d-block"
                        : "d-none"
                    }
                  >
                    <ActiveBar />
                  </div>
                  <span className="kichComplane">
                    <span
                      className={
                        activeLink === "/sidebarhidden/aplichchothietbi" ||
                        activeLink === "/sidebarhidden/chinhsualichphat" ||
                        activeLink === "/sidebarhidden/chitietlichphat" ||
                        activeLink === "/sidebarhidden/themlichphatmoi"
                          ? "active icon-snapedit_1712729853060 side6"
                          : "icon-snapedit_1712729853060 side6"
                      }
                    >
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                      <span className="path6" />
                      <span className="path7" />
                      <span className="path8" />
                      <span className="path9" />
                      <span className="path10" />
                      <span className="path11" />
                      <span className="path12" />
                      <span className="path13" />
                      <span className="path14" />
                      <span className="path15" />
                      <span className="path16" />
                      <span className="path17" />
                      <span className="path18" />
                      <span className="path19" />
                      <span className="path20" />
                      <span className="path21" />
                      <span className="path22" />
                      <span className="path23" />
                      <span className="path24" />
                      <span className="path25" />
                      <span className="path26" />
                      <span className="path27" />
                      <span className="path28" />
                      <span className="path29" />
                      <span className="path30" />
                      <span className="path31" />
                      <span className="path32" />
                      <span className="path33" />
                      <span className="path34" />
                      <span className="path35" />
                      <span className="path36" />
                      <span className="path37" />
                      <span className="path38" />
                      <span className="path39" />
                      <span className="path40" />
                    </span>
                  </span>
                  <p className="side7">Lập lịch phát</p>
                </a>
              </div>

              <div
                className={
                  activeLink === "/sidebarhidden/chinhsuatacpham" ||
                  activeLink === "/sidebarhidden/chinhsuathongtin" ||
                  activeLink === "/sidebarhidden/chitiethopdong" ||
                  activeLink === "/sidebarhidden/chitiethopdong2" ||
                  activeLink === "/sidebarhidden/tacphamuyquyen" ||
                  activeLink === "/sidebarhidden/thembanghi" ||
                  activeLink === "/sidebarhidden/themhopdonguyquyen" ||
                  activeLink === "/sidebarhidden/themhopdonguyquyen2" ||
                  activeLink === "/sidebarhidden/chinhsuahopdong" ||
                  activeLink === "/sidebarhidden/chitiephopdongkhaithac" ||
                  activeLink === "/sidebarhidden/saochephopdong" ||
                  activeLink === "/sidebarhidden/themhopdongmoi" ||
                  // trang khác
                  activeLink === "/sidebarhidden/chitietthiebip8" ||
                  activeLink === "/sidebarhidden/p8themthietbimoi" ||
                  // trang khác
                  activeLink === "/sidebarhidden/capnhatthongtin" ||
                  // trang khác
                  activeLink === "/sidebarhidden/chinhsuattnguoidung" ||
                  activeLink === "/sidebarhidden/chitietp6" ||
                  activeLink === "/sidebarhidden/themnguoidung" ||
                  activeLink === "/sidebarhidden/thongtinnguoidung"
                    ? "active side9"
                    : "side9"
                }
                onMouseMove={toggleCheckList1}
                onMouseOut={() => setCheckListVisible1(false)}
              >
                <div
                  className={
                    activeLink === "/sidebarhidden/chinhsuatacpham" ||
                    activeLink === "/sidebarhidden/chinhsuathongtin" ||
                    activeLink === "/sidebarhidden/chitiethopdong" ||
                    activeLink === "/sidebarhidden/chitiethopdong2" ||
                    activeLink === "/sidebarhidden/tacphamuyquyen" ||
                    activeLink === "/sidebarhidden/thembanghi" ||
                    activeLink === "/sidebarhidden/themhopdonguyquyen" ||
                    activeLink === "/sidebarhidden/themhopdonguyquyen2" ||
                    activeLink === "/sidebarhidden/chinhsuahopdong" ||
                    activeLink === "/sidebarhidden/chitiephopdongkhaithac" ||
                    activeLink === "/sidebarhidden/saochephopdong" ||
                    activeLink === "/sidebarhidden/themhopdongmoi" ||
                    // trang khác
                    activeLink === "/sidebarhidden/chitietthiebip8" ||
                    activeLink === "/sidebarhidden/p8themthietbimoi" ||
                    // trang khác
                    activeLink === "/sidebarhidden/capnhatthongtin" ||
                    // trang khác
                    activeLink === "/sidebarhidden/chinhsuattnguoidung" ||
                    activeLink === "/sidebarhidden/chitietp6" ||
                    activeLink === "/sidebarhidden/themnguoidung" ||
                    activeLink === "/sidebarhidden/thongtinnguoidung"
                      ? "d-block"
                      : "d-none"
                  }
                >
                  <ActiveBar />
                </div>
                <span className="kichManager">
                  <span
                    className={
                      activeLink === "/sidebarhidden/chinhsuatacpham" ||
                      activeLink === "/sidebarhidden/chinhsuathongtin" ||
                      activeLink === "/sidebarhidden/chitiethopdong" ||
                      activeLink === "/sidebarhidden/chitiethopdong2" ||
                      activeLink === "/sidebarhidden/tacphamuyquyen" ||
                      activeLink === "/sidebarhidden/thembanghi" ||
                      activeLink === "/sidebarhidden/themhopdonguyquyen" ||
                      activeLink === "/sidebarhidden/themhopdonguyquyen2" ||
                      activeLink === "/sidebarhidden/chinhsuahopdong" ||
                      activeLink === "/sidebarhidden/chitiephopdongkhaithac" ||
                      activeLink === "/sidebarhidden/saochephopdong" ||
                      activeLink === "/sidebarhidden/themhopdongmoi" ||
                      // trang khác
                      activeLink === "/sidebarhidden/chitietthiebip8" ||
                      activeLink === "/sidebarhidden/p8themthietbimoi" ||
                      // trang khác
                      activeLink === "/sidebarhidden/capnhatthongtin" ||
                      // trang khác
                      activeLink === "/sidebarhidden/chinhsuattnguoidung" ||
                      activeLink === "/sidebarhidden/chitietp6" ||
                      activeLink === "/sidebarhidden/themnguoidung" ||
                      activeLink === "/sidebarhidden/thongtinnguoidung"
                        ? "active icon-snapedit_1712730021307 side6"
                        : "icon-snapedit_1712730021307 side6"
                    }
                  >
                    <span className="path1" />
                    <span className="path2" />
                    <span className="path3" />
                    <span className="path4" />
                    <span className="path5" />
                    <span className="path6" />
                    <span className="path7" />
                    <span className="path8" />
                    <span className="path9" />
                    <span className="path10" />
                    <span className="path11" />
                    <span className="path12" />
                    <span className="path13" />
                    <span className="path14" />
                    <span className="path15" />
                    <span className="path16" />
                    <span className="path17" />
                    <span className="path18" />
                    <span className="path19" />
                    <span className="path20" />
                    <span className="path21" />
                    <span className="path22" />
                    <span className="path23" />
                    <span className="path24" />
                    <span className="path25" />
                    <span className="path26" />
                    <span className="path27" />
                    <span className="path28" />
                    <span className="path29" />
                    <span className="path30" />
                    <span className="path31" />
                    <span className="path32" />
                    <span className="path33" />
                    <span className="path34" />
                    <span className="path35" />
                    <span className="path36" />
                    <span className="path37" />
                    <span className="path38" />
                    <span className="path39" />
                    <span className="path40" />
                    <span className="path41" />
                    <span className="path42" />
                    <span className="path43" />
                    <span className="path44" />
                    <span className="path45" />
                    <span className="path46" />
                    <span className="path47" />
                    <span className="path48" />
                    <span className="path49" />
                    <span className="path50" />
                    <span className="path51" />
                    <span className="path52" />
                    <span className="path53" />
                    <span className="path54" />
                    <span className="path55" />
                    <span className="path56" />
                    <span className="path57" />
                    <span className="path58" />
                    <span className="path59" />
                    <span className="path60" />
                    <span className="path61" />
                    <span className="path62" />
                    <span className="path63" />
                    <span className="path64" />
                    <span className="path65" />
                    <span className="path66" />
                    <span className="path67" />
                    <span className="path68" />
                    <span className="path69" />
                    <span className="path70" />
                    <span className="path71" />
                  </span>
                </span>
                <p className="side7">Quản lý </p>
                <i className="fa-solid fa-ellipsis-vertical side10"></i>
                <div
                  id="list1"
                  className={`side11 dropdown-check-list ${
                    isCheckListVisible1 ? "visible" : ""
                  }`}
                  tabIndex={100}
                  style={{ width: 185 }}
                >
                  <span className="anchor d-none"></span>
                  <ul
                    className="items"
                    style={{ textAlign: "left", paddingLeft: 24 }}
                  >
                    <li>
                      <a href="/sidebardefault/dshopdong">Quản lý hợp đồng</a>
                    </li>
                    <li>
                      <a href="/sidebardefault/danhsachthietbi">
                        Quản lý thiết bị
                      </a>
                    </li>
                    <li>
                      <a href="/sidebardefault/danhsachdoitacuyquyen">
                        Đơn vị ủy quyền
                      </a>
                    </li>
                    <li>
                      <a href="/sidebardefault/donvisudung">Đơn vị sử dụng</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className={
                  activeLink === "/sidebarhidden/baocaochitiet" ||
                  activeLink === "/sidebarhidden/doanhthuhopdongkhaithac" ||
                  activeLink === "/sidebarhidden/lichsudongbothietbi" ||
                  activeLink === "/sidebarhidden/thang3baocao" ||
                  // trang khacs

                  activeLink === "/sidebarhidden/dachotdoisoat" ||
                  activeLink === "/sidebarhidden/p11chitietdoanhthu" ||
                  // trang khác
                  activeLink === "/sidebarhidden/chitietdoanhthu"
                    ? "active side9"
                    : "side9"
                }
                onMouseMove={toggleCheckList}
                onMouseOut={() => setCheckListVisible(false)}
              >
                <div
                  className={
                    activeLink === "/sidebarhidden/baocaochitiet" ||
                    activeLink === "/sidebarhidden/doanhthuhopdongkhaithac" ||
                    activeLink === "/sidebarhidden/lichsudongbothietbi" ||
                    activeLink === "/sidebarhidden/thang3baocao" ||
                    // trang khacs

                    activeLink === "/sidebarhidden/dachotdoisoat" ||
                    activeLink === "/sidebarhidden/p11chitietdoanhthu" ||
                    // trang khác
                    activeLink === "/sidebarhidden/chitietdoanhthu"
                      ? "d-block"
                      : "d-none"
                  }
                >
                  <ActiveBar />
                </div>
                <span className="kichSale">
                  <span
                    className={
                      activeLink === "/sidebarhidden/baocaochitiet" ||
                      activeLink === "/sidebarhidden/doanhthuhopdongkhaithac" ||
                      activeLink === "/sidebarhidden/lichsudongbothietbi" ||
                      activeLink === "/sidebarhidden/thang3baocao" ||
                      // trang khacs

                      activeLink === "/sidebarhidden/dachotdoisoat" ||
                      activeLink === "/sidebarhidden/p11chitietdoanhthu" ||
                      // trang khác
                      activeLink === "/sidebarhidden/chitietdoanhthu"
                        ? "active icon-snapedit_1712730087688 side6"
                        : "icon-snapedit_1712730087688 side6"
                    }
                  >
                    <span className="path1" />
                    <span className="path2" />
                    <span className="path3" />
                    <span className="path4" />
                    <span className="path5" />
                    <span className="path6" />
                    <span className="path7" />
                    <span className="path8" />
                    <span className="path9" />
                    <span className="path10" />
                    <span className="path11" />
                    <span className="path12" />
                    <span className="path13" />
                    <span className="path14" />
                    <span className="path15" />
                    <span className="path16" />
                    <span className="path17" />
                    <span className="path18" />
                    <span className="path19" />
                    <span className="path20" />
                    <span className="path21" />
                    <span className="path22" />
                  </span>
                </span>
                <p className="side7">Doanh thu </p>
                <i className="fa-solid fa-ellipsis-vertical side10"></i>
                <div
                  id="list1"
                  className={`side11 dropdown-check-list ${
                    isCheckListVisible ? "visible" : ""
                  }`}
                  tabIndex={100}
                  style={{ width: 185 }}
                >
                  <span className="anchor d-none"></span>
                  <ul
                    className="items"
                    style={{ textAlign: "left", paddingLeft: 24 }}
                  >
                    <li>
                      <a href="/sidebardefault/chartbaocaodoanhthu">
                        Báo cáo doanh thu
                      </a>
                    </li>
                    <li>
                      <a href="/sidebardefault/lichsudoisoatdoanhthu">
                        Lịch sử đối soát
                      </a>
                    </li>
                    <li>
                      <a href="/sidebardefault/quanlyphanphoidoanhthu">
                        Phân phối doanh thu
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={
                  activeLink === "/sidebarhidden/p12themnguoidungmoi" ||
                  activeLink === "/sidebarhidden/phanquyencapnhatttnguoidung" ||
                  activeLink === "/sidebarhidden/phanquyennguoidungcapnhat" ||
                  activeLink === "/sidebarhidden/themvaitronguoidung"
                    ? // trang khác

                      "active side9"
                    : "side9"
                }
                onMouseMove={toggleCheckList2}
                onMouseOut={() => setCheckListVisible2(false)}
              >
                <div
                  className={
                    activeLink === "/sidebarhidden/p12themnguoidungmoi" ||
                    activeLink ===
                      "/sidebarhidden/phanquyencapnhatttnguoidung" ||
                    activeLink === "/sidebarhidden/phanquyennguoidungcapnhat" ||
                    activeLink === "/sidebarhidden/themvaitronguoidung"
                      ? "d-block"
                      : "d-none"
                  }
                >
                  <ActiveBar />
                </div>
                <span className="kichSetting">
                  <span
                    className={
                      activeLink === "/sidebarhidden/p12themnguoidungmoi" ||
                      activeLink ===
                        "/sidebarhidden/phanquyencapnhatttnguoidung" ||
                      activeLink ===
                        "/sidebarhidden/phanquyennguoidungcapnhat" ||
                      activeLink === "/sidebarhidden/themvaitronguoidung"
                        ? "active icon-Setting-icon-2-1 side6"
                        : "icon-Setting-icon-2-1 side6"
                    }
                  >
                    <span className="path1" />
                    <span className="path2" />
                    <span className="path3" />
                    <span className="path4" />
                    <span className="path5" />
                    <span className="path6" />
                    <span className="path7" />
                    <span className="path8" />
                    <span className="path9" />
                    <span className="path10" />
                    <span className="path11" />
                    <span className="path12" />
                    <span className="path13" />
                    <span className="path14" />
                    <span className="path15" />
                    <span className="path16" />
                    <span className="path17" />
                    <span className="path18" />
                    <span className="path19" />
                    <span className="path20" />
                    <span className="path21" />
                    <span className="path22" />
                    <span className="path23" />
                    <span className="path24" />
                    <span className="path25" />
                    <span className="path26" />
                    <span className="path27" />
                    <span className="path28" />
                    <span className="path29" />
                    <span className="path30" />
                    <span className="path31" />
                    <span className="path32" />
                    <span className="path33" />
                    <span className="path34" />
                    <span className="path35" />
                    <span className="path36" />
                    <span className="path37" />
                    <span className="path38" />
                    <span className="path39" />
                    <span className="path40" />
                    <span className="path41" />
                    <span className="path42" />
                    <span className="path43" />
                    <span className="path44" />
                    <span className="path45" />
                    <span className="path46" />
                    <span className="path47" />
                    <span className="path48" />
                    <span className="path49" />
                    <span className="path50" />
                    <span className="path51" />
                    <span className="path52" />
                    <span className="path53" />
                    <span className="path54" />
                    <span className="path55" />
                    <span className="path56" />
                    <span className="path57" />
                    <span className="path58" />
                    <span className="path59" />
                    <span className="path60" />
                    <span className="path61" />
                    <span className="path62" />
                    <span className="path63" />
                    <span className="path64" />
                    <span className="path65" />
                    <span className="path66" />
                    <span className="path67" />
                    <span className="path68" />
                    <span className="path69" />
                    <span className="path70" />
                    <span className="path71" />
                    <span className="path72" />
                    <span className="path73" />
                    <span className="path74" />
                    <span className="path75" />
                    <span className="path76" />
                    <span className="path77" />
                    <span className="path78" />
                    <span className="path79" />
                    <span className="path80" />
                    <span className="path81" />
                    <span className="path82" />
                    <span className="path83" />
                    <span className="path84" />
                    <span className="path85" />
                    <span className="path86" />
                    <span className="path87" />
                    <span className="path88" />
                    <span className="path89" />
                    <span className="path90" />
                    <span className="path91" />
                    <span className="path92" />
                    <span className="path93" />
                    <span className="path94" />
                    <span className="path95" />
                    <span className="path96" />
                    <span className="path97" />
                  </span>
                </span>
                <p className="side7">Cài đặt</p>
                <i className="fa-solid fa-ellipsis-vertical side10"></i>
                <div
                  id="list1"
                  className={`side11 dropdown-check-list ${
                    isCheckListVisible2 ? "visible" : ""
                  }`}
                  tabIndex={100}
                  style={{ width: 216 }}
                >
                  <span className="anchor d-none"></span>
                  <ul
                    className="items"
                    style={{ textAlign: "left", paddingLeft: 24 }}
                  >
                    <li>
                      <a href="/sidebardefault/phanquyennguoidung">
                        Phân quyền người dùng
                      </a>
                    </li>
                    <li>
                      <a href="/sidebardefault/caidatcauhinh">Cấu hình</a>
                    </li>
                    <li>
                      <a href="/sidebardefault/canhbaohethantacpham">
                        Quản lý hợp đồng
                      </a>
                    </li>
                    <li>
                      <a href="/sidebardefault/caidatcauhinhthongtintacpham">
                        Thông tin tác phẩm
                      </a>
                    </li>
                    <li>
                      <a href="/sidebardefault/doisoattheothang">
                        Chu kì đối soát
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="side9"
                onMouseMove={toggleCheckList3}
                onMouseOut={() => setCheckListVisible3(false)}
              >
                <div
                  className={
                    activeLink === "/sidebardefault/feedback" ||
                    activeLink === "/sidebardefault/taiapp" ||
                    activeLink === "/sidebardefault/feedbackthu" ||
                    activeLink === "/sidebardefault/feedbackadmin" ||
                    activeLink === "/sidebardefault/huongdansudung"
                      ? "d-block"
                      : "d-none"
                  }
                >
                  <ActiveBar />
                </div>
                <span className="kichSupport">
                  <span className="icon-Support-1 side6">
                    <span className="path1" />
                    <span className="path2" />
                    <span className="path3" />
                    <span className="path4" />
                    <span className="path5" />
                    <span className="path6" />
                    <span className="path7" />
                    <span className="path8" />
                    <span className="path9" />
                    <span className="path10" />
                    <span className="path11" />
                    <span className="path12" />
                    <span className="path13" />
                    <span className="path14" />
                    <span className="path15" />
                    <span className="path16" />
                    <span className="path17" />
                    <span className="path18" />
                    <span className="path19" />
                    <span className="path20" />
                    <span className="path21" />
                    <span className="path22" />
                    <span className="path23" />
                    <span className="path24" />
                    <span className="path25" />
                    <span className="path26" />
                    <span className="path27" />
                    <span className="path28" />
                    <span className="path29" />
                    <span className="path30" />
                    <span className="path31" />
                    <span className="path32" />
                    <span className="path33" />
                    <span className="path34" />
                    <span className="path35" />
                    <span className="path36" />
                    <span className="path37" />
                    <span className="path38" />
                    <span className="path39" />
                    <span className="path40" />
                    <span className="path41" />
                    <span className="path42" />
                    <span className="path43" />
                    <span className="path44" />
                    <span className="path45" />
                    <span className="path46" />
                    <span className="path47" />
                    <span className="path48" />
                    <span className="path49" />
                    <span className="path50" />
                    <span className="path51" />
                    <span className="path52" />
                    <span className="path53" />
                    <span className="path54" />
                    <span className="path55" />
                    <span className="path56" />
                    <span className="path57" />
                    <span className="path58" />
                    <span className="path59" />
                    <span className="path60" />
                    <span className="path61" />
                    <span className="path62" />
                    <span className="path63" />
                    <span className="path64" />
                    <span className="path65" />
                  </span>
                </span>
                <p className="side7">Hỗ trợ</p>
                <i className="fa-solid fa-ellipsis-vertical side10"></i>
                <div
                  id="list1"
                  className={`side11 dropdown-check-list ${
                    isCheckListVisible3 ? "visible" : ""
                  }`}
                  tabIndex={100}
                  style={{ width: 194 }}
                >
                  <span className="anchor d-none"></span>
                  <ul
                    className="items"
                    style={{ textAlign: "left", paddingLeft: 24 }}
                  >
                    <li>
                      <a href="/sidebardefault/huongdansudung">
                        Hướng dẫn sử dụng
                      </a>
                    </li>
                    <li>
                      <a href="/sidebardefault/taiapp">Tải App</a>
                    </li>
                    <li>
                      <a href="/sidebardefault/feedback">feedback</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="side14" onClick={handleNavbar}></div>
          </div>
        </div>
      )}
    </>
  );
};
export default SideBar;
