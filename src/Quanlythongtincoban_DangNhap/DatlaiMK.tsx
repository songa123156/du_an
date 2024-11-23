import { useState } from "react";
import "./css/Log.css";
import LanguageAndLogoImage from "../BackGround/Phan1/LanguageAndLogoImage";
import { useSearchParams } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCsUfykyE1L-VyuIFX_89jYEEPG1MYFLi4",
  authDomain: "duan-ede31.firebaseapp.com",
};
firebase.initializeApp(config);

const DaMK = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [searchParams] = useSearchParams();

  const queryUsername = searchParams.get("username");
  const oobCode = searchParams.get("oobCode");

  async function handleResetPassword(event: any) {
    event.preventDefault();

    try {
      const oobCode = event.target.elements.oobCode.value;
      const newPassword = event.target.elements.password.value;
      await firebase.auth().confirmPasswordReset(oobCode, newPassword);
      console.log("Password reset successful");
    } catch (error) {
      console.error("Error resetting password:", error);
    }
  }

  // Show password
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const [showPasswordcomfirm, setShowPasswordcomfirm] = useState(false);

  const handleTogglePasswordcomfirm = () => {
    setShowPasswordcomfirm(!showPasswordcomfirm);
  };
  return (
    <>
      <LanguageAndLogoImage />
      <form onSubmit={handleResetPassword}>
        <div className="textTitle">Đặt lại mật khẩu</div>
        <div className="textDangNhap">
          <div className="textMotCot">
            <div>
              <div className="textTaiKhoanMK">Password</div>
              <div className="BoxInputTaiKhoanMK">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="InputTaiKhoanMK"
                />
                <div className="BoxEyePassword" onClick={handleTogglePassword}>
                  {showPassword ? (
                    <i
                      style={{ color: "#FF7506" }}
                      className="far fa-eye-slash"
                    ></i>
                  ) : (
                    <i style={{ color: "#FF7506" }} className="far fa-eye"></i>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* comfirm password */}

        <div className="textDangNhap textPassword">
          <div className="textMotCot">
            <div>
              <div className="textTaiKhoanMK">Password</div>
              <div className="BoxInputTaiKhoanMK">
                <input
                  id="password"
                  type={showPasswordcomfirm ? "text" : "password"}
                  name="password"
                  className="InputTaiKhoanMK"
                />
                <div
                  className="BoxEyePassword"
                  onClick={handleTogglePasswordcomfirm}
                >
                  {showPasswordcomfirm ? (
                    <i className="far fa-eye-slash"></i>
                  ) : (
                    <i className="far fa-eye"></i>
                  )}
                </div>
              </div>
            </div>
            <div className="textError" id="error-message">
              {errorMessage}
            </div>

            <div className="text-center mt-5">
              <button className="Button-DangNhap" type="submit">
                Lưu mật khẩu
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default DaMK;
