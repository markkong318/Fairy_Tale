import React, { PureComponent } from 'react';
import $ from 'jquery';


class ControlPanel extends PureComponent{

  NAV_STAR_ICON_ON_SRC = '/assets/pics/star02.png';
  NAV_STAR_ICON_OFF_SRC = '/assets/pics/star01.png';
  NAV_SPEAKER_ICON_ON_SRC = '/assets/pics/speaker01.png';
  NAV_SPEAKER_ICON_OFF_SRC = '/assets/pics/speaker02.png';
  NAV_BACK_ICON_ON_SRC = '/assets/pics/back02.png';
  NAV_BACK_ICON_OFF_SRC = '/assets/pics/back01.png';
  NAV_CLOSE_ICON_SRC = '/assets/pics/close01.png';

  state = {
    bgmUrl: '',
    bgmPlaying: false,
    bgmMuted: true,
    bgmLoop: true,
    seUrl: '',
    sePlaying: false,
    seMuted: false,
    seLoop: false,
    navStarIcon: this.NAV_STAR_ICON_OFF_SRC,
    navSpeakerIcon: this.NAV_SPEAKER_ICON_OFF_SRC,
    navBackIcon: this.NAV_BACK_ICON_OFF_SRC,
    navCloseIcon: this.NAV_CLOSE_ICON_SRC,
  };

  componentDidMount() {
    this.setState({
      bgmUrl: '',
      bgmPlaying: true,
    })
  }

  onPagePrevPress = () => {
    this.pagePrev.src = '/assets/pics/left02.png';
  };

  onPagePrevRelease = () => {
    this.pagePrev.src = '/assets/pics/left01.png';
  };

  onPagePrevClick = () => {
    const { flipBook } = this.props;

    $(flipBook).turn('previous');
  };

  onPageNextPress = () => {
    this.pageNext.src = '/assets/pics/right02.png';
  };

  onPageNextRelease = () => {
    this.pageNext.src = '/assets/pics/right01.png';
  };

  onPageNextClick = () => {
    const { flipbook } = this.props;
    console.log('......');
    console.log(this);
    console.log('......');
    $(flipbook).turn('next');
  };

  onHeaderClose = () => {
    // $(this.header).hide();
  };

  onHeaderOpen = () => {
    // $(this.header).show();
  };

  render() {
    const { navStarIcon, navSpeakerIcon, navBackIcon, navCloseIcon } = this.state;

    return (
      <div style={{ position: 'absolute', left: '0px', top: '0px', width: '100%', height: '100%', pointerEvents: 'none', zIndex: 100 }}>

        <div style={{ position: 'absolute', left: '0px', height: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', marginLeft: '1vw' }}>
            <img ref={ pagePrev => (this.pagePrev = pagePrev) }
                 src="/assets/pics/left01.png"
                 style={{ width: '8vw', pointerEvents: 'auto' }}
                 onMouseDown={this.onPagePrevPress}
                 onMouseUp={this.onPagePrevRelease}
                 onClick={this.onPagePrevClick}
            />
          </div>
        </div>
        <div style={{ position: 'absolute', right: '0px', height: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', marginRight: '1vw' }}>
            <img ref={ pageNext => (this.pageNext = pageNext) }
                 src="/assets/pics/right01.png"
                 style={{ width: '8vw', pointerEvents: 'auto' }}
                 onMouseDown={this.onPageNextPress}
                 onMouseUp={this.onPageNextRelease}
                 onClick={this.onPageNextClick}
            />
          </div>
        </div>

        <div ref={(header) => (this.header = header)} style={{ position: 'absolute', left: '0px', width: '100%', backgroundColor: 'black', pointerEvents: 'auto' }}>
          <ul style={{ display: 'flex', height: '8vh', alignItems: 'center', padding: '0 10px' }}>
            <li><img src={navStarIcon} style={{ width: '6vh', margin: '0 1vh 0 1vh' }} /></li>
            <li><img src={navSpeakerIcon} style={{ width: '6vh', margin: '0 1vh 0 1vh' }} onClick={this.onBgmMutedToggle} /></li>
            <li style={{ color: 'white', fontSize: '5vh', margin: '0 auto 0 auto'}}>title</li>
            <li><img src={navBackIcon} style={{ width: '6vh', margin: '0 1vh 0 1vh' }} /></li>
            <li><img src={navCloseIcon} style={{ width: '6vh', margin: '0 1vh 0 1vh' }} onClick={this.onHeaderClose} /></li>
          </ul>
        </div>

      </div>
    )
  }
}

export default ControlPanel;