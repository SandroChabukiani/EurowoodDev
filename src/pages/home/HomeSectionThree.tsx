import { Link } from "react-router-dom";

const HomeSectionThree = () => {
    return (
      <div className="HSTBC">
        <div className="HSTHeader">
          <h3>ლამინირებული ფანერა</h3>
        </div>
        <div className="HeaderSectionTwoDiv">
          <img src="https://i.imgur.com/ojs39Zf.jpg" className="BagImage" />
          <div className="HeaderSectionTwoContent">
            <h3 className="HSTH3">
              ლამინირებული ფანერა ბელორუსიის საუკეთესო მწარმოებლისგან
            </h3>
            <button>
              <Link to='/catalog/ლამინირებული ფანერა'>ლამინირებული ფანერა</Link>
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default HomeSectionThree;