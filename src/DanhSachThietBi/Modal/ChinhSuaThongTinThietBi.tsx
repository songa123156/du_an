const ChinhSuaThongTinThietBi = () => {
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
            width: "623px",
            height: "740px",
          }}
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: "#3E3E5B",
              width: "623px",
              height: "740px",
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
                Chỉnh sửa thông tin thiết bị
              </h5>
              <div
                style={{
                  width: "543px",
                  height: "84px",
                  top: "96px",
                  left: "40px",
                  gap: "12px",
                  position: "absolute",
                  color: "white",
                }}
              >
                <div>
                  Tên thiết bị: <span style={{ color: "red" }}>*</span>
                </div>
                <div>
                  <input
                    type="text"
                    defaultValue={"Device12233444"}
                    style={{
                      width: "543px",
                      color: "white",
                      height: "48px",
                      padding: "11px 24px 13px 16px",
                      borderRadius: "8px",
                      border: "1px solid #727288",
                      background: "#2B2B3F",
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  width: "543px",
                  height: "84px",
                  top: "196px",
                  left: "40px",
                  gap: "12px",
                  position: "absolute",
                  color: "white",
                }}
              >
                <div>
                  SKU/ID: <span style={{ color: "red" }}>*</span>
                </div>
                <div>
                  <input
                    type="text"
                    defaultValue={"123345456789"}
                    style={{
                      width: "543px",
                      height: "48px",
                      color: "white",
                      padding: "11px 24px 13px 16px",
                      borderRadius: "8px",
                      border: "1px solid #727288",
                      background: "#2B2B3F",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  width: "543px",
                  height: "84px",
                  top: "296px",
                  left: "40px",
                  gap: "12px",
                  position: "absolute",
                  color: "white",
                }}
              >
                <div>
                  Địa chỉ Mac: <span style={{ color: "red" }}>*</span>
                </div>
                <div>
                  <input
                    type="text"
                    defaultValue={"113.56.79.01"}
                    style={{
                      color: "white",
                      width: "543px",
                      height: "48px",
                      padding: "11px 24px 13px 16px",
                      borderRadius: "8px",
                      border: "1px solid #727288",
                      background: "#2B2B3F",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  width: "543px",
                  height: "84px",
                  top: "396px",
                  left: "40px",
                  gap: "12px",
                  position: "absolute",
                  color: "white",
                }}
              >
                <div>
                  Tên đăng nhập: <span style={{ color: "red" }}>*</span>
                </div>
                <div>
                  <input
                    type="text"
                    defaultValue={"User322334"}
                    style={{
                      color: "white",
                      width: "543px",
                      height: "48px",
                      padding: "11px 24px 13px 16px",
                      borderRadius: "8px",
                      border: "1px solid #727288",
                      background: "#2B2B3F",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  width: "543px",
                  height: "84px",
                  top: "496px",
                  left: "40px",
                  gap: "12px",
                  position: "absolute",
                  color: "white",
                }}
              >
                <div>Vị trí:</div>
                <div>
                  <input
                    type="text"
                    defaultValue={"Ho Chi Minh"}
                    style={{
                      color: "white",
                      width: "543px",
                      height: "48px",
                      padding: "11px 24px 13px 16px",
                      borderRadius: "8px",
                      border: "1px solid #727288",
                      background: "#2B2B3F",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  width: "543px",
                  height: "24px",
                  top: "596px",
                  left: "40px",
                  position: "absolute",
                  color: "white",
                  display: "inline-block",
                }}
              >
                <div>
                  Trạng thái thiết bị: <span style={{ color: "red" }}>*</span>
                  <div
                    style={{
                      display: "inline-block",
                      marginLeft: 27,
                      marginRight: 50,
                    }}
                    className="form-check"
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      Đã kích hoạt
                    </label>
                  </div>
                  <div
                    style={{ display: "inline-block" }}
                    className="form-check"
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      Ngưng kích hoạt
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <div
                  style={{
                    width: "368px",
                    height: "48px",
                    top: "652px",
                    left: "127px",
                    gap: "32px",
                    position: "absolute",
                  }}
                >
                  <button
                    className="butoon"
                    style={{
                      color: "#FF7506",
                      background: "transparent",
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

export default ChinhSuaThongTinThietBi;
