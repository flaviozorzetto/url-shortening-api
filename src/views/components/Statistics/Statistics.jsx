import brandRec from '../../../assets/imgs/icon-brand-recognition.svg';
import detailedRec from '../../../assets/imgs/icon-detailed-records.svg';
import fullyCos from '../../../assets/imgs/icon-fully-customizable.svg';

export default function Statistics() {
   return (
      <div className="statistics__container">
         <div className="statistics__container__info">
            <h1>Advanced Statistics</h1>
            <p>
               Track how your links are performing across the web with our
               advanced statistics dashboard
            </p>
         </div>
         <div className="statistics__container__cards">
            <div className="card">
               <div className="card__icon">
                  <img src={brandRec} alt="" />
               </div>
               <p className="card__title">Brand Recognition</p>
               <p className="card__info">
                  Boost your brand recognition with each click. Generic links
                  don't mean a thing. Branded links help instil confidence in
                  your content.
               </p>
            </div>
            <div className="card">
               <div className="card__icon">
                  <img src={detailedRec} alt="" />
               </div>
               <p className="card__title">Detailed Records</p>
               <p className="card__info">
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
               </p>
            </div>
            <div className="card">
               <div className="card__icon">
                  <img src={fullyCos} alt="" />
               </div>
               <p className="card__title">Fully Customizable</p>
               <p className="card__info">
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
               </p>
            </div>
         </div>
      </div>
   );
}
