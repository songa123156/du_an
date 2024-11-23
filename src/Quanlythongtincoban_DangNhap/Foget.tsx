import { useState } from "react";
import { Link } from "react-router-dom";
import LanguageAndLogoImage from "../BackGround/Phan1/LanguageAndLogoImage";
import "./css/Foget.css";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { createBrowserHistory } from "history";

const Forget = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const history = createBrowserHistory();
  function generateOobCode() {
    return Math.floor(Math.random() * 100000)
      .toString()
      .padStart(5, "0");
  }

  const [oobCode, setOobCode] = useState(generateOobCode());

  const xacnhan = async (event: any) => {
    setErrorMessage("");

    history.push("/KPMK", {
      url: window.location.href,
    });
  };
  const validateForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Ngăn chặn form submit tự động

    const form = event.currentTarget as HTMLFormElement; // Ép kiểu currentTarget thành HTMLFormElement

    // Ép kiểu các phần tử thành các phần tử đầu vào cụ thể
    const usernameInput = form.elements.namedItem(
      "username"
    ) as HTMLInputElement;

    // Lấy giá trị của các trường đầu vào
    const username = usernameInput.value;
    // Admin SDK API to generate the password reset link.
    // console.log(window.location.search);
    // const auth = getAuth();
    // sendPasswordResetEmail(auth, username)
    //   .then(() => {
    //     // Password reset email sent
    //   })
    //   .catch((error) => {
    //     // An error occurred
    //   });

    // Kiểm tra xem tên đăng nhập và mật khẩu đã được nhập hay chưa
    if (username === "") {
      setErrorMessage("Vui lòng nhập tên đăng nhập và mật khẩu.");
    } else {
      // Nếu đã nhập đầy đủ, tiến hành submit form
      form.submit();
    }
  };
  return (
    <>
      <LanguageAndLogoImage />
      <form action="" method="get" onSubmit={validateForm}>
        <div className="textTitle">Khôi phục mật khẩu</div>
        <div className="BoxThongBao">
          <div className="ThongBao">
            Vui lòng nhập địa chỉ email đã đăng ký để yêu cầu khôi phục mật khẩu
          </div>
          <div className="textMotCot">
            <div className="TextEmail">Email</div>
            <div className="BoxInput">
              <input
                name="username"
                type="text"
                id="username"
                className="InputEmail"
              />
            </div>
            <div className="d-none">
              <input name="oobCode" type="text" value={oobCode} readOnly />
            </div>
            <div className="textError" id="error-message">
              {errorMessage}
            </div>
          </div>
        </div>
        <div className="BoxBtnDangNhap">
          <button
            onClick={(event) => xacnhan(event)}
            className="ButtonDangNhap"
            type="submit"
          >
            Xác nhận
          </button>
        </div>
      </form>
      <div className="BoxQuenMK">
        <Link to="/Foget" className="QuenMK">
          Quay lại đăng nhập
        </Link>
      </div>
    </>
  );
};

export default Forget;
