import React from 'react'
// import { useAuth } from '../../contexts'

export default function GalleryImage({data}) {

  // const {shows} = useAuth()

  return (
    <div className='gallery-image'>
      <img src={data.image.medium} />
    </div>
  )
};
