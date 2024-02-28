import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const SlaiderCesar = () => {
  const images = [

    { 
      original: 'https://i.postimg.cc/bNQfX5H5/xbanner-2-jpg-pagespeed-ic-z3-Dp6-TOros.jpg'
    },
    {
      original: 'https://i.postimg.cc/q7rfMxQ7/xbanner-1-jpg-pagespeed-ic-4-H20l-Tb-VZ.jpg'
    },
    {
      original: 'https://i.postimg.cc/6pfKZP8Z/xbanner-3-jpg-pagespeed-ic-u-AZDMWZPDj.webp'
    },
    {
      original: 'https://i.postimg.cc/8kdhHF56/xbanner-4-jpg-pagespeed-ic-5-HVBQik-ma.jpg'
    }, 
  ]

  return (
    <div className='pt-12' id="homeLink">
      <ImageGallery
      items={images}

      //muestra el boton de play
      showPlayButton={false}

      //muestra el boton de maximizar
      showFullscreenButton={false}

      //muestra los puntos de navegacion
      showBullets={true}

      //autoPlay
      autoPlay={true}

      //duracion de cada imagen
      slideInterval={4000}

      //duracion al pasar de una imagen a otra
      slideDuration={1000}
      />
    
    </div>
  )
}

export default SlaiderCesar
