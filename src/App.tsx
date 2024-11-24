import React, { useState } from "react";
import "./App.css";
import Log from "./Quanlythongtincoban_DangNhap/Log";
import { Routes, Route } from "react-router-dom";
import Forget from "./Quanlythongtincoban_DangNhap/Foget";
import DaMK from "./Quanlythongtincoban_DangNhap/DatlaiMK";
import DanhSachHopDong from "./HopDongUyQuyen/DanhSachHopDong";
import ChiTietHopDong from "./HopDongUyQuyen/ChiTietHopDong";
import Trang1 from "./Quanlythongtincoban/Navbar";
import SuaThongTin from "./Quanlythongtincoban/suathongtin";
import LoiLink from "./Quanlythongtincoban_DangNhap/loilink";
import KhoiPhucMK from "./Quanlythongtincoban_DangNhap/khoiphucmk";
import TacPhamUyQuyen from "./HopDongUyQuyen/TacPhamUyQuyen";
import ChinhSuaTacPham from "./HopDongUyQuyen/ChinhSuaTacPham";
import ChinhSuaThongTin from "./HopDongUyQuyen/ChinhSuaThongTin";
import ChiTietHopDong2 from "./HopDongUyQuyen/ChiTietHopDong2";
import ThemHopDongUyQuyen from "./HopDongUyQuyen/ThemHopDongUyQuyen";
import ThemHopDongUyQuyen2 from "./HopDongUyQuyen/ThemHopDongUyQuyen2";
import ThemBanGhi from "./HopDongUyQuyen/ThemBanGhi";
import DanhSachHopDongKhaiThac from "./HopDongKhaiThac/DanhSachHopDongKhaiThac";
import ChiTiepHopDongKhaiThac from "./HopDongKhaiThac/ChiTiepHopDongKhaiThac";
import SaoChepHopDong from "./HopDongKhaiThac/SaoChepHopDong";
import ChinhSuaHopDong from "./HopDongKhaiThac/ChinhSuaHopDong";
import ThemHopDongMoi from "./HopDongKhaiThac/ThemHopDongMoi";
import DanhSachLichPhat from "./LapLichPhat/DanhSachLichPhat";
import ChiTietLichPhat from "./LapLichPhat/ChiTietLichPhat";
import ChinhSuaLichPhat from "./LapLichPhat/ChinhSuaLichPhat";
import ApLichChoThietBi from "./LapLichPhat/ApLichChoThietBi";
import ThemLichPhatMoi from "./LapLichPhat/ThemLichPhatMoi";
import DonViSuDung from "./DonViSuDung/DonViSuDung";
import ChiTietP6 from "./DonViSuDung/ChiTietP6";
import ThemNguoiDung from "./DonViSuDung/ThemNguoiDung";
import ThongTinNguoiDung from "./DonViSuDung/ThongTinNguoiDung";
import ChinhSuaTTNguoiDung from "./DonViSuDung/ChinhSuaTTNguoiDung";
import DanhSachThietBi from "./DanhSachThietBi/DanhSachThietBi";
import P8ThemThietBiMoi from "./DanhSachThietBi/P8ThemThietBiMoi";
import ChiTietThieBiP8 from "./DanhSachThietBi/ChiTietThieBiP8";
import DanhSachDoiTacUyQuyen from "./DoiTacUyQuyen/DanhSachDoiTacUyQuyen";
import CapNhatThongTin from "./DoiTacUyQuyen/CapNhatThongTin";
import QuanLyPhanPhoiDoanhThu from "./Quanlyphanphoidoanhthu/QuanLyPhanPhoiDoanhThu";
import ChiTietDoanhThu from "./Quanlyphanphoidoanhthu/ChiTietDoanhThu";
import LichSuDoiSoatDoanhThu from "./Lichsudoisoat/LichSuDoiSoatDoanhThu";
import P11ChiTietDoanhThu from "./Lichsudoisoat/P11ChiTietDoanhThu";
import DaChotDoiSoat from "./Lichsudoisoat/DaChotDoiSoat";
import DoanhThuHopDongKhaiThac from "./BaocaodanhchoVCPMC/DoanhThuHopDongKhaiThac";
import BaoCaoChiTiet from "./BaocaodanhchoVCPMC/BaoCaoChiTiet";
import Thang3BaoCao from "./BaocaodanhchoVCPMC/Thang3BaoCao";
import LichSuDongBoThietBi from "./BaocaodanhchoVCPMC/LichSuDongBoThietBi";
import ChartBaoCaoDoanhThu from "./BaocaodanhchoVCPMC/ChartBaoCaoDoanhThu";
import PhanQuyenNguoiDung from "./Phanquyennguoidung/PhanQuyenNguoiDung";
import PhanQuyenCapNhatTTNguoiDung from "./Phanquyennguoidung/PhanQuyenCapNhatTTNguoiDung";
import P12ThemNguoiDungMoi from "./Phanquyennguoidung/P12ThemNguoiDungMoi";
import VaiTroNguoiDungTrenHeThong from "./Phanquyennguoidung/VaiTroNguoiDungTrenHeThong";
import PhanQuyenNguoiDungCapNhat from "./Phanquyennguoidung/PhanQuyenNguoiDungCapNhat";
import ThemVaiTroNguoiDung from "./Phanquyennguoidung/ThemVaiTroNguoiDung";
import CaiDatCauHinh from "./Caidathethong/CaiDatCauHinh";
import CaiDatCauHinhThongTinTacPham from "./Caidathethong/CaiDatCauHinhThongTinTacPham";
import ChinhSuaThongTinTacPhamP13 from "./Caidathethong/ChinhSuaThongTinTacPhamP13";
import QuanLyLoaiHopDong from "./Caidathethong/QuanLyLoaiHopDong";
import CanhBaoHetHanTacPham from "./Caidathethong/CanhBaoHetHanTacPham";
import LoaiHopDong3 from "./Caidathethong/LoaiHopDong3";
import DoiSoatTheoThang from "./Caidathethong/DoiSoatTheoThang";
import P13ThongTinTacPham from "./Caidathethong/P13ThongTinTacPham";
import TaiApp from "./Hotro/TaiApp";
import Feedback from "./Hotro/Feedback";
import FeedbackAdmin from "./Hotro/FeedbackAdmin";
import FeedbackThu from "./Hotro/FeedbackThu";
import HuongDanSuDung from "./Hotro/HuongDanSuDung";
import ThemBanGhiPlayList from "./QuanlyPlaylist/ThemBanGhiPlayList";
import TestCheckBoxKichHoat from "./test/TestCheckBoxKichHoat";
import DropDown from "./test/DropDown";
import TestCoLanguege from "./test/TestCoLanguege";
import CTBangGhi from "./Quanlykhobanghi/CTBangGhi";
import KhoBangGhi from "./Quanlykhobanghi/KhoBangGhi";
import KhoBangGhi1 from "./Quanlykhobanghi/KhoBangGhi1";
import PheDuyetBG from "./Quanlykhobanghi/PheDuyetBG";
import PheDuyetBG1 from "./Quanlykhobanghi/PheDuyetBG2";
import DSPlayList from "./QuanlyPlaylist/DSPlaylist";
import DSPlayList1 from "./QuanlyPlaylist/DSPlaylist1";
import PlayListTop from "./QuanlyPlaylist/PlaylistTop";
import SuaPlayList from "./QuanlyPlaylist/SuaPlaylist";
import ThemPlayList from "./QuanlyPlaylist/ThemPlaylist";
import SelectWithHover from "./test/TestSelect";
import SideBar from "./BackGround/SideBar";
// import Resetpass from "./test/testConfirmMail";

function App() {
  const path = window.location.pathname.toLowerCase();
  const desiredPath = path.split("/")[1];
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflowY: "auto",
          backgroundColor: "#1E1E2E",
        }}
      >
        <div style={{ width: "100%", display: "flex" }}>
          <Routes>
            <Route path="/" element={<Log />}></Route>
            <Route path="/foget" element={<Forget />}></Route>
            <Route path="/KPMK" element={<KhoiPhucMK />}></Route>
            <Route path="/loilink" element={<LoiLink />}></Route>
            <Route path="/Datlaimatkhau" element={<DaMK />}></Route>

            <Route
              path="/TestCheckBoxKichHoat"
              element={<TestCheckBoxKichHoat />}
            ></Route>

            <Route path="/DropDown" element={<DropDown />}></Route>
            <Route path="/TestCoLanguege" element={<TestCoLanguege />}></Route>

            <Route
              path="/SelectWithHover"
              element={<SelectWithHover />}
            ></Route>
            {/* <Route path="/testConfirmMail" element={<Resetpass />}></Route> */}
          </Routes>

          {desiredPath === "sidebardefault" && <SideBar value={1} />}

          <Routes>
            <Route path="/SideBarDefault/navbar" element={<Trang1 />}></Route>
            <Route
              path="/SideBarDefault/DShopdong"
              element={<DanhSachHopDong />}
            ></Route>
            <Route
              path="/SideBarDefault/suathongtin"
              element={<SuaThongTin />}
            ></Route>
            <Route
              path="/SideBarDefault/DanhSachHopDongKhaiThac"
              element={<DanhSachHopDongKhaiThac />}
            ></Route>
            <Route
              path="/SideBarDefault/DanhSachLichPhat"
              element={<DanhSachLichPhat />}
            ></Route>
            <Route
              path="/SideBarDefault/DonViSuDung"
              element={<DonViSuDung />}
            ></Route>
            <Route
              path="/SideBarDefault/DanhSachThietBi"
              element={<DanhSachThietBi />}
            ></Route>
            <Route
              path="/SideBarDefault/DanhSachDoiTacUyQuyen"
              element={<DanhSachDoiTacUyQuyen />}
            ></Route>
            <Route
              path="/SideBarDefault/QuanLyPhanPhoiDoanhThu"
              element={<QuanLyPhanPhoiDoanhThu />}
            ></Route>

            <Route
              path="/SideBarDefault/ChartBaoCaoDoanhThu"
              element={<ChartBaoCaoDoanhThu />}
            ></Route>
            <Route
              path="/SideBarDefault/LichSuDoiSoatDoanhThu"
              element={<LichSuDoiSoatDoanhThu />}
            ></Route>

            <Route
              path="/SideBarDefault/VaiTroNguoiDungTrenHeThong"
              element={<VaiTroNguoiDungTrenHeThong />}
            ></Route>
            <Route
              path="/SideBarDefault/PhanQuyenNguoiDung"
              element={<PhanQuyenNguoiDung />}
            ></Route>

            <Route
              path="/SideBarDefault/CaiDatCauHinh"
              element={<CaiDatCauHinh />}
            ></Route>
            <Route
              path="/SideBarDefault/CaiDatCauHinhThongTinTacPham"
              element={<CaiDatCauHinhThongTinTacPham />}
            ></Route>
            <Route
              path="/SideBarDefault/ChinhSuaThongTinTacPhamP13"
              element={<ChinhSuaThongTinTacPhamP13 />}
            ></Route>
            <Route
              path="/SideBarDefault/QuanLyLoaiHopDong"
              element={<QuanLyLoaiHopDong />}
            ></Route>
            <Route
              path="/SideBarDefault/CanhBaoHetHanTacPham"
              element={<CanhBaoHetHanTacPham />}
            ></Route>
            <Route
              path="/SideBarDefault/LoaiHopDong3"
              element={<LoaiHopDong3 />}
            ></Route>
            <Route
              path="/SideBarDefault/DoiSoatTheoThang"
              element={<DoiSoatTheoThang />}
            ></Route>
            <Route
              path="/SideBarDefault/P13ThongTinTacPham"
              element={<P13ThongTinTacPham />}
            ></Route>
            <Route path="/SideBarDefault/TaiApp" element={<TaiApp />}></Route>
            <Route
              path="/SideBarDefault/Feedback"
              element={<Feedback />}
            ></Route>
            <Route
              path="/SideBarDefault/FeedbackAdmin"
              element={<FeedbackAdmin />}
            ></Route>
            <Route
              path="/SideBarDefault/FeedbackThu"
              element={<FeedbackThu />}
            ></Route>
            <Route
              path="/SideBarDefault/HuongDanSuDung"
              element={<HuongDanSuDung />}
            ></Route>

            <Route
              path="/SideBarDefault/KhoBangGhi"
              element={<KhoBangGhi />}
            ></Route>
            <Route
              path="/SideBarDefault/KhoBangGhi1"
              element={<KhoBangGhi1 />}
            ></Route>

            <Route
              path="/SideBarDefault/PheDuyetBG"
              element={<PheDuyetBG />}
            ></Route>
            <Route
              path="/SideBarDefault/PheDuyetBG1"
              element={<PheDuyetBG1 />}
            ></Route>
            <Route
              path="/SideBarDefault/DSPlaylist"
              element={<DSPlayList />}
            ></Route>
            <Route
              path="/SideBarDefault/DSPlaylist1"
              element={<DSPlayList1 />}
            ></Route>
          </Routes>

          {desiredPath === "sidebarhidden" && <SideBar value={2} />}

          <Routes>
            <Route
              path="/SideBarHidden/ChiTietHopDong"
              element={<ChiTietHopDong />}
            ></Route>
            <Route
              path="/SideBarHidden/TacPhamUyQuyen"
              element={<TacPhamUyQuyen />}
            ></Route>
            <Route
              path="/SideBarHidden/ChinhSuaTacPham"
              element={<ChinhSuaTacPham />}
            ></Route>
            <Route
              path="/SideBarHidden/ChinhSuaThongTin"
              element={<ChinhSuaThongTin></ChinhSuaThongTin>}
            ></Route>
            <Route
              path="/SideBarHidden/ChiTietHopDong2"
              element={<ChiTietHopDong2 />}
            ></Route>
            <Route
              path="/SideBarHidden/ThemHopDongUyQuyen"
              element={<ThemHopDongUyQuyen />}
            ></Route>
            <Route
              path="/SideBarHidden/ThemHopDongUyQuyen2"
              element={<ThemHopDongUyQuyen2 />}
            ></Route>
            <Route
              path="/SideBarHidden/ThemBanGhi"
              element={<ThemBanGhi />}
            ></Route>
            <Route
              path="/SideBarHidden/ChiTiepHopDongKhaiThac"
              element={<ChiTiepHopDongKhaiThac />}
            ></Route>
            <Route
              path="/SideBarHidden/SaoChepHopDong"
              element={<SaoChepHopDong />}
            ></Route>
            <Route
              path="/sidebarhidden/chinhsuahopdong"
              element={<ChinhSuaHopDong />}
            ></Route>
            <Route
              path="/SideBarHidden/ThemHopDongMoi"
              element={<ThemHopDongMoi />}
            ></Route>
            <Route
              path="/SideBarHidden/ChiTietLichPhat"
              element={<ChiTietLichPhat />}
            ></Route>
            <Route
              path="/SideBarHidden/ChinhSuaLichPhat"
              element={<ChinhSuaLichPhat />}
            ></Route>
            <Route
              path="/SideBarHidden/ApLichChoThietBi"
              element={<ApLichChoThietBi />}
            ></Route>
            <Route
              path="/SideBarHidden/ThemLichPhatMoi"
              element={<ThemLichPhatMoi />}
            ></Route>
            <Route
              path="/SideBarHidden/ChiTietP6"
              element={<ChiTietP6 />}
            ></Route>
            <Route
              path="/SideBarHidden/ThemNguoiDung"
              element={<ThemNguoiDung />}
            ></Route>
            <Route
              path="/SideBarHidden/ThongTinNguoiDung"
              element={<ThongTinNguoiDung />}
            ></Route>
            <Route
              path="/SideBarHidden/ChinhSuaTTNguoiDung"
              element={<ChinhSuaTTNguoiDung />}
            ></Route>
            <Route
              path="/SideBarHidden/P8ThemThietBiMoi"
              element={<P8ThemThietBiMoi />}
            ></Route>
            <Route
              path="/SideBarHidden/ChiTietThieBiP8"
              element={<ChiTietThieBiP8 />}
            ></Route>

            <Route
              path="/SideBarHidden/CapNhatThongTin"
              element={<CapNhatThongTin />}
            ></Route>
            <Route
              path="/SideBarHidden/ChiTietDoanhThu"
              element={<ChiTietDoanhThu />}
            ></Route>

            <Route
              path="/SideBarHidden/P11ChiTietDoanhThu"
              element={<P11ChiTietDoanhThu />}
            ></Route>
            <Route
              path="/SideBarHidden/DaChotDoiSoat"
              element={<DaChotDoiSoat />}
            ></Route>
            <Route
              path="/SideBarHidden/DoanhThuHopDongKhaiThac"
              element={<DoanhThuHopDongKhaiThac />}
            ></Route>
            <Route
              path="/SideBarHidden/BaoCaoChiTiet"
              element={<BaoCaoChiTiet />}
            ></Route>
            <Route
              path="/SideBarHidden/Thang3BaoCao"
              element={<Thang3BaoCao />}
            ></Route>
            <Route
              path="/SideBarHidden/LichSuDongBoThietBi"
              element={<LichSuDongBoThietBi />}
            ></Route>
            <Route
              path="/SideBarHidden/PhanQuyenCapNhatTTNguoiDung"
              element={<PhanQuyenCapNhatTTNguoiDung />}
            ></Route>
            <Route
              path="/SideBarHidden/P12ThemNguoiDungMoi"
              element={<P12ThemNguoiDungMoi />}
            ></Route>

            <Route
              path="/SideBarHidden/PhanQuyenNguoiDungCapNhat"
              element={<PhanQuyenNguoiDungCapNhat />}
            ></Route>
            <Route
              path="/SideBarHidden/ThemVaiTroNguoiDung"
              element={<ThemVaiTroNguoiDung />}
            ></Route>
            <Route
              path="/SideBarHidden/ThemBanGhiPlayList"
              element={<ThemBanGhiPlayList />}
            ></Route>
            <Route
              path="/SideBarHidden/CTBangGhi"
              element={<CTBangGhi />}
            ></Route>
            <Route
              path="/SideBarHidden/PlaylistTop"
              element={<PlayListTop />}
            ></Route>
            <Route
              path="/SideBarHidden/SuaPlaylist"
              element={<SuaPlayList />}
            ></Route>
            <Route
              path="/SideBarHidden/ThemPlaylist"
              element={<ThemPlayList />}
            ></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
