const PageNext = () => {
  return (
    <>
      <div
        style={{
          width: "203px",
          height: 26,
          top: 800,
          left: 184,
          position: "absolute",
          display: "flex",
          gap: "8px",
        }}
      >
        <div
          style={{
            width: "203px",
            height: "26px",
            //   position: "absolute",
            right: 50,
            color: "#F5F5FF",
            marginBottom: 10,
          }}
          className="pagination"
        >
          <a href="/#" className="page-link1">
            &lt;
          </a>
          <a href="/#" className="page-link1 ">
            1
          </a>
          <a href="/#" className="page-link1 active">
            2
          </a>
          <a href="/#" className="page-link1">
            3
          </a>
          <a href="/#" className="page-link1">
            ...
          </a>
          <a href="/#" className="page-link1">
            100
          </a>
          <a href="/#" className="page-link1">
            &gt;
          </a>
        </div>
      </div>
    </>
  );
};

export default PageNext;
