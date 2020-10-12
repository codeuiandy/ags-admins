import React from 'react'
// URL.createObjectURL(e.target.files[0])

export default function GetImageUrl(Image) {
  let getUrl = Image
 let res = URL.createObjectURL(getUrl)
  console.log(res)
  return res
}
