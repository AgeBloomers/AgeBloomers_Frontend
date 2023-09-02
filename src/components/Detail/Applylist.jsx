import NavBar from "../Main/NavBar";

const Applylist = () => {
    const divStyle = {
        width: "600px",
        height: "600px",
      };
      
    return (
        <div>
        <NavBar />
        <div className="flex justify-center items-center min-h-screen mt-[-200px]">
          <div className="bg-white rounded-3xl" style={divStyle}>
        
          </div>
        </div>
        <footer className="top-[140px] w-full min-h-[170wh] relative flex items-center justify-center bg-neutral-600 ">
          <div className="w-[390px] h-[363px] relative bg-neutral-600">
            <div className="w-[181px] h-[78px] left-[105px] top-[285px] absolute text-center text-yellow-400 text-[23px] font-extrabold">
              AgeBloomers
            </div>
          </div>
        </footer>
      </div>
    );
};

export default Applylist;