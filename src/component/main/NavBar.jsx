const NavBar = () => {
  const navStyle = {
    height: "100px",
    position: "fixed",
    top: "0",
    width: "600px",
    zIndex: 2, // 다른 요소보다 위에 표시
  };

  const blankStyle = {
    height: "100px",
  };

  return (
    <div>
      <nav className="bg-f2f2f2 p-4" style={navStyle}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-00473E font-bold font-Pretendard">Agebloomers</div>
          <button className="py-2 px-4 bg-FFD700 text-00473E font-bold rounded-full font-Pretendard">
            마이페이지
          </button>
        </div>
      </nav>
      <div style={blankStyle}></div>
    </div>
  );
};

export default NavBar;
