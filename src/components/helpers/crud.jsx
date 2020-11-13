
    const [DeleteId, setDeleteId] = useState("")
    const [EditId, setEditId] = useState("")
    const [getNetworks, setgetNetwork] = useState([])
    const [pageType, setpageType] = useState("create")

    onClick={() => this.props.getModalEditData(data)} 
    onClick={() => this.props.getDeletId(data.id)}

    useEffect(() => {
        getData()
        return () => {
        
        }
      }, [])
  
    const  getData =async()=>{
        try {
            const res = await httpGet(`partners/`)
            if (res.status === 200) {
              setgetNetwork(res.data)
            }
            console.log(res)
        } catch (error) {
            
        }
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
         if (pageType === "create") {
           e.preventDefault();
           try {
             showLoader()
             
             const Data = {
              contact_person: partners.contact_person, 
              industry: partners.industry,
              name:  partners.name,
              partner_user:  "e87af4c4-b718-4496-b5a1-7aa6d8983818",
              phone:  partners.phone,
              service_rendered:  partners.service_rendered,
              website:  partners.website,
             address:  partners.address
             }
           
  
               let res = await httpPost(`partners/`,Data)
  
              console.log("res status",res) 
              if (res.status === 201 || res.status === 200) {
                      hideLoader()
               console.log(res)
               Setpartners
               ({
                 contact_person:"",
                industry:"",
                name:"",
                partner_user:"",
                phone:"",
                service_rendered:"",
                website:"",
                address:""
              })
     
               CloseModal()
               getData()
             
         
               NotificationManager.success(
                  "Data created successfully.",
                 "Yepp",
                 3000
             );
              }
             
           
               hideLoader()
         } catch (error) {
             console.log(error.response)
             NotificationManager.success(
                 error,
                "Opps",
                3000
            );
             hideLoader()
         // }
         }
         }
  
  
  
         if (pageType === "edit") {
          e.preventDefault();
          try {
            showLoader()
            
            const Data = {
             contact_person: partners.contact_person, 
             industry: partners.industry,
             name:  partners.name,
             partner_user:  "e87af4c4-b718-4496-b5a1-7aa6d8983818",
             phone:  partners.phone,
             service_rendered:  partners.service_rendered,
             website:  partners.website,
            address:  partners.address
            }
          
  
              let res = await httpPatch(`partners/${EditId}/`,Data)
  
             console.log("res status",res) 
             if (res.status === 201 || res.status === 200) {
                     hideLoader()
              console.log(res)
              Setpartners
              ({
                contact_person:"",
               industry:"",
               name:"",
               partner_user:"",
               phone:"",
               service_rendered:"",
               website:"",
               address:""
             })
    
              CloseModal()
              getData()
            
        
              NotificationManager.success(
                 "Data edited successfully.",
                "Yepp",
                3000
            );
             }
            
          
              hideLoader()
        } catch (error) {
            console.log(error.response)
            NotificationManager.success(
                error,
               "Opps",
               3000
           );
            hideLoader()
        // }
        }
        }
   
        
       
     
       }
  

   
   const  handleFileChange=(e)=>{

    if (resourceType === "pdf") {
     SetPDFdata({...pdfData, [e.target.name]: e.target.files[0] })
     console.log(pdfData)
    }

    if (resourceType === "course") {
      Setcoursedata({...courseData, [e.target.name]: e.target.files[0] })
      console.log(courseData)
     }

     if (resourceType === "session") {
      Setsessiondata({...sessionData, [e.target.name]: e.target.files[0] })
      console.log(sessionData)
     }

    }

    const  handleChange=(e)=>{
      if (resourceType === "pdf") {
      SetPDFdata({...pdfData, [e.target.name]: e.target.value })
      console.log(pdfData)}

      if (resourceType === "course") {
        Setcoursedata({...courseData, [e.target.name]: e.target.value })
        console.log(courseData)}

        
      if (resourceType === "session") {
        Setsessiondata({...sessionData, [e.target.name]: e.target.value })
        console.log(sessionData)}


     }


     getData=async()=>{
        try {
            const res = await httpGet(`partners/`)
            if (res.status === 200) {
              SetafinityNetwork(res.data)
            }
            console.log(res)
        } catch (error) {
            
        }
    }


      
     const getDeletId=(id)=>{
        setDeleteId(id)
    }
  
    const handleDelete=async()=>{
      showLoader()
      try {
          let res = await httpDelete(`partners/${DeleteId}/`)
          if (res.status===204 || res.status===200 || res.status===201) {
              NotificationManager.success(
              "deleted successfully",
             "Yepp",
             3000
         );
         getData()
         hideLoader()
          }
          
      } catch (error) {
          hideLoader()
          NotificationManager.error(
              error,
             "Opps",
             3000
         );
      }
  
  }
  
        const getModalEditData=(data)=>{
        console.log(data)
          Setpartners
          ({
            contact_person:data.contact_person,
           industry:data.industry,
           name:data.name,
           partner_user:data.partner_user,
           phone:data.phone,
           service_rendered:data.service_rendered,
           website:data.website,
           address:data.address
         })
  
         setpageType("edit")
         setEditId(data.id)
  
        }
  