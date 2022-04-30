import React from 'react';

export default class LinkShortener extends React.Component {
   constructor(props) {
      super(props);

      this.itensRef = React.createRef();
      this.itensRef.current = [];

      this.state = {
         inpValue: '',
         formError: false,
         itemList: JSON.parse(localStorage.getItem('listItem')) || [],
         loading: false,
         timeoutCopy: false,
         lastClicked: '',
      };

      this.submitVal = this.submitVal.bind(this);
      this.saveLocal = this.saveLocal.bind(this);
   }

   saveLocal() {
      localStorage.setItem('listItem', JSON.stringify(this.state.itemList));
   }

   componentDidMount() {
      window.addEventListener('beforeunload', this.saveLocal);
   }

   componentWillUnmount() {
      window.removeEventListener('beforeunload', this.saveLocal);
   }

   submitVal() {
      if (this.state.inpValue == '') {
         if (this.state.formError == false) {
            this.setState({
               formError: true,
            });
         }
      } else {
         this.fetchLink(this.state.inpValue);
      }
   }

   saveToClipboard(link) {
      if (link != this.state.lastClicked) {
         let el = this.itensRef.current.filter(e => {
            return e.key == link;
         })[0];

         let mutateEl = el.el;
         if (mutateEl.style.backgroundColor != '#3b3054') {
            mutateEl.style.backgroundColor = '#3b3054';
            mutateEl.innerHTML = 'Copied!';
            this.setState({
               lastClicked: link,
            });
            setTimeout(() => {
               mutateEl.style.backgroundColor = null;
               mutateEl.innerHTML = 'Copy';
            }, 1000);
         }
         return navigator.clipboard.writeText(link);
      }
      alert('Já está copiado');
   }

   async fetchLink(url) {
      this.setState({ loading: true });
      const response = await fetch(
         'https://api.shrtco.de/v2/shorten?url=' + url
      );
      const obj = await response.json();
      if (obj.ok != true) {
         this.setState({ loading: false });
         alert('This is not a valid URL');
         return;
      }
      this.setState(function (state) {
         let x = [...state.itemList];
         x.push({
            result: obj.result,
            full_link: obj.result.full_short_link,
            original_link: obj.result.original_link,
         });
         return {
            itemList: x,
            loading: false,
         };
      });
   }

   render() {
      const shortener = (
         <div className="shortener">
            <div
               className={`shortener__input ${
                  this.state.formError ? 'text--error' : ''
               }`}
            >
               <input
                  type="text"
                  value={this.state.inpValue}
                  onChange={event =>
                     this.setState({ inpValue: event.target.value })
                  }
                  placeholder="Shorten a link here..."
                  required={true}
               />
            </div>
            <button className="btn" type="submit" onClick={this.submitVal}>
               Shorten It!
            </button>
         </div>
      );

      return (
         <div className="shortener__container">
            {shortener}
            {this.state.itemList.length > 0 ? (
               <>
                  {this.state.itemList.map((e, i) => {
                     return (
                        <div className="shortener__content" key={e.full_link}>
                           <p className="shortener__content__title">
                              {e.original_link}
                           </p>
                           <div className="shortener__content__copy__container">
                              <p>{e.full_link}</p>
                              <button
                                 onClick={() => {
                                    this.saveToClipboard(e.full_link);
                                 }}
                                 ref={el =>
                                    (this.itensRef.current[i] = {
                                       key: e.full_link,
                                       el: el,
                                    })
                                 }
                                 className="btn shortener__content__btn"
                              >
                                 Copy
                              </button>
                           </div>
                        </div>
                     );
                  })}
               </>
            ) : null}
         </div>
      );
   }
}
