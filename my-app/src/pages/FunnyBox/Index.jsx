import React, { Component } from 'react';

class FunnyBoxElement extends Component {
  constructor() {
    super();

    this.state = {
      width: 0,
      height: 0,
      left: 0,
      top: 0,
      direction: 0,
      className: '',
    };
  }

  componentDidMount() {
    this.update();
  }

  mouseEnterHandler = (ev) => {
    this.addClass(ev, 'in');
  };

  mouseOutHandler = (ev) => {
    console.log(ev);
    this.addClass(ev, 'out');
  };

  addClass = (ev, state) => {
    var direction = this.getDirection(ev);
    var class_suffix = '';

    switch (direction) {
      case 0:
        class_suffix = '-top';break;
      case 1:
        class_suffix = '-right';break;
      case 2:
        class_suffix = '-bottom';break;
      case 3:
        class_suffix = '-left';break;
    }

    this.setState({
      className: state + class_suffix,
    });
  };

  getDirection = (ev) => {
    const w = this.state.width,
      h = this.state.height,
      l = this.state.left,
      t = this.state.top;

    const x = ev.pageX - l - w / 2 * (w > h ? h / w : 1),
      y = ev.pageY - t - h / 2 * (h > w ? w / h : 1);

    return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
  };

  update = () => {
    const box = this.refs.element.getBoundingClientRect();
    this.setState({
      left: box.left,
      top: box.top,
      width: box.right - box.left,
      height: box.bottom - box.top,
    });
  };

  render() {
    console.log
    return (<li
      ref="element"
      onMouseEnter={this.mouseEnterHandler}
      onMouseLeave={this.mouseOutHandler}
      className={this.state.className}
    >
      <div className='w'>
        <div className='f'>
          <svg viewBox='0 0 180 180'>
            <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlinkHref={this.props.image}></image>
          </svg>
        </div>
        <div className='b'>
          <h3>
            Angus Young
          </h3>
        </div>
      </div>
    </li>);
  }
}

class FunnyBox extends Component {
  render() {
    return (
     <div>
       <ul className='-center'>
         <FunnyBoxElement image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-angus.png" />
         <FunnyBoxElement image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-angus.png" />
         <FunnyBoxElement image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-angus.png" />
         <FunnyBoxElement image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-angus.png" />
         <FunnyBoxElement image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-angus.png" />
         <FunnyBoxElement image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-angus.png" />
         <FunnyBoxElement image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-angus.png" />
         <li>
           <div className='w'>
             <div className='f'>
               <svg viewBox='0 0 180 180'>
                 <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlinkHref='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-aurora.png'></image>
               </svg>
             </div>
             <div className='b'>
               <h3>
                 Aurora
               </h3>
             </div>
           </div>
         </li>
         <li>
           <div className='w'>
             <div className='f'>
               <svg viewBox='0 0 180 180'>
                 <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlinkHref='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-bride.png'></image>
               </svg>
             </div>
             <div className='b'>
               <h3>
                 Bride of Frankenstein
               </h3>
             </div>
           </div>
         </li>
         <li>
           <div className='w'>
             <div className='f'>
               <svg viewBox='0 0 180 180'>
                 <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlinkHref='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-d.png'></image>
               </svg>
             </div>
             <div className='b'>
               <h3>
                 Dracula
               </h3>
             </div>
           </div>
         </li>
         <li>
           <div className='w'>
             <div className='f'>
               <svg viewBox='0 0 180 180'>
                 <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlinkHref='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-dali.png'></image>
               </svg>
             </div>
             <div className='b'>
               <h3>
                 Salvador Dalí
               </h3>
             </div>
           </div>
         </li>
         <li>
           <div className='w'>
             <div className='f'>
               <svg viewBox='0 0 180 180'>
                 <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlinkHref='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-huitzi.png'></image>
               </svg>
             </div>
             <div className='b'>
               <h3>
                 Ilhuicatl Xoxouhqui
               </h3>
             </div>
           </div>
         </li>
         <li>
           <div className='w'>
             <div className='f'>
               <svg viewBox='0 0 180 180'>
                 <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlinkHref='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-man.png'></image>
               </svg>
             </div>
             <div className='b'>
               <h3>
                 L'Homme qui rit
               </h3>
             </div>
           </div>
         </li>
         <li>
           <div className='w'>
             <div className='f'>
               <svg viewBox='0 0 180 180'>
                 <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlinkHref='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-v.png'></image>
               </svg>
             </div>
             <div className='b'>
               <h3>
                 Visualization
               </h3>
             </div>
           </div>
         </li>
         <li>
           <div className='w'>
             <div className='f'>
               <svg viewBox='0 0 180 180'>
                 <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlinkHref='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-v2.png'></image>
               </svg>
             </div>
             <div className='b'>
               <h3>
                 Visualization II
               </h3>
             </div>
           </div>
         </li>
         <li>
           <div className='w'>
             <div className='f'>
               <svg viewBox='0 0 180 180'>
                 <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlinkHref='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-v3.png'></image>
               </svg>
             </div>
             <div className='b'>
               <h3>
                 Visualization III
               </h3>
             </div>
           </div>
         </li>
         <li>
           <div className='w'>
             <div className='f'>
               <svg viewBox='0 0 180 180'>
                 <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlinkHref='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-worms.png'></image>
               </svg>
             </div>
             <div className='b'>
               <h3>
                 Zombie
               </h3>
             </div>
           </div>
         </li>
         <li>
         </li>
       </ul>
     </div>
    );
  }
}

export default FunnyBox;
