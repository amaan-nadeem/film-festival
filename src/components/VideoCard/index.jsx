import React, { useState } from "react"
import YouTube from "react-youtube"
import "./index.scss"
import PlayButton from "./PlayButton"

const VideoCard = ({ video, poster, variant, youtubeId, videoIndex }) => {
  const [isControl, setIsControl] = useState(false)

  const onVideoPlay = () => {
    setIsControl(!isControl)
    const video = document.getElementsByTagName("video")[videoIndex]
    const videoButton = document.getElementsByClassName("video-overlay")[videoIndex]
    if (isControl) {
      video.pause()
    } else {
      video.play()
    }
    if (!videoButton) return
    videoButton.style.display = "none"
  }

  const onPlay = () => {
    const videoButton = document.getElementsByClassName("video-overlay")[0]
    if (!videoButton) return
    videoButton.style.display = "none"
  }

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      rel: 0,
    },
  }

  return (
    <section className="section-video">
      <div className="video-container">
        <div id="embed-player" />
        {youtubeId ? (
          <YouTube opts={opts} videoId={youtubeId} onPlay={onPlay} />
        ) : (
          <video controls={isControl} poster={poster} onPlay={onPlay}>
            <source src={video} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        )}

        <div className="video-overlay">
          {variant === "home" ? (
            <div className="home-video-overlay d-none d-md-block">
              <h1>Good Health is Freedom</h1>
              <div className="d-flex flex-row align-items-end">
                <ul>
                  <li>
                    Healright is formulated to fight chronic diseases, including
                    heart disease, type 2 diabetes, obesity,and digestive
                    issues.
                  </li>
                  <li>
                    Studies show that Healright works: 15 clinical trials over
                    15 years.
                  </li>
                </ul>
                <PlayButton className="home" />
              </div>
            </div>
          ) : (
            <PlayButton onClick={onVideoPlay} className="default" />
          )}
        </div>
        {/* <div className="play-btn">
          <Button
            onClick={() => {
              if (isControl) {
                onVideoPlay();
                setBtnText("Stop Video");
              } else {
                onVideoPlay();
                setBtnText("Play Video");
              }
            }}
            style={{
              marginTop: 40,
            }}
            variant="outlined"
          >
            <Typography
              style={{
                fontSize: "16px",
                fontFamily: "MabryProRegular",
                textTransform: "initial",
                letterSpacing: "0px",
                textDecoration: "none",
                color: "black",
              }}
            >
              {btnText}
            </Typography>
          </Button>
        </div> */}
        {/* <div className="btn">
          <PlayButton onClick={onVideoPlay} className="default" />
        </div> */}
      </div>
    </section>
  )
}

export default VideoCard
