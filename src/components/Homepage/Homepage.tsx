import * as React from 'react';
import CountUp from 'react-countup';
import { Parallax } from 'react-parallax';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { withSiteConfig } from '../../hocs/withSiteConfig';
import { firebaseDB } from '../../utils/firebase';
import FirebaseImage from '../firebase/FirebaseImage';
import './Homepage.css';

class Homepage extends React.Component<any, ISliderState> {
  constructor(props) {
    super(props);
  }

  public async componentDidMount() {
    const slidesRef = await firebaseDB
      .ref('/district/schoolsliders')
      .once('value');
    this.setState({ slidesRef });
  }

  public getCarousel() {
    if (!this.state || !this.state.slidesRef) {
      return false;
    }
    const imageArray: string[] = [];
    this.state.slidesRef.val().map(val => {
      if (typeof val === 'string') {
        imageArray.push(val);
      }
    });

    const chosenArray =
      imageArray.length >= 10 ? getRandom(imageArray, 10) : imageArray;

    const carousel = (
      <Carousel
        infiniteLoop
        autoPlay
        showArrows
        useKeyboardArrows
        showThumbs={false}
      >
        {chosenArray &&
          chosenArray.map(slidePath => {
            return (
              <div key={slidePath}>
                <FirebaseImage path={slidePath} />
              </div>
            );
          })}
      </Carousel>
    );

    return carousel;
  }

  public render() {
    // Getting Rid of object from firebase that is coming into array
    // and only taking in the strings
    if (!this.state) {
      return false;
    }

    return (
      <div>
        <div>
          <section id="home">
            {/* ShowThumbs won't work because images are loaded through firebase 
              package will need to be modified if we want thumbs */}
            {this.getCarousel()}
          </section>
        </div>

        {/* <!-- Section: About --> */}
        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="ribbon">
                  <strong className="ribbon-content">
                    SCHOLARSHIP - LEADERSHIP - SERVICE
                  </strong>
                </h1>
              </div>
            </div>
            <div className="section-content">
              <div className="row">
                <div className="col-md-6">
                  <video width="100%" controls autoPlay muted>
                    <source src="videos/home.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="col-md-6">
                  <h2 className="mt-0 mt-sm-10">
                    An "<span className="text-theme-colored2">A</span>" Rated
                    Public Charter Middle School
                  </h2>
                  <p className="bold">
                    Skool provides an engaging learning
                    environment designed to support the three key pillars of a
                    successful education.
                  </p>
                  <p className="">
                    {' '}
                    <i className="fa fa-hand-o-right text-theme-colored2 font-15" />{' '}
                    To provide an academic and social atmosphere that will
                    promote{' '}
                    <span className="text-theme-colored2">SCHOLARSHIP</span> by
                    encouraging students to discover and develop their
                    individual talents and to recognize that reading is a
                    requisite skill for scholarship in all areas.
                  </p>
                  <p className="">
                    {' '}
                    <i className="fa fa-hand-o-right text-theme-colored font-15" />{' '}
                    To create stimulating opportunities for students to develop{' '}
                    <span className="text-theme-colored2">LEADERSHIP</span>{' '}
                    skills.
                  </p>
                  <p className="">
                    {' '}
                    <i className="fa fa-hand-o-right text-theme-colored2 font-15" />{' '}
                    To instill in students the value of volunteerism through{' '}
                    <span className="text-theme-colored2">SERVICE</span>{' '}
                    learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Have to use local image since this uses a weird jquery image method 
        that actually changes style css tag */}
        <Parallax strength={300} bgImage={require('./rocket.jpg')}>
          <section className="divider layer-overlay overlay-dark-8">
            <div className="container pt-90 pb-90">
              <div className="section-content text-center">
                <div className="row" style={{ margin: 'auto' }}>
                  <div className="col-xs-12 col-sm-6 col-md-3 mb-md-50">
                    <div className="funfact text-center">
                      <i className="pe-7s-study text-theme-colored2" />
                      <h2
                        data-animation-duration="2000"
                        data-value="5100"
                        className="animate-number text-white font-38"
                      >
                        <CountUp start={0} end={300} />
                      </h2>
                      <h5 className="text-white text-uppercase mb-0">
                        Graduated Students
                      </h5>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-2 mb-md-50">
                    <div className="funfact text-center">
                      <i className="pe-7s-smile text-theme-colored2" />
                      <h2
                        data-animation-duration="2000"
                        data-value="5100"
                        className="animate-number text-white font-38"
                      >
                        <CountUp start={0} end={300} />
                      </h2>
                      <h5 className="text-white text-uppercase mb-0">
                        Enrolled Students
                      </h5>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-3 mb-md-50">
                    <div className="funfact text-center">
                      <i className="pe-7s-users text-theme-colored2" />
                      <h2
                        data-animation-duration="2000"
                        data-value="200"
                        className="animate-number text-white font-38"
                      >
                        <CountUp start={0} end={30} />
                      </h2>
                      <h5 className="text-white text-uppercase mb-0">
                        Dedicated Staff Members
                      </h5>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-2 mb-md-0">
                    <div className="funfact text-center">
                      <i className="pe-7s-note2 text-theme-colored2" />
                      <h2
                        data-animation-duration="2000"
                        data-value="600"
                        className="animate-number text-white font-38"
                      >
                        <CountUp start={0} end={30} />
                      </h2>
                      <h5 className="text-white text-uppercase mb-0">
                        Stimulating Courses
                      </h5>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-2 mb-md-50">
                    <div className="funfact text-center">
                      <i className="pe-7s-cup text-theme-colored2" />
                      <h2
                        data-animation-duration="2000"
                        data-value="20"
                        className="animate-number text-white font-38"
                      >
                        <CountUp start={0} end={1} />
                      </h2>
                      <h5 className="text-white text-uppercase mb-0">
                        Exceptional School
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Parallax>
        <section id="about">
          <div className="container">
            <div className="row center">
              <div className="col-md-12">
                <div className="clearfix text-center" />
                <h2>Did you know?</h2>
                <p className="bold">
                  {this.props.siteConfig.name} offers bus service for our
                  students from skool to North Port.
                </p>
                <p className="bold">
                  Looking for After School Care?
                  <br />
                  {this.props.siteConfig.name} has free bus service to both the
                  Venice and North Port&nbsp;
                  <a href="https://www.bgcskool.com/" target="_blank">
                    Boys & Girls Clubs
                  </a>
                  &nbsp;and the&nbsp;
                  <a href="http://www.swflymca.org/programs/before-after-school/#venice)">
                    YMCA
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

interface ISliderState {
  slidesRef: any;
}

function getRandom(arr, n) {
  const result = new Array(n);
  let len = arr.length;
  const taken = new Array(len);
  if (n > len) {
    throw new RangeError('getRandom: more elements taken than available');
  }
  while (n--) {
    const x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

export default withSiteConfig(Homepage);
