import React from "react";
import DateTime from "./DateTime";
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.locale('ru');
dayjs.extend(customParseFormat)
dayjs.extend(relativeTime)


const timePretty = (Component) => {
  return class extends React.Component {
    static get displayName() {
      const name = Component.displayName || Component.name || 'Component';
      return `timePretty(${name})`;
    }
    render() {
    const props = this.props
    const date = props.date
    const time = dayjs(date, 'YYYY-MM-DD HH:mm:ss').fromNow()
    return <Component {...{date: time}}/>;
    }
  }
}

export const DateTimePretty = timePretty(DateTime)
