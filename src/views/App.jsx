import React from 'react';
import Header from './components/Header/Header';
import LinkShortener from './components/LinkShortener/LinkShortener';
import Statistics from './components/Statistics/Statistics';
import Boost from './components/Boost/Boost';
import Footer from './components/Footer/Footer';
import illustrationWork from '../assets/imgs/illustration-working.svg';

export default class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         tablet: window.innerWidth <= 780 ? true : false,
         desktop: window.innerWidth > 780 ? true : false,
      };

      window.onresize = () => {
         if (window.innerWidth <= 780) {
            if (this.state.tablet == true) {
            } else {
               this.setState({ tablet: true, desktop: false });
            }
         } else {
            if (this.state.desktop == false) {
               this.setState({ desktop: true, tablet: false });
            }
         }
      };
      // window.onresize = () => {
      //    window.innerWidth <= 768
      //       ? this.state.tablet == true
      //          ? null
      //          : this.setState({ tablet: true, desktop: false })
      //       : this.state.desktop == false
      //       ? this.setState({ desktop: true, tablet: false })
      //       : null;
      // };
   }

   render() {
      return (
         <>
            <section className="upper__half">
               <div className="app__container">
                  <Header tablet={this.state.tablet} />
                  <div className="app__container__img__offset">
                     <div className="app__container__left">
                        <h1>More than just shorter links</h1>
                        <h2>
                           Build your brand's recognition and get detailed
                           insights on how your links are performing.
                        </h2>
                        <button className="btn">Get Started</button>
                     </div>
                     <div className="app__container__right">
                        <img src={illustrationWork} alt="" />
                     </div>
                  </div>
               </div>
            </section>
            <section className="lower__half">
               <div className="app__container">
                  <LinkShortener />
                  <Statistics />
               </div>
            </section>
            <Boost />
            <Footer />
         </>
      );
   }
}
