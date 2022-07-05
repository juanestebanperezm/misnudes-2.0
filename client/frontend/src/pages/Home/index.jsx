import React from 'react'
import GridVideos from '../../components/FeedVideos'
import { VideosProvider } from '../../context/videosContext'

function Home () {
  return (
    <VideosProvider>
      <main className='h-screen bg-secondary-dark'>
        <p className='text-white font-bold text-3xl text-center'>Bienvenido</p>
        <GridVideos />
      </main>
    </VideosProvider>
  )
}

export default Home
