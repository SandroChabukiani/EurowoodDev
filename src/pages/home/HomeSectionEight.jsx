import HSEightFirstImage from "../../images/HomeSectionEightFirstImage.png"
import HSEightSecondImage from "../../images/HomeSectionEightSecondImage.png"
const HomeSectionEight = () => {
  return (
    <div className="HSEightcont">
      <div className="HSEightheaderDiv">
        <h2>სატრანსპორტო ყუთები</h2>
      </div>
      <div className="HSEightContentDiv">
        <h3>შეძენა</h3>
        <h3>სატრანსპორტ ყუთები</h3>
      </div>
      <div className="HSEight_IMAGES_DIV">
        <img className="img" src={HSEightFirstImage} alt="#" />
        <img src={HSEightSecondImage} alt="#" />
      </div>
    </div>
  );
};

export default HomeSectionEight;
