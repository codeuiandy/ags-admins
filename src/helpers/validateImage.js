const validateImage = file => {
  let valid = true;
  let message = 'uploading...';
  for(let i = 0; i < file.length; i++){
    if (file[i] && !/\/(jpg|jpeg|tiff|png)$/i.test(file[i].type)) {
      valid = false;
      message = 'Invalid picture format';
    }
  
    if (file[i] && parseFloat(file[i].size) > 2097152) {
      valid = false;
      message = 'File size exceeds 2MB';
    }
  }

  return { valid, message };
};

export default validateImage;
