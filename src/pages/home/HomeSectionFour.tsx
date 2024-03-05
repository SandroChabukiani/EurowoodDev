import { Link } from 'react-router-dom';
import './HomeSectionsCss.css';
const HomeSectionFour = () => {
  return (
    <div className="HSFourCont">
      <div className="HSFourContentDiv">
        <div className="HSFourMiniContent">
          <h2>ლამინირებული იატაკი</h2>
          <h4>
            33 კლასის ბელორუსული ლამინირებული იატაკი
          </h4>
          <button>
            <Link to='/catalog/ლამინატი'>კატალოგი</Link>  
          </button>
        </div>
        <div className="HSFourImageDiv">
          <img className="ImageFour" src='https://i.imgur.com/N4YlIGM.jpg' />
        </div>
      </div>
    </div>
  );
};

export default HomeSectionFour;
