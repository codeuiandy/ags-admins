const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/lms-center/upload';
const cloudinaryUploadPreset = 'qzkwxm8f';
const preset = 'swatwrrd';

const uploadToCloudinary = async data => {
  data.append('upload_preset', cloudinaryUploadPreset);

    const res = await fetch(cloudinaryUrl, {
      method: 'POST',
      mode: 'cors',
      body: data,
    })
    
    return res.json();
};

export default uploadToCloudinary;
