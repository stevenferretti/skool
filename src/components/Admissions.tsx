import * as React from 'react';
import {
  Button,
  ButtonGroup,
  Col,
  Grid,
  ListGroup,
  ListGroupItem,
  Panel,
  Row,
  Well
} from 'react-bootstrap';

import './Admissions.css';
import FirebaseFileLink from './firebase/FirebaseFileLink';
import FirebaseImage from './firebase/FirebaseImage';

export default class Admissions extends React.Component {
  public render() {
    return (
      <Grid>
        <Row>
          <Col md={8}>
            <h3 style={{ color: 'red', textAlign: 'center' }}>
              Applications must be approved by School prior to enrollment.
            </h3>
            <h3>InfoSnap</h3>
            <Well>
              <h4 style={{ color: 'blue' }}>
                NEW students to the skool County School District, please use
                the link below to register your child.
              </h4>
              <ButtonGroup vertical block>
                <Button
                  href="https://secure.infosnap.com/family/gosnap.aspx?action=12895&culture=en"
                  target="_blank"
                  bsStyle="primary"
                >
                  English
                </Button>
                <Button
                  href="https://secure.infosnap.com/family/gosnap.aspx?action=12895&culture=es"
                  target="_blank"
                  bsStyle="primary"
                >
                  Spanish
                </Button>
              </ButtonGroup>
            </Well>

            <Well>
              <h4 style={{ color: 'gray' }}>
                ALL other student registration, please use the link below to
                re-register your child.
              </h4>
              <ButtonGroup vertical block>
                <Button
                  href="https://secure.infosnap.com/family/gosnap.aspx?action=12894&culture=en"
                  target="_blank"
                >
                  English
                </Button>
                <Button
                  href="https://secure.infosnap.com/family/gosnap.aspx?action=12894&culture=es"
                  target="_blank"
                >
                  Spanish
                </Button>
              </ButtonGroup>
            </Well>

            <p>
              Thank you for your interest in The Skool.
              The school strives to make the enrollment process as enjoyable as
              possible and welcomes any inquiries from our prospective parents.
            </p>
            <p>
              We offer a student shadowing program and campus campus tours for
              interested families as well as two Open Houses each year.
              <ListGroup>
                <ListGroupItem>
                  The shadowing program provides prospective students with the
                  opportunity to participate in a typical School school day
                </ListGroupItem>
                <ListGroupItem>
                  Campus tours allow parents and students to walk through the
                  school and view the school's environment and have questions
                  answered along the way
                </ListGroupItem>
              </ListGroup>
            </p>
            <p>
              All campus tours and shadowing days must be scheduled through the
              front office and are based upon availability
            </p>

            <p>
              The School Open Houses are designed to welcome potential and existing
              families to explore our school and engage staff.
              <ListGroup>
                <ListGroupItem>
                  Our August Open House is before the school Parents and
                  students attend to obtain their new schedule and meet with
                  their teachers.
                </ListGroupItem>
                <ListGroupItem>
                  Our Second Open House is our annual Coffee Hour held in
                  January for families considering School as their educational
                  home. After a delicious breakfast, parents are introduced to
                  administrators and grade teachers. They are then taken on a
                  tour of the school where their tour guide and student
                  representative will be glad to answer any inquiries. This
                  event is held primarily for parents as it occurs during the
                  school day.
                </ListGroupItem>
              </ListGroup>
            </p>

            <p>
              If you are interested in enrollment for the 2018-2019 school year,
              please feel free to submit a school application for any available
              opening. Please note that there is limited availability.
            </p>
          </Col>
          <Col md={4} style={{ textAlign: 'center', paddingTop: 20 }}>
            <Panel>
              <Panel.Body>
                <FirebaseImage
                  path={'staff/image1.JPG'}
                  width={225}
                />
              </Panel.Body>
              <Panel.Footer>
                <h4>FirstName LastNAME</h4>
                <h5>Registrar</h5>
                <a href="mailto:test@skool.net">
                  test@skool.net
                </a>
                <br />
                <div className="bold">
                  <FirebaseFileLink
                    path="EnrollmentGuide.pdf"
                    label="Enrollment Guide"
                  />
                  <br />
                  <FirebaseFileLink
                    path="EnrollmentApplication.pdf"
                    label="Enrollment Application"
                  />
                </div>
              </Panel.Footer>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}
