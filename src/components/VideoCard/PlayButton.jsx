import React from "react"

export default function PlayButton({ onClick, className }) {
  return (
    <svg
      className={`video-play-button ${className}`}
      viewBox="0 0 200 200"
      alt="Introduction video"
      onClick={onClick}
    >
      <circle cx="100" cy="100" r="90" fill="none" strokeWidth="15" />
      <polygon points="70, 55 70, 145 145, 100" fill="#fff" />
    </svg>
  )
}
