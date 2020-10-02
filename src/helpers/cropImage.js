function getCroppedImg(image, pixelCrop, fileName) {
 
  const canvas = document.createElement('canvas');
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;
  const ctx = canvas.getContext('2d');


  let img = document.getElementsByClassName('ReactCrop__image')[0]

  // console.log(canvas, ctx)
 if(img){
    ctx.drawImage(
      img,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );
  }
  // As Base64 string
  // const base64Image = canvas.toDataURL('image/jpeg');
  // return base64Image;

  // As a blob
  return new Promise((resolve, reject) => {
    canvas.toBlob(file => {
      file.name = fileName;
      resolve(file);
    }, 'image/jpeg');
  });
}

export default getCroppedImg;
