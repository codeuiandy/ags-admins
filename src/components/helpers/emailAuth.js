import React from 'react'
import { NotificationManager } from "react-notifications";

export function ValidateEmail (email) {
 
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
  {
    return (true)
  } 
  NotificationManager.error(
      "You have entered an invalid email address!",
      "Opps!",
      3000
    );

    return (false)
   
}

