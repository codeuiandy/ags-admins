const handleImageChange=(e) =>{
    e.preventDefault();
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
    //   this.setState({
    //     file: file,
    //     base64: reader.result
    //   });
       setAdvertData({...advertData, image:reader.result })
   console.log("base 64>>>>>",advertData.image)
    };
    
  }