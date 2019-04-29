import * as React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import FirebaseImage from './firebase/FirebaseImage';
import './MissionStatement.css';
export default class MissionStatement extends React.Component<
  IMissionStatementProps
  > {
  public render() {
    const statement = `
            Leverage agile frameworks to provide a robust synopsis for high level overviews. 
            Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. 
            Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
            </br>
            Leverage agile frameworks to provide a robust synopsis for high level overviews. 
            Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. 
            Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
            </br>.
          
        `;

    const blockquote = `
            Sincerely Yours,
            Principal`;

    return (
      <section>
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={4} className="princPic">
              <FirebaseImage path={'staff/image2.JPG'} width={225} />
            </Col>
            <Col xs={12} md={8}>
              <blockquote className="theme-colored pt-20 pb-20">
                <p>
                  {statement.split('</br>').map((i, key) => {
                    return (
                      <div key={key}>
                        <br />
                        {i}
                      </div>
                    );
                  })}
                </p>
                <footer>
                  {blockquote.split('\n').map((i, key) => {
                    return <div key={key}>{i}</div>;
                  })}
                  <i>Principal</i>
                </footer>
              </blockquote>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export interface IMissionStatementProps {
  message: string;
}
