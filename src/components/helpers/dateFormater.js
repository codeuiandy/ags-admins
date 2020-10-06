import React from 'react'
import moment from 'moment'
export default function dateFormater(date) {
  let formatedDate = moment(date).format("DD/MM/YYYY")
  return (
    formatedDate
  )
}
