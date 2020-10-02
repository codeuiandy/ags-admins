import React from 'react'
import { NotificationManager } from "react-notifications";

export function ValidateEmptyString(value) {
  if (value === "") {
    NotificationManager.error(
      "Password is required",
      "Opps!",
      3000
    );
    return false
  }
  else{
    return true
  }
}
