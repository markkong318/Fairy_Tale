import React, { PureComponent } from 'react';
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types';
import ControlPanel from './ControlPanel'
import './Book.less';
import $ from 'jquery';
import '../../../vendor/turnjs4/lib/turn.js'

const defaultProps = {
  defaultData: {
    name: '',
    asyncName: ''
  }
};

const propTypes = {
  defaultData: PropTypes.object
};

class Book extends PureComponent{
  ratio = 1.38;

  // NAV_STAR_ICON_ON_SRC = '/assets/pics/star02.png';
  // NAV_STAR_ICON_OFF_SRC = '/assets/pics/star01.png';
  // NAV_SPEAKER_ICON_ON_SRC = '/assets/pics/speaker01.png';
  // NAV_SPEAKER_ICON_OFF_SRC = '/assets/pics/speaker02.png';
  // NAV_BACK_ICON_ON_SRC = '/assets/pics/back02.png';
  // NAV_BACK_ICON_OFF_SRC = '/assets/pics/back01.png';
  // NAV_CLOSE_ICON_SRC = '/assets/pics/close01.png';

  // state = {
  //   bgmUrl: '',
  //   bgmPlaying: false,
  //   bgmMuted: true,
  //   bgmLoop: true,
  //   seUrl: '',
  //   sePlaying: false,
  //   seMuted: false,
  //   seLoop: false,
  //   navStarIcon: this.NAV_STAR_ICON_OFF_SRC,
  //   navSpeakerIcon: this.NAV_SPEAKER_ICON_OFF_SRC,
  //   navBackIcon: this.NAV_BACK_ICON_OFF_SRC,
  //   navCloseIcon: this.NAV_CLOSE_ICON_SRC,
  // };

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {

  }

  componentWillMount() {
  }

  componentDidMount() {
    const size = this.resize();
    this.plugins();

    console.log(`size: `);
    console.log(size);

    window.addEventListener('resize', (e) => {
      const size = this.resize();
      console.log(size);
      console.log($(this.flipbook));
      $(this.flipbook).turn('size', size.width, size.height);
    });

    // this.setState({
    //   bgmUrl: '',
    //   bgmPlaying: true,
    // })

  }

  componentWillUnmount(){
    this.props.clearData();
  }

  resize () {
    // reset the width and height to the css defaults
    this.flipbook.style.width = '';
    this.flipbook.style.height = '';

    console.log('client width: ' + this.flipbook.clientWidth);
    console.log('client width: ' + this.flipbook.clientHeight);

    let width = this.flipbook.clientWidth,
      height = Math.round(width / this.ratio),
      padded = window.innerHeight; //Math.round(window.innerHeight * 0.9);

    console.log('width 1: ' + width);
    console.log('height 1: ' + height);
    console.log('client Height:' + document.body.clientHeight);
    console.log('window.innerHeight: '+ window.innerHeight);

    // if the height is too big for the window, constrain it
    if (height > padded) {
      height = padded;
      width = Math.round(height * this.ratio);
    }

    console.log('width 2: ' + width);
    console.log('height 2: ' + height);

    // set the width and height matching the aspect ratio
    this.flipbook.style.width = width + 'px';
    this.flipbook.style.height = height + 'px';

    return {
      width: width,
      height: height
    };
  }

  plugins() {
    // run the plugin
    $(this.flipbook).turn({
      gradients: true,
      acceleration: true,
      display: 'single',
    });
    // hide the body overflow
    // document.body.className = 'hide-overflow';
  }

  // onPagePrevPress = () => {
  //   this.pagePrev.src = '/assets/pics/left02.png';
  // };
  //
  // onPagePrevRelease = () => {
  //   this.pagePrev.src = '/assets/pics/left01.png';
  // };

  handle = () => {
    $(this.flipbook).turn('previous');
  };

  // onPageNextPress = () => {
  //   this.pageNext.src = '/assets/pics/right02.png';
  // };
  //
  // onPageNextRelease = () => {
  //   this.pageNext.src = '/assets/pics/right01.png';
  // };

  onPageNextClick = () => {
    $(this.flipbook).turn('next');
  };
  //
  // onHeaderClose = () => {
  //   $(this.header).hide();
  // };
  //
  // onHeaderOpen = () => {
  //   $(this.header).show();
  // };

  onBgmMutedToggle = () => {
    if (this.state.bgmMuted) {
      this.setState({
        bgmMuted: false,
        navSpeakerIcon: this.NAV_SPEAKER_ICON_OFF_SRC,
        bgmUrl: '/assets/books/00_example/example.mp3',
      });
    } else {
      this.setState({
        bgmMuted: true,
        navSpeakerIcon: this.NAV_SPEAKER_ICON_ON_SRC,
      });
    }
  };

  render() {
    const { name,asyncName } = this.props.defaultData;
    // const { bgmUrl, bgmPlaying, bgmMuted, bgmLoop } = this.state;
    // const { seUrl, sePlaying, seMuted, seLoop } = this.state;
    // const { navStarIcon, navSpeakerIcon, navBackIcon, navCloseIcon } = this.state;
    return (
      <div className="container">

        <ReactPlayer
          ref={(bgmPlayer) => (this.bgmPlayer = bgmPlayer)}
          style={{ display: 'none' }}
          // url={bgmUrl}
          // playing={bgmPlaying}
          // muted={bgmMuted}
          // loop={bgmLoop}
          onError={e => console.log('onError', e)}
        />

        <ReactPlayer
          ref={(sePlayer) => (this.sePlayer = sePlayer)}
          style={{ display: 'none' }}
          // url={seUrl}
          // playing={sePlaying}
          // muted={seMuted}
          // loop={seLoop}
        />

        <div className="t">
          <div className="tc rel">
            <div className="book" ref={(flipbook) => (this.flipbook = flipbook)}>
              <div className="page"><img src="/assets/books/00_example/pb00.png" alt="" /></div>
              <div className="page"><img src="/assets/books/00_example/pb01.png" alt="" /></div>
              <div className="page"><img src="/assets/books/00_example/pb02.png" alt="" /></div>
              <div className="page"><img src="/assets/books/00_example/pb03.png" alt="" /></div>
              <div className="page"><img src="/assets/books/00_example/pb04.png" alt="" /></div>
              <div className="page"><img src="/assets/books/00_example/pb05.png" alt="" /></div>
            </div>
          </div>
        </div>

        <ControlPanel
          onPagePrevClick={this.onPagePrevClick}
          onPageNextClick={this.onPageNextClick}
        />

        {/*<div style={{ position: 'absolute', left: '0px', top: '0px', width: '100%', height: '100%', pointerEvents: 'none', zIndex: 100 }}>*/}

          {/*<div style={{ position: 'absolute', left: '0px', height: '100%' }}>*/}
            {/*<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', marginLeft: '1vw' }}>*/}
              {/*<img ref={ pagePrev => (this.pagePrev = pagePrev) }*/}
                   {/*src="/assets/pics/left01.png"*/}
                   {/*style={{ width: '8vw', pointerEvents: 'auto' }}*/}
                   {/*onMouseDown={this.onPagePrevPress}*/}
                   {/*onMouseUp={this.onPagePrevRelease}*/}
                   {/*onClick={this.onPagePrevClick}*/}
              {/*/>*/}
            {/*</div>*/}
          {/*</div>*/}
          {/*<div style={{ position: 'absolute', right: '0px', height: '100%' }}>*/}
            {/*<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', marginRight: '1vw' }}>*/}
              {/*<img ref={ pageNext => (this.pageNext = pageNext) }*/}
                   {/*src="/assets/pics/right01.png"*/}
                   {/*style={{ width: '8vw', pointerEvents: 'auto' }}*/}
                   {/*onMouseDown={this.onPageNextPress}*/}
                   {/*onMouseUp={this.onPageNextRelease}*/}
                   {/*onClick={this.onPageNextClick}*/}
              {/*/>*/}
            {/*</div>*/}
          {/*</div>*/}

          {/*<div ref={(header) => (this.header = header)} style={{ position: 'absolute', left: '0px', width: '100%', backgroundColor: 'black', pointerEvents: 'auto' }}>*/}
            {/*<ul style={{ display: 'flex', height: '8vh', alignItems: 'center', padding: '0 10px' }}>*/}
              {/*<li><img src={navStarIcon} style={{ width: '6vh', margin: '0 1vh 0 1vh' }} /></li>*/}
              {/*<li><img src={navSpeakerIcon} style={{ width: '6vh', margin: '0 1vh 0 1vh' }} onClick={this.onBgmMutedToggle} /></li>*/}
              {/*<li style={{ color: 'white', fontSize: '5vh', margin: '0 auto 0 auto'}}>title</li>*/}
              {/*<li><img src={navBackIcon} style={{ width: '6vh', margin: '0 1vh 0 1vh' }} /></li>*/}
              {/*<li><img src={navCloseIcon} style={{ width: '6vh', margin: '0 1vh 0 1vh' }} onClick={this.onHeaderClose} /></li>*/}
            {/*</ul>*/}
          {/*</div>*/}

        {/*</div>*/}
      </div>
    )
  }
}

Book.propTypes = propTypes;
Book.defaultProps = defaultProps;

export default Book;