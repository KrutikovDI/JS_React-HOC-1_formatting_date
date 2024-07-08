import moment from 'moment'
import dateChecking from './dateChecking'

export default function DateTimePrettyFC (Component) {
    return function (props){
      const nowDate = moment();
      const duration = moment.duration(nowDate.diff(props.date));
      const years = duration.years();
      const months = duration.months();
      const days = duration.days();
      const hours = duration.hours();
      const minutes = duration.minutes();
      if(dateChecking(years, months, days, hours)) {
        return Component({date: `${minutes} минут назад`})
      } else if(dateChecking(years, months, days)) {
        return Component({date: `${hours} часов назад`})
      } else if(dateChecking(years, months)) {
        return Component({date: `${days} дней назад`})
      } else if(dateChecking(years)) {
        return Component({date: `${months} месяцев назад`})
      } else {
        return Component({date: `${years} лет назад`})
      }
    }
  }