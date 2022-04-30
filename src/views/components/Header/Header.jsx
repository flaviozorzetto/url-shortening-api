import { useState } from 'react';
import logo from '../../../assets/imgs/logo.svg';

export default function Header(props) {
   const [burgerOpen, setOpen] = useState(false);

   const noTablet = (
      <header className="app__header">
         <div className="app__header__content">
            <img className="app__header__logo" src={logo} alt="" />
            <ul className="app__header__list">
               <li className="app__header__list__item">
                  <a className="app__header__list__item__link" href="">
                     Features
                  </a>
               </li>
               <li className="app__header__list__item">
                  <a className="app__header__list__item__link" href="">
                     Pricing
                  </a>
               </li>
               <li className="app__header__list__item">
                  <a className="app__header__list__item__link" href="">
                     Resources
                  </a>
               </li>
            </ul>
         </div>
         <div className="app__header__content">
            <ul className="app__header__list">
               <li className="app__header__list__item">
                  <a className="app__header__list__item__link" href="">
                     Login
                  </a>
               </li>
               <button className="btn">Sign Up</button>
            </ul>
         </div>
      </header>
   );

   const tablet = (
      <header className="app__header">
         <div className="app__header__content">
            <img className="app__header__logo" src={logo} alt="" />
         </div>
         <div className="app__header__content">
            <div className="app__header__burger">
               <div
                  className={'app__header__burger__icon'}
                  onClick={() => {
                     setOpen(!burgerOpen);
                  }}
               >
                  <div></div>
                  <div></div>
                  <div></div>
               </div>
               <div
                  className={`app__header__burger__menu ${
                     burgerOpen ? 'open' : ''
                  }`}
               >
                  <ul className="app__header__burger__list">
                     <li className="app__header__burger__list__item">
                        <a
                           className="app__header__burger__list__item__link"
                           href=""
                        >
                           Features
                        </a>
                     </li>
                     <li className="app__header__burger__list__item">
                        <a
                           className="app__header__burger__list__item__link"
                           href=""
                        >
                           Pricing
                        </a>
                     </li>
                     <li className="app__header__burger__list__item">
                        <a
                           className="app__header__burger__list__item__link"
                           href=""
                        >
                           Resources
                        </a>
                     </li>
                  </ul>
                  <div className="app__header__burger__divisor"></div>
                  <ul className="app__header__burger__list">
                     <li className="app__header__burger__list__item">
                        <a
                           className="app__header__burger__list__item__link"
                           href=""
                        >
                           Login
                        </a>
                     </li>
                     <button className="btn">Sign Up</button>
                  </ul>
               </div>
            </div>
         </div>
      </header>
   );

   return props.tablet ? tablet : noTablet;
}
