import FirstImage from '../../images/section7imageOne.png'
import SecondImage from '../../images/section7image2.png'
const HomeSectionSeven = () => {
  return (
    <div className="HSScont">
        <div className="HSS_IMAGES_DIV">
            <img  className="img" src={FirstImage} alt="#" />
            <img src={SecondImage} alt="#" />
        </div>
    </div>
  );
};

export default HomeSectionSeven;
