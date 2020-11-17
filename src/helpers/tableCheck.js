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