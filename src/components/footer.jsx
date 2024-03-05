import React from "react";
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
export default function Footer() {
  return (
    <div>
      {" "}
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>eurowood</h3>

          <p class="footer-links">
            <a href="#">მთავარი</a>|<a href="#">ავეჯი</a>|
            <a href="#">ჩვენს შესახებ</a>|<a href="#">პანელები</a>
          </p>

          <p class="footer-company-name">
            Copyright © 2023 <strong> <a href="https://github.com/SandroChabukiani">SandroCh</a></strong> All rights reserved
          </p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-phone"></i>
            <p>+995 511 19 99 50</p>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:sagar00001.co@gmail.com">plywoodhub@gmail.com</a>
            </p>
          </div>
        </div>
        <div class="footer-right">
          <p class="footer-company-about">
            <span>კომპანიის შესახებ</span>
            <strong>eurowood</strong> არის ავეჯის მწარმოებელი კომპანია,
            რომელიც გთავზობთ თანამედროვე და დახვეწილ დიზაინს. დანარჩენი
            ინფორმაცია შეგიძლიათ იხილოთ <strong>ჩვენს შესახებ</strong>
          </p>
          <div class="footer-icons">
            <a href="https://www.facebook.com/profile.php?id=100095118205916" target="blank">
              <FacebookIcon className="fb" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
   
}
