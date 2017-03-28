import React, { Component } from 'react';

class FunnyBox extends Component {
  classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

   DAH = (nodes) => {
    var _this = this;

    this.classCallCheck(this, this.DAH);

    this.nodes = [];

    Array.prototype.slice.call(nodes, 0).forEach(function (node) {
      _this.nodes.push(new Node(node));
    });

    this.bindEvents();
  }

  bindEvents = () => {
    var _this2 = this;

    ['resizeHandler'].forEach(function (fn) {
      return _this2[fn] = _this2[fn].bind(_this2);
    });
    window.addEventListener('resize', this.resizeHandler, false);
  };

   resizeHandler = () => {
    this.nodes.forEach(function (node) {
      return node.update();
    });
  };

   Node = (node) => {
    this.classCallCheck(this, Node);

    this.element = node;
    this.bindEvents().update();
  }

   update = () => {
    // const bcr = this.element.getBoundingClientRect();
    // this.l = bcr.left;
    // this.t = bcr.top;
    this.w = this.element.offsetWidth;
    this.h = this.element.offsetHeight;
    this.l = this.element.offsetLeft;
    this.t = this.element.offsetTop;
  };

   bindEvents = () => {
    var _this3 = this;

    ['mouseEnterHandler', 'mouseOutHandler'].forEach(function (fn) {
      return _this3[fn] = _this3[fn].bind(_this3);
    });
    this.element.addEventListener('mouseenter', this.mouseEnterHandler, false);
    this.element.addEventListener('mouseout', this.mouseOutHandler, false);
    return this;
  };

   mouseEnterHandler = (ev) => {
    this.addClass(ev, 'in');
  };

   mouseOutHandler = (ev) => {
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

    this.element.className = '';
    this.element.classList.add(state + class_suffix);
  };

   getDirection = (ev) => {
    var w = this.w,
      h = this.h,
      x = ev.pageX - this.l - w / 2 * (w > h ? h / w : 1),
      y = ev.pageY - this.t - h / 2 * (h > w ? w / h : 1),
      d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;

    return d;
  };


  render() {
    console.log(this.mouseEnterHandler());
    return (
     <div>
       <ul className='-center'>
         <li
           onMouseOver={this.mouseEnterHandler()}
           onMouseLeave={this.mouseOutHandler()}
         >
           <div className='w'>
             <div className='f'>
               <svg viewBox='0 0 180 180'>
                 <image height='100%' preserveAspectRatio='xMidYMid slice' width='100%' xlinkHref='https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/i-angus.png'></image>
               </svg>
             </div>
             <div className='b'>
               <h3>
                 Angus Young
               </h3>
             </div>
           </div>
         </li>
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
