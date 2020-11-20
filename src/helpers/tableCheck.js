const { TableComponentsProvider } = require("react-bs-datatable")

const addGroup = (id)=>{
setSelectedGroups([...selectedGroups,id])
}

const removeGroup = (id)=>{
    console.log("del ID>>>",id)
    const sletedGRP = selectedGroups.filter((data)=>{
        console.log("data del ID>>>",data)
       return data !== id
    })
setSelectedGroups(sletedGRP)
console.log(">>>>selectedd>>>",selectedGroups)
}



   return({
                check:<input type="checkbox" checked={props.selectedGroups.includes(data.id) ? true : false} onClick={()=>props.selectedGroups.includes(data.id) ? props.removeGroup(data.id) : props.addGroup(data.id)}/>,
                title:<Link to={`view_group/${data.id}`}>{data.name}</Link>,
                Members:data.members_count,
                closed:data.closed === true ?"Closed Group": "Open Group",
                description:data.description === null || data.description === undefined || data.description == "" ? "No description added": data.description,

            })
        });


     FOR CLASS Table COMPONENT

  removePrivilage=(id)=>{
     let selectedPrivilages = this.state.selectedPrivilages;

     let newArray = []

    let res =  selectedPrivilages.filter((res)=>{
         return(
             res !== id
         )
     })

     newArray.push(res)

     this.setState({
         selectedPrivilages:res
     })
    }

    addPrivlage=(id)=>{
        let NewArray = this.state.selectedPrivilages.slice()
        NewArray.push(id)

        this.setState({
            selectedPrivilages:NewArray
        })
     console.log("ids",this.state.selectedPrivilages)
    }