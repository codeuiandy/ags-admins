import React, { useState,useEffect } from 'react';
import MultiImageInput from 'react-multiple-image-input';
 
export function Images(props) {
  const crop = {
    unit: '%',
    aspect: 4 / 3,
    width: '400'
  };
 
  const [images, setImages] = useState({});

  useEffect(() => {

    props.advertImages(images)
  }, [images])

 
  return (
    <MultiImageInput
    max={6}
    theme={{
        background: 'rgba(228, 228, 228, 0.2)',
        outlineColor: 'rgba(196, 196, 196, 0.6)',
        textColor: 'white',
        buttonColor: 'orange',
        modalColor: '#ffffff',
      
      }}
      images={images}
      setImages={setImages}
    
    />
  );
}