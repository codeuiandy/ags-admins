import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';

function dateToFromNowDaily( myDate ) {

  // get from-now for this date
  var fromNow = moment( myDate ).fromNow();
  // var fromNow = <Moment fromNow>{myDate}</Moment>

  const calendarStrings = {
    lastDay : '[Yesterday]',
    sameDay : '[Today]',
    nextDay : '[Tomorrow]',
    lastWeek : '[last] dddd',
    nextWeek : 'dddd',
    sameElse : function () {
      return "[" + fromNow + "]";
  }
  };

  return <Moment calendar={calendarStrings}>{myDate}</Moment>
}


export default dateToFromNowDaily;
