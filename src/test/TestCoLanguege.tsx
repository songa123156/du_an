import React, { useState } from "react";
import "./css.css";

function TestCoLanguege() {
  const [isCheckListVisible, setCheckListVisible] = useState(false);

  const [tenFlag, setTenFlag] = useState("Tiếng Việt");
  const [Flag, setFlag] = useState("vietnam");
  const imagePath = `Icons/${Flag}.png`;

  const toggleCheckList = () => {
    setCheckListVisible(!isCheckListVisible);
  };
  return (
    <>
      <div className="CoCuaAi">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "170px",
            height: "1080px",
            background: "#020220",
            color: "white",
            top: "-8251px",
            left: "-3190px",
          }}
        >
          <img
            src="images/logo.png"
            alt=""
            style={{
              width: "96px",
              height: "96px",
              margin: "39px 21px 0px 34px",
            }}
          />
          <div
            style={{
              width: "170px",
              height: "72px",
              marginTop: "110px",
            }}
          >
            <img
              src="images/banghi.png"
              alt=""
              style={{
                width: "32px",
                height: "32px",
                margin: "12px 69px 0px 69px",
              }}
            />
            <p
              style={{
                width: "84px",
                height: "17px",
                left: "41px",
                fontFamily: "Montserrat",
                fontSize: "14px",
                letterSpacing: "0.015em",
                textAlign: "center",
                marginTop: "2px",
                position: "absolute",
              }}
            >
              Kho bài hát
            </p>
          </div>
          <div
            style={{
              width: "170px",
              height: "72px",
              marginTop: "24px",
            }}
          >
            <img
              src="images/Playlist.png"
              alt=""
              style={{
                width: "32px",
                height: "32px",
                margin: "12px 69px 0px 69px",
              }}
            />
            <p
              style={{
                width: "84px",
                height: "17px",
                left: "41px",
                fontFamily: "Montserrat",
                fontSize: "14px",
                letterSpacing: "0.015em",
                textAlign: "center",
                marginTop: "2px",
                position: "absolute",
              }}
            >
              Playlist
            </p>
          </div>
          <div
            style={{
              width: "170px",
              height: "72px",
              marginTop: "24px",
            }}
          >
            <img
              src="images/calendar.png"
              alt=""
              style={{
                width: "32px",
                height: "32px",
                margin: "12px 69px 0px 69px",
              }}
            />
            <p
              style={{
                width: "84px",
                height: "17px",
                left: "41px",
                fontFamily: "Montserrat",
                fontSize: "14px",
                letterSpacing: "0.015em",
                textAlign: "center",
                marginTop: "2px",
                position: "absolute",
              }}
            >
              Lập lịch phát
            </p>
          </div>
          <div
            style={{
              width: "170px",
              height: "72px",
              marginTop: "24px",
            }}
          >
            <img
              src="images/quanly.png"
              alt=""
              style={{
                width: "32px",
                height: "32px",
                margin: "12px 69px 0px 69px",
              }}
            />
            <p
              style={{
                width: "84px",
                height: "17px",
                left: "41px",
                fontFamily: "Montserrat",
                fontSize: "14px",
                letterSpacing: "0.015em",
                textAlign: "center",
                marginTop: "2px",
                position: "absolute",
              }}
            >
              Quản lý
            </p>
          </div>
          <div
            style={{
              width: "170px",
              height: "72px",
              marginTop: "24px",
            }}
          >
            <img
              src="images/doanhthu.png"
              alt=""
              style={{
                width: "32px",
                height: "32px",
                margin: "12px 69px 0px 69px",
              }}
            />
            <p
              style={{
                width: "84px",
                height: "17px",
                left: "41px",
                fontFamily: "Montserrat",
                fontSize: "14px",
                letterSpacing: "0.015em",
                textAlign: "center",
                marginTop: "2px",
                position: "absolute",
              }}
            >
              Doanh thu
            </p>
          </div>
          <div
            style={{
              width: "170px",
              height: "72px",
              marginTop: "24px",
            }}
          >
            <img
              src="images/Setting.png"
              alt=""
              style={{
                width: "32px",
                height: "32px",
                margin: "12px 69px 0px 69px",
              }}
            />
            <p
              style={{
                width: "84px",
                height: "17px",
                left: "41px",
                fontFamily: "Montserrat",
                fontSize: "14px",
                letterSpacing: "0.015em",
                textAlign: "center",
                marginTop: "2px",
                position: "absolute",
              }}
            >
              Cài đặt
            </p>
          </div>
          <div
            style={{
              width: "170px",
              height: "72px",
              marginTop: "24px",
            }}
          >
            <img
              src="images/Support.png"
              alt=""
              style={{
                width: "32px",
                height: "32px",
                margin: "12px 69px 0px 69px",
              }}
            />
            <p
              style={{
                width: "84px",
                height: "17px",
                left: "41px",
                fontFamily: "Montserrat",
                fontSize: "14px",
                letterSpacing: "0.015em",
                textAlign: "center",
                marginTop: "2px",
                position: "absolute",
              }}
            >
              Hỗ trợ
            </p>
          </div>
        </div>

        {/* <div
          style={{
            width: "143px",
            height: "40px",
            top: "100px",
            left: "1375px",
            border: "1px solid white",
            position: "absolute",
            justifyItems: "center",
          }}
        >
          <div
            style={{
              width: 73,
              height: "100%",
              color: "white",
              display: "inline",
              position: "absolute",
            }}
          >
            Tiếng việt
          </div>
          <select
            id="country-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{
              height: "100%",
              width: 143,
              color: "transparent",
              display: "inline",
            }}
          >
            <option value="vn">Tieeg Việt</option>
            <option value="us">Tiếng Anh</option>
            <option value="fr">Tieegns Phpas</option>
          </select>
        </div> */}
        {/* <select
          style={{ position: "absolute", top: 30, left: 1000 }}
          name=""
          id=""
        >
          <option value="">
            tiếng việt <i className="flag flag-vietnam"></i>
          </option>
          <option value="">
            tiếng anh <i className="flag flag-england"></i>
          </option>
        </select> */}

        <div className="side1">
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
                isCheckListVisible ? "visible side2" : "side2"
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
                <div>
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
                    toggleCheckList();
                    setTenFlag("Tiếng Việt");
                    setFlag("vietnam");
                  }}
                >
                  Tiếng Việt
                  <img
                    src="Icons/vietnam.png"
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
                    toggleCheckList();
                    setTenFlag("Tiếng Nhật");
                    setFlag("japan");
                  }}
                >
                  Tiếng Nhật
                  <img
                    src="Icons/japan.png"
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
                    toggleCheckList();
                    setTenFlag("Tiếng Anh");
                    setFlag("united-kingdom");
                  }}
                >
                  Tiếng Anh
                  <img
                    src="Icons/united-kingdom.png"
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
      </div>
    </>
  );
}

export default TestCoLanguege;
