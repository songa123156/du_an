import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const DoiMatKhauModal = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{
            display: "flex",
          }}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: "#3E3E5B",
              width: "552px",
              height: "512px",
              borderRadius: "16px",
            }}
          >
            <div className="modal-body">
              <h5
                className="modal-title m-0"
                id="exampleModalLabel"
                style={{
                  width: "100%",
                  height: "24px",
                  top: "32px",
                  left: "159px",
                  fontFamily: "Montserrat",
                  fontSize: "24px",
                  fontWeight: 700,
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "center",
                  color: "#F5F5FF",
                }}
              >
                Thay đổi mật khẩu
              </h5>
              <div>
                <div className="matkhau">Mật khẩu hiện tại:</div>
                <div
                  className="password-input-wrapper"
                  style={{ position: "relative" }}
                >
                  <input
                    className="inputmk"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <FontAwesomeIcon
                    className="faEyee"
                    icon={showPassword ? faEyeSlash : faEye}
                    onClick={toggleShowPassword}
                  />
                </div>
              </div>

              <div>
                <div className="matkhau">Mật khẩu mới:</div>
                <div
                  className="password-input-wrapper"
                  style={{ position: "relative" }}
                >
                  <input
                    className="inputmk"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />

                  <FontAwesomeIcon
                    className="faEyee"
                    icon={showPassword ? faEyeSlash : faEye}
                    onClick={toggleShowPassword}
                  />
                </div>
              </div>
              <div>
                <div className="matkhau">Nhập lại mật khẩu mới:</div>
                <div
                  className="password-input-wrapper"
                  style={{ position: "relative" }}
                >
                  <input
                    className="inputmk"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />

                  <FontAwesomeIcon
                    className="faEyee"
                    icon={showPassword ? faEyeSlash : faEye}
                    onClick={toggleShowPassword}
                  />
                </div>
              </div>
              <div>
                <div
                  style={{
                    width: "368px",
                    height: "48px",
                    top: "424px",
                    left: "92px",
                    gap: "32px",
                    position: "absolute",
                  }}
                >
                  <button
                    className="butoon"
                    style={{
                      color: "#FF7506",
                    }}
                    data-bs-dismiss="modal"
                  >
                    Hủy
                  </button>
                  <button
                    className="butoon"
                    style={{
                      color: "white",
                      background: "#FF7506",
                      marginLeft: "32px",
                    }}
                    data-bs-dismiss="modal"
                  >
                    Lưu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoiMatKhauModal;
