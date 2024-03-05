import React from "react";
import './panel.css';
import './../../components/variaciebi.css';
import Variaciebi from './../../components/variaciebi'
export default function Panel() {
    return(
        <div>
            <section class="yutebi" >
                <div class="yutissaxeli">დეკორატიული პანელები </div>
                <div class="txtddv">
                    <p className="imisp">
                    კედლის დეკორატიული პანელები მზადდება პირველი ხარისხის, 12 მილიმეტრი სისქის არყის ხის 
                    ფლაივუდისგან, რომელსაც გარდა ზედაპირისა ასევე გააჩნია ფრეზით დამუშავებული წიბოები, რაც 
                    აადვილებს პანელების მონტაჟს და მატებს კონსტრუქციას საიმედოობას. პანელების სტანდარტული ზომებია
                    : 50cm x 50cm, 50cm x 100cm, 50cm x 150cm, <br />
                    ასევე არის შესაძლებელი პანელები დამზადდეს თქვენთვის სასურველ ზომებზე.
                    ესთეტიკური მიმზიდველობა - ხის ბუნებრივი ტექსტურა აქცევს
                    ფლაივუდის პანელებს იდეალურ დეკორატიულ ელემენტად, რომელსაც
                    შეუძლია ინტერიერს სითბო და სიმყუდროვე შემატოს. ეს პანელები
                    შესანიშნავად მოერგება ნებისმიერ სივრცეს, იქნება ეს საოფისე,
                    კომერციული თუ საცხოვრებელი ფართი.
                    </p>
                    <p className="pasi">
                    ფასი 
                    <span className="pasisspani">
                     (ლაქ-საღებავებით დამუშავების გარეშე) 
                    </span>
                     <br /> 
                    <span className="price">
                     1 კვ/მ - 47 ლარი
                    </span>
                    </p>
                    
                    <p className="pasi">
                    <span className="pasisspani">
                    (ლაქ-საღებავებით დამუშავებული)
                   </span>
                     <br /> 
                     <span className="price">
                     1 კვ/მ - 77 ლარი
                    </span>
                    </p>
                    <p className="dost">
                    ზომებთან ერთად, გთავაზობთ ოთხ
                    არჩევანს ხის ფერში, რაც გაძლევთ
                    თავისუფლებას, შეუსაბამოთ თქვენი
                    დეკორატიული პანელები თქვენს პირად სტილს ან საოფისე
                    დეკორს.
                    </p>
                    <Variaciebi style={{fontSize: '25px'}} />
                </div>
                <div class="gallery">
                    <img src="https://images.squarespace-cdn.com/content/v1/58058acc5016e176c8d090c4/1555962485709-BUY48IV6ZPV95UH2PKIB/DIY+Oak+Plywood+Accent+Wall+by+Nadine+Stay+-+turn+a+boring+wall+into+a+feature+wall+with+vertical+oak+wood+planking.+Modern+and+retro+style+staggered+accent+wall+with+light+oak+wood." alt="fanera eurowood plywood" />
                    <img src="https://i.pinimg.com/236x/a4/33/9f/a4339f4876ac9787510e3a07ba4d5905.jpg" alt="fanera eurowood plywood" />
                    <img src="https://cdn.shopify.com/s/files/1/1506/5624/products/plyco-european-birch-plywood-bedroom-3_800x.jpg?v=1664418533" alt="fanera eurowood plywood" />
                </div>
            </section>
        </div>
    );
}