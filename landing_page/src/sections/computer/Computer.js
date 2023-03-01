import * as React from "react";
import './Computer.css';

const Computer = (props) => (
  <div id = "comp">
  <svg id = "computerAnimation"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={600}
    height={600}
    fill="currentColor"
    className="bi bi-laptop"
    viewBox="0 0 16 16"
    {...props}
  >
    <defs>
      <linearGradient id="d">
        <stop
          style={{
            stopColor: "#f90",
            stopOpacity: 1,
          }}
          offset={0}
        />
        <stop
          style={{
            stopColor: "#f90",
            stopOpacity: 0,
          }}
          offset={1}
        />
      </linearGradient>
      <linearGradient id="c">
        <stop
          style={{
            stopColor: "#ff9500",
            stopOpacity: 1,
          }}
          offset={0}
        />
        <stop
          style={{
            stopColor: "#ff9500",
            stopOpacity: 0,
          }}
          offset={1}
        />
      </linearGradient>
      <linearGradient id="b">
        <stop
          style={{
            stopColor: "#f90",
            stopOpacity: 1,
          }}
          offset={0}
        />
        <stop
          style={{
            stopColor: "#f90",
            stopOpacity: 0,
          }}
          offset={1}
        />
      </linearGradient>
      <linearGradient id="a">
        <stop
          style={{
            stopColor: "#fffa00",
            stopOpacity: 1,
          }}
          offset={0}
        />
        <stop
          style={{
            stopColor: "navy",
            stopOpacity: 1,
          }}
          offset={1}
        />
      </linearGradient>
      <linearGradient
        xlinkHref="#b"
        id="f"
        x1={2.964}
        y1={8.533}
        x2={4.749}
        y2={9.456}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(1.13217 0 0 1.18671 -.94 -2.062)"
      />
      <linearGradient
        xlinkHref="#c"
        id="g"
        x1={6.39}
        y1={9.887}
        x2={7.867}
        y2={10.851}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(1.13217 0 0 1.18671 -.94 -2.062)"
      />
      <linearGradient
        xlinkHref="#d"
        id="h"
        x1={10.636}
        y1={8.779}
        x2={12.502}
        y2={8.779}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(1.13217 0 0 1.18671 -.94 -2.062)"
      />
      <radialGradient
        xlinkHref="#a"
        id="e"
        cx={7.938}
        cy={7.159}
        fx={7.938}
        fy={7.159}
        r={4.441}
        gradientTransform="matrix(.88397 0 0 .69205 .976 .24)"
        gradientUnits="userSpaceOnUse"
      />
    </defs>
    <g
      style={{
        display: "inline",
      }}
    >
      <ellipse
        style={{
          opacity: 0.77,
          fill: "url(#e)",
          fillOpacity: 1,
          strokeWidth: 0.979659,
        }}
        cx={7.993}
        cy={5.194}
        rx={3.926}
        ry={3.14}
      />
    </g>
    <text
      xmlSpace="preserve"
      style={{
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: 400,
        fontStretch: "normal",
        fontSize: ".889613px",
        lineHeight: 1.25,
      
        fill: "#d46212",
        fillOpacity: 1,
        strokeWidth: 0.111202,
      }}
      x={6.211}
      y={4.588}
      transform="scale(.94153 1.0621)"
    >
      <tspan
        x={6.211}
        y={4.588}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontFamily: "Dancing Script",
          fill: "#d46212",
          fillOpacity: 1,
          strokeWidth: 0.111202,
        }}
      >
        {"My Creative"}
      </tspan>
      <tspan
        x={6.211}
        y={5.7}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontFamily: "Dancing Script",
          fill: "#d46212",
          fillOpacity: 1,
          strokeWidth: 0.111202,
        }}
      >
        {"Pages"}
      </tspan>
    </text>
    <g
      style={{
        display: "inline",
      }}
    >
      <ellipse id="EllipseNonGradient"
        class = "clickMe" style={{
          opacity: 0.77,
          fill: "#0b0b5d",
          strokeWidth: 0.99667,
        }}
        ry={3.22}
        rx={3.963}
        cy={5.223}
        cx={7.957}
      />
    </g>
    <g
      style={{
        display: "inline",
      }}
    >
      <text class = "clickMe"
        xmlSpace="preserve"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 400,
          fontStretch: "normal",
          fontSize: "1.67265px",
          lineHeight: 1.25,
          
          strokeWidth: 0.209081,
        }}
        x={5.844}
        y={5.162}
        transform="scale(.9133 1.09493)"
      >
        <tspan 
          x={5.844}
          y={5.162}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 400,
            fontStretch: "normal",
            fontFamily: "'Vladimir Script'",
            InkscapeFontSpecification: "'Vladimir Script'",
            fill: "#fff",
            fillOpacity: 1,
            strokeWidth: 0.209081,
          }}
          transform="matrix(1 0 0 1.11373 0 -.535)"
        >
          {"Click Me"}
        </tspan>
      </text>
    </g>
    <ellipse id="leftCircle"
      style={{
        display: "inline",
        opacity: 0.77,
        fill: "url(#f)",
        fillOpacity: 1,
        strokeWidth: 1.15912,
      }}
      cx={3.472}
      cy={8.064}
      rx={1.057}
      ry={1.071}
    />
    <ellipse  id="middleCircle"
      style={{
        display: "inline",
        opacity: 0.77,
        fill: "url(#g)",
        fillOpacity: 1,
        strokeWidth: 1.15912,
      }}
      cx={7.35}
      cy={9.671}
      rx={1.057}
      ry={1.071}
    />
    <g
      style={{
        display: "inline",
      }}
    >
      <ellipse id="rightCircle"
        style={{
          display: "inline",
          opacity: 0.77,
          fill: "url(#h)",
          fillOpacity: 1,
          strokeWidth: 1.15912,
        }}
        cx={12.157}
        cy={8.357}
        rx={1.057}
        ry={1.071}
      />
      <text
        xmlSpace="preserve"
        style={{
          fontSize: 8,
          lineHeight: 1.25,
          fontFamily: "sans-serif",
        }}
        x={6.215}
        y={5.313}
      />
    </g>
    <g
      style={{
        display: "inline",
      }}
    >
      <path
        d="M13.46 1.373a.6.5 89.188 0 1 .5.603v8.991l-12.016-.074v-8.99a.6.5 89.188 0 1 .5-.597ZM2.445.107a1.798 1.502 89.188 0 0-1.502 1.79v10.19l14.019.085V1.982A1.798 1.502 89.188 0 0 13.46.175ZM-.06 12.679l16.022.099a1.798 1.502 89.188 0 1-1.502 1.789l-13.018-.08a1.798 1.502 89.188 0 1-1.502-1.808Z"
        style={{
          strokeWidth: 1.09565,
        }}
      />
    </g>
    <path id = "mouse_pointer"
      d="M8.801 5.578c.039 0 .077.012.106.035l1.885 1.491a.13.13 0 0 1 .051.101c0 .075-.068.136-.152.136h-.813l.391.696c.055.097.01.214-.098.263-.109.048-.24.009-.295-.088l-.4-.712-.57.578a.16.16 0 0 1-.113.046c-.084 0-.152-.06-.152-.14V5.72c0-.078.072-.141.16-.141z"
      style={{
        strokeWidth: 0.00649007,
      }}
    />
  </svg>
  </div>
)

export default Computer
