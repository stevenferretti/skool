import * as React from 'react';
export default class BoardCalendar extends React.Component<ICalendarProps> {
  public render() {
    return (
      <section>
        <div className="container">
          <iframe
            src="googleCalandarHere.html"
            width="100%"
            height="600"
            scrolling="no"
          />
        </div>
      </section>
    );
  }
}

export interface ICalendarProps {
  events?: Array<{
    title: string;
    start?: string;
    end?: string;
    url?: string;
    id?: number;
  }>;
}
