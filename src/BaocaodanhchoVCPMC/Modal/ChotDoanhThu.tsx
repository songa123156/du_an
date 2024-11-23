const ChotDoanhThu = () => {
  return (
    <>
      <div className="modal fade" id="exampleModal">
        <div className="modal-dialog">
          <div
            className="modal-content"
            style={{
              backgroundColor: "#3E3E5B",
              width: "629px",
              height: "338px",
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
                Chốt doanh thu
              </h5>

              <div
                style={{
                  width: "549px",
                  height: "120px",
                  top: "82px",
                  left: "40px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                  position: "absolute",
                }}
              >
                <p style={{ margin: "0 0 24px" }}>
                  Doanh thu sẽ được chốt từ ngày 01/05/2021 đến ngày 14/05/2021
                  trên <br /> tất cả các hợp đồng sử dụng.
                </p>

                <p style={{ margin: "0" }}>
                  Nhấn <strong>Tiếp tục</strong> để chốt doanh thu. <br /> Nhấn{" "}
                  <strong>Hủy</strong> để hủy bỏ và không chốt doanh thu.
                </p>
              </div>

              <div>
                <div
                  style={{
                    width: "368px",
                    height: "48px",
                    top: "250px",
                    left: "130px",
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
                    Tiếp tục
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

export default ChotDoanhThu;
