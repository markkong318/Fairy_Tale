import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './flow/defaultActions';
import './Default.less';
import OutPutName from './components/OutPutName';
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

class DefaultView extends PureComponent{
  ratio = 1.38;
  
  constructor(props) {
    super(props);
  }
  
  componentWillReceiveProps(nextProps) {

  }

  componentWillMount() {
    this.props.getAsyncDefault({'name': 'icepy'});
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

  }

  componentWillUnmount(){
    this.props.clearData();
  }

  resize () {
    // reset the width and height to the css defaults
    this.flipbook.style.width = '';
    this.flipbook.style.height = '';

    console.log('client width: ' + this.flipbook.clientWidth)
    console.log('client width: ' + this.flipbook.clientHeight)

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
      display: 'double',
    });
    // hide the body overflow
    // document.body.className = 'hide-overflow';
  }

  onPagePrevPress = () => {
    this.pagePrev.src = '/assets/pics/left02.png'
  };

  onPagePrevRelease = () => {
    this.pagePrev.src = '/assets/pics/left01.png'
  };

  onPagePrevClick = () => {
    $(this.flipbook).turn('previous');
  };

  onPageNextPress = () => {
    this.pageNext.src = '/assets/pics/right02.png'
  };

  onPageNextRelease = () => {
    this.pageNext.src = '/assets/pics/right01.png'
  };

  onPageNextClick = () => {
    $(this.flipbook).turn('next');
  };

  render() {
    console.log('DEFAULT PROPS', this.props);
    const { name,asyncName } = this.props.defaultData;
    return (
      <div className="container">
        {/*<OutPutName getDefault={ this.props.getDefault } name={ name }/>*/}
        {/*<div className="async-name-container">【ASYNC】Hello { asyncName }</div>*/}

        <div className="t">
          <div className="tc rel">
            <div className="book" ref={(flipbook) => (this.flipbook = flipbook)}>
              <div className="page"><img src="https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/01.jpg" alt="" /></div>
              <div className="page"><img src="https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/02.jpg" alt="" /></div>
              <div className="page"><img src="https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/03.jpg" alt="" /></div>
              <div className="page"><img src="https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/04.jpg" alt="" /></div>
              <div className="page"><img src="https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/05.jpg" alt="" /></div>
              <div className="page"><img src="https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/06.jpg" alt="" /></div>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', left: '0px', top: '0px', width: '100%', height: '100%' }}>
          <div style={{ position: 'absolute', left: '0px', height: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', marginLeft: '1vw' }}>
              <img ref={ pagePrev => (this.pagePrev = pagePrev) }
                   src="/assets/pics/left01.png"
                   style={{ width: '8vw' }}
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
                   style={{ width: '8vw' }}
                   onMouseDown={this.onPageNextPress}
                   onMouseUp={this.onPageNextRelease}
                   onClick={this.onPageNextClick}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

DefaultView.propTypes = propTypes;
DefaultView.defaultProps = defaultProps;

const mapState = ({ defaultData, globals }) => {
  return {
    defaultData,
    ...globals
  }
}

export default connect(mapState,actions)(DefaultView);