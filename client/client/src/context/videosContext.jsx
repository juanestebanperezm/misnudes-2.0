import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const URL_VIDEOS = `https://www.eporner.com/api/v2/video/search/?query=teen&per_page=${Math.floor(
  Math.random() * 30
)}&page=${Math.floor(
  Math.random() * 100
)}&thumbsize=medium&order=top-weekly&lq=0&format=json`

const VideosContext = createContext()

const VideosProvider = ({ children }) => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    async function getVideos () {
      const response = await axios.get(URL_VIDEOS)
      setVideos(response.data.videos)
    }
    getVideos()
  }, [])
  return (
    <VideosContext.Provider
      value={{
        videos
      }}
    >
      {children}
    </VideosContext.Provider>
  )
}

export { VideosContext, VideosProvider }
