import * as React from 'react';
export default class Calendar extends React.Component<ICalendarProps> {
  public render() {
    return (
      <section>
        <div className="container">
          <iframe
            src="google_calandar_link.html"
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
