import React from 'react';
import {GalleryImage} from '../';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts'

export default function ShowGallery() {

  const {shows} = useAuth()

  return (
    <div className='shows'>
      {shows.map(show => <Link to={`${show.id}`} key={show.id}><GalleryImage data={show} /></Link>)}
    </div>
  )
};
