import React from 'react'

export default function Video() {
  return (
    <div className="rounded border-lines1 relative flex flex-col justify-start items-center w-[887px] h-[499px]">
    <iframe className="w-full h-full responsive-iframe" src={`https://www.youtube.com/embed/hyFHSVBz3nM?si=F0MqZdlWqp4r8Jrk`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </div>
  )
}
