const XoaThietBi = () => {
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
              width: "418px",
              height: "258px",
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
                Xóa thiết bị
              </h5>
              <div
                style={{
                  width: "352px",
                  height: "34px",
                  position: "absolute",
                  top: "80px",
                  left: "33px",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "17px",
                  letterSpacing: "0.015em",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              >
                Bạn có chắc chắn muốn xoá các thiết bị này? <br /> Hành động này
                không thể hoàn tác.
              </div>
              <div>
                <div
                  style={{
                    width: "352px",
                    height: "48px",
                    top: "154px",
                    left: "33px",
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
                      marginLeft: "16px",
                    }}
                    data-bs-dismiss="modal"
                  >
                    Xóa
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

export default XoaThietBi;
