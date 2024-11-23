import "../cssne/Trang1.css";
import DoiMatKhauModal from "./Modal/DoiMatKhauModal";

const Trang1: React.FC = () => {
  return (
    <>
      <div className="ttcb">Thông tin cơ bản</div>
      <div className="khung">
        <div
          style={{
            width: "280px",
            height: "351px",
          }}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/admin.jpg?alt=media&token=9a625f88-689d-48e4-82fb-d19827df0ae2"
            alt="admin"
            style={{
              width: "273px",
              height: "280px",
              left: "2px",
              borderRadius: "200px",
            }}
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/camera.png?alt=media&token=df988c9c-0d25-4916-bfdf-53a5c6e4b39d"
            alt="camera"
            className="avt"
          />
          <p className="ten">Tuyết Nguyễn</p>
        </div>
        <div
          style={{
            width: "274px",
            height: "80px",
            left: "447px",
            gap: "8px",
            top: "0PX",
            position: "absolute",
          }}
        >
          <div className="lablee">Họ:</div>
          <input type="text" defaultValue="Nguyễn" className="inputt" />
        </div>
        <div
          style={{
            width: "274px",
            height: "80px",
            left: "745px",
            gap: "8px",
            top: "0PX",

            position: "absolute",
          }}
        >
          <div className="lablee">Tên:</div>
          <input type="text" defaultValue="Tuyết" className="inputt" />
        </div>
        <div
          style={{
            width: "274px",
            height: "80px",
            left: "447px",
            gap: "8px",
            top: "112px",
            position: "absolute",
          }}
        >
          <div className="lablee">Ngày sinh:</div>
          <input type="date" defaultValue="1998-02-02" className="inputt" />
        </div>
        <div
          style={{
            width: "274px",
            height: "80px",
            left: "745px",
            gap: "8px",
            top: "112px",
            position: "absolute",
          }}
        >
          <div className="lablee">Số điện thoại:</div>
          <input type="tel" defaultValue="+84 250 123 151" className="inputt" />
        </div>
        <div
          style={{
            width: "571px",
            height: "80px",
            left: "447px",
            gap: "8px",
            top: "224px",
            position: "absolute",
          }}
        >
          <div className="lablee">Email:</div>
          <input
            type="text"
            placeholder="tuyetnguyenngoc@alta.com.vn"
            className="input1"
            readOnly
          />
        </div>
        <div
          style={{
            width: "571px",
            height: "80px",
            left: "447px",
            gap: "8px",
            top: "336px",
            position: "absolute",
          }}
        >
          <div className="lablee">Tên đăng nhập:</div>
          <input
            type="text"
            placeholder="tuyetnguyenngoc@alta.com.vn"
            className="input1"
            readOnly
          />
        </div>
        <div
          style={{
            width: "274px",
            height: "80px",
            left: "447px",
            gap: "8px",
            top: "448px",
            position: "absolute",
          }}
        >
          <div className="lablee">Phân quyền:</div>
          <input type="text" placeholder="admin" className="inputt" readOnly />
        </div>
      </div>
      <div className="khung2">
        <div className="khung1">
          <a href="/suathongtin" style={{ textDecoration: "none" }}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/sua.png?alt=media&token=07d2553b-bef0-4a7d-a19e-ecf50f43bdaa"
              alt="sua"
            />
            <div className="textt">
              Sửa thông <br /> tin
            </div>
          </a>
        </div>
        <div className="khung1">
          <div data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/doimk.png?alt=media&token=850b2fa5-39a9-4626-8df0-2168fa5de47a"
              alt="doimk"
            />
            <div className="textt">
              Đổi <br /> mật khẩu
            </div>
          </div>
        </div>
        <div
          style={{
            width: "110px",
            height: "112px",
            padding: "16px",
            gap: "10px",
          }}
        >
          <a href="/">
            {" "}
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/dangxuat.png?alt=media&token=70f23a93-e521-4866-ac18-f5aac92d49c4"
              alt="dangxuat"
              style={{ marginLeft: "15px" }}
            />
            <div className="dangxuat">Đăng xuất</div>
          </a>
        </div>
      </div>
      {/* showModal     */}
      <DoiMatKhauModal />
    </>
  );
};

export default Trang1;
