import React from "react";
import "./LoaderLogo.css";

const Signature = ({ theme }) => (
  <text
    x="50%"
    y="92%"
    textAnchor="middle"
    dominantBaseline="baseline"
    className="signature"
    style={{
      fontFamily: "Agustina Regular",
      fontSize: 66,
      fill: "none",
      stroke: theme.body,
      strokeWidth: 1,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }}
  >
    Animesh Srivastava
  </text>
);

function LogoLoader({ theme }) {
  return (
    <svg
      className="raw_logo"
      viewBox="0 0 440 305"
      width="50%"
      height="40%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="hex"
        d="M293.545 167.405L229.5 204.381c-2.475 1.429-5.525 1.429-8 0L157.455 167.405A9.5 9.5 0 0 1 153.455 160.476V86.523a9.5 9.5 0 0 1 4-7.928l64.045-36.976c2.475-1.429 5.525-1.429 8 0l64.045 36.976a9.5 9.5 0 0 1 4 7.928v73.953a9.5 9.5 0 0 1-4 7.929Z"
        stroke={theme.body}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        className="hex"
        d="M147.455 73.595L211.5 36.619c2.475-1.429 5.525-1.429 8 0l64.045 36.976a9.5 9.5 0 0 1 4 7.928v73.954a9.5 9.5 0 0 1-4 7.928L219.5 198.381c-2.475 1.429-5.525 1.429-8 0l-64.045-36.976a9.5 9.5 0 0 1-4-7.928V81.523a9.5 9.5 0 0 1 4-7.928Z"
        stroke={theme.body}
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* ───────────────────────── MONOGRAM ───────────────────────── */}
      <text
        x="51%"
        y="42%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="monogram"
        style={{
          fontFamily: "'Roboto Slab', serif",
          fontSize: 75,
          letterSpacing: 5,
          fill: "none",
          stroke: theme.body,
          strokeWidth: 3,
        }}
      >
        AN
      </text>

      {/* ────────────────────── SIGNATURE ────────────────────── */}
      <Signature theme={theme} />

      {/* ────────────────────── ANIMATIONS ───────────────────── */}
      <style>{`
        .hex {
          stroke-dasharray: 900;
          stroke-dashoffset: 900;
          animation: dash 3.2s ease forwards 0.5s;
        }
        .monogram {
          opacity: 0;
          animation: fade 1.2s ease forwards 2.2s;
        }
        .signature {
          stroke-dasharray: 1400;
          stroke-dashoffset: 1400;
          animation: dash 3s ease forwards 2.9s;
        }
        @keyframes dash { to { stroke-dashoffset: 0; } }
        @keyframes fade { to { opacity: 1; } }
      `}</style>
    </svg>
  );
}

export default LogoLoader;
