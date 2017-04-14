import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

class Social extends Component {

  render() {
    return (
      <div>
        <Motion
          defaultStyle={{
            opacity: 0,
            y: -20,
          }} style={{
          opacity: spring(1),
          y: spring(0),
        }}>
          {style => (
          <div
            className="socials"
            style={{
               opacity: style.opacity,
               transform: `translateY(${style.y}px)`,
             }}>
            <a
              href="https://www.facebook.com/dzianismakeichyk"
              target="_blank"
              title="facebook"
            >
              <svg
                className="icon-item"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x="0"
                y="0"
                width="12"
                height="12"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                enableBackground="new 0 0 512 512"
              >
                <path d="M296.296 512H200.36V256h-64v-88.225l64-0.029 -0.104-51.976C200.256 43.794 219.773 0 304.556 0h70.588v88.242h-44.115c-33.016 0-34.604 12.328-34.604 35.342l-0.131 44.162h79.346l-9.354 88.225L296.36 256 296.296 512z"/>
              </svg>
            </a>
            <a
              href="https://pl.linkedin.com/in/dzianis-makeichyk-81664a127"
              target="_blank"
              title="linkedin"
            >
              <svg
                className="icon-item"
                version="1.1"
                viewBox="0 0 612 612"
                x="0"
                y="0"
                xmlSpace="preserve"
              >
                <path d="M133.572 172.485H17.639c-7.929 0-14.364 6.435-14.364 14.364v405.271c0 7.928 6.435 14.363 14.364 14.363h115.948c7.929 0 14.364-6.436 14.364-14.363V186.85C147.937 178.906 141.516 172.485 133.572 172.485zM119.208 577.756H31.989V201.214h87.219V577.756zM456.824 167.559c-56.294 0-93.123 24.29-114.512 45.419l-2.643-27.507c-0.719-7.383-6.924-12.985-14.293-12.985h-0.287l-105.691 2.025c-3.878 0.072-7.556 1.709-10.199 4.539 -2.657 2.83-4.051 6.607-3.878 10.472 1.322 29.59 1.279 64.179 1.221 104.226l-0.015 300.413c0 7.93 6.436 14.363 14.364 14.363H336.84c7.929 0 14.364-6.434 14.364-14.363V359.881c0-11.965 1.034-20.613 3.088-25.77 7.226-18.4 31.07-37.419 58.448-37.419 35.465 0 56.623 26.976 56.623 72.181V594.16c0 7.93 6.436 14.363 14.364 14.363h113.908c7.929 0 14.364-6.434 14.364-14.363V354.164C612 237.311 553.983 167.559 456.824 167.559zM583.271 579.797h-85.18V368.873c0-61.307-33.512-100.909-85.352-100.909 -41.139 0-74.593 28.671-85.15 55.575 -3.491 8.719-5.114 20.283-5.114 36.342v219.916h-87.219l0.015-286.006c0.043-34.015 0.086-64.122-0.704-90.839l77.782-1.494 4.468 46.325c0.718 7.369 6.909 12.985 14.307 12.985h2.441c4.956 0 9.553-2.542 12.182-6.751 8.475-13.545 41.526-57.729 111.092-57.729 80.368 0 126.448 57.542 126.448 157.877v225.633H583.271zM80.468 3.477C33.842 3.477 0 35.609 0 79.894c0 44.256 33.167 76.374 78.859 76.374 47.1 0 81.287-32.118 81.287-76.719C159.098 34.762 126.333 3.477 80.468 3.477zM78.859 127.54c-29.519 0-50.131-19.593-50.131-47.646 0-28.527 20.799-47.689 51.74-47.689 30.265 0 50.274 18.846 50.95 47.689C131.418 108.393 110.288 127.54 78.859 127.54z" />
              </svg>
            </a>
            <a
              href="https://www.vk.com/road66"
              target="_blank"
              title="vk"
            >
              <svg
                className="icon-item"
                version="1.1"
                viewBox="0 0 184.313 184.313"
                x="0"
                y="0"
                xmlSpace="preserve"
              >
                <path d="M180.323 147.777l-53.048-45.373 55.314-66.784c2.642-3.191 2.197-7.918-0.992-10.56 -3.19-2.643-7.918-2.199-10.561 0.992l-60.022 72.469c-0.304 0.366-0.562 0.754-0.784 1.156V30.836c0-4.142-3.357-7.5-7.5-7.5h-9.521c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h2.021v93.253L13.424 26.236c-2.541-3.272-7.253-3.864-10.524-1.324 -3.272 2.54-3.864 7.252-1.324 10.523l95.229 122.641c1.448 1.866 3.652 2.901 5.925 2.901 0.812 0 1.633-0.132 2.431-0.405 3.031-1.039 5.068-3.89 5.068-7.095v-46.55c0.423 0.767 0.981 1.476 1.686 2.079l58.658 50.171c1.413 1.209 3.146 1.8 4.871 1.8 2.116 0 4.22-0.891 5.703-2.625C183.84 155.204 183.471 150.469 180.323 147.777z" />
              </svg>
            </a>
            <a
              href="https://github.com/DzianisMakeichyk"
              target="_blank"
              title="github"
            >
              <svg
                className="icon-item"
                version="1.1"
                viewBox="0 0 438.549 438.549"
                x="0"
                y="0"
                xmlSpace="preserve"
              >
                <path d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365   c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63   c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996   c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136   c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559   c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559   c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997   c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851   c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136   c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41   c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126   c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817   c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994   c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849   c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24   c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979   c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146   c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995   c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906   C438.536,184.851,428.728,148.168,409.132,114.573z" />
              </svg>
            </a>
          </div>
        )}
        </Motion>
      </div>
    );
  }
}

export default Social;
