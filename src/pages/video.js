import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import YouTube from "react-youtube"
import { useWindowSize } from "../Hooks/useWindowSize"
import styled from "styled-components"

const VideosList = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Video = styled.ul`
  padding: 0;
  margin: 20px 0;
`

const VideoPage = ({ data }) => {
  const viewport = useWindowSize()

  const videos = data.allDatoCmsYoutube.edges
  const link = videos[0].node.youtubeLink

  const getYoutubeVideoId = link => {
    return link.slice(link.indexOf("=") + 1, link.length)
  }

  let VIDEO_H = 300
  let VIDEO_W = viewport.width * 0.9

  if (viewport.width > 760) {
    VIDEO_W = 600
  }

  const options = {
    height: VIDEO_H,
    width: VIDEO_W,
  }

  return (
    <>
      <Helmet>
        <title>Falowanie - Video</title>
      </Helmet>
      <VideosList>
        {videos.map(video => (
          <Video>
            <YouTube
              videoId={getYoutubeVideoId(video.node.youtubeLink)}
              opts={options}
            />
          </Video>
        ))}
      </VideosList>
    </>
  )
}

export const query = graphql`
  query YoutubeQuery {
    allDatoCmsYoutube {
      edges {
        node {
          title
          youtubeLink
        }
      }
    }
  }
`

export default VideoPage
