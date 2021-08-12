export type Props = {
  year:number;
  month:number;
  day:number;
  hour:number;
  minute:number;
  compareMonth:number;
  compareDay:number;
  compareHour:number;
  compareMinute:number;
}

export const notEnd = (year:number,month:number,day:number,hour:number,minute:number,compareMonth:number,compareDay:number,compareHour:number,compareMinute:number) => {
  if (year >= 2021) {
    if (month > compareMonth) {
      return true;
    }else if (month === compareMonth && day > compareDay) {
      return true;
    }else if (month === compareMonth && day === compareDay && hour > compareHour) {
      return true;
    }else if (month === compareMonth && day === compareDay && hour === compareHour && minute > compareMinute) {
      return true;
    }else{
      return false;
    }

  }else{
    return false;
  }
}
export const wasHeld = (year:number,month:number,day:number,hour:number,minute:number,compareMonth:number,compareDay:number,compareHour:number,compareMinute:number) => {
  if (year <= 2021) {
    if (month < compareMonth) {
      return true;
    }else if (month === compareMonth && day < compareDay) {
      return true;
    }else if (month === compareMonth && day === compareDay && hour < compareHour) {
      return true;
    }else if (month === compareMonth && day === compareDay && hour === compareHour && minute < compareMinute) {
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
}

export const notStart = (year:number,month:number,day:number,hour:number,minute:number,compareMonth:number,compareDay:number,compareHour:number,compareMinute:number) => {
  if (year >= 2021) {
    if (month > compareMonth) {
      return true;
    }else if (month === compareMonth && day > compareDay) {
      return true;
    }else if (month === compareMonth && day === compareDay && hour > compareHour) {
      return true;
    }else if (month === compareMonth && day === compareDay && hour === compareHour && minute > compareMinute) {
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
}