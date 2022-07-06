/* eslint-disable multiline-ternary */
import React, { useContext } from 'react'
import { VideosContext } from '../../context/videosContext'

const GridVideos = () => {
  const { videos } = useContext(VideosContext)

  console.log(videos)

  return (
    <section className=''>
      <div className='w-auto h-96 items-center mt-6 p-6 overflow-x-auto overscroll-x-contain flex space-x-6 overflow-y-hidden'>
        {videos ? (
          videos.map((video, index) => (
            <div key={index}>
              <article className='h-96 w-96 shadow-md rounded-lg flex-none transform transition-all hover:-translate-y-4 hover:shadow-xl'>
                <embed src={video.embed} width='100%' height='400' />
              </article>
              <div className=''>
                <p className='text-white mt-2'>{video.title}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </section>
  )
}

export default GridVideos
