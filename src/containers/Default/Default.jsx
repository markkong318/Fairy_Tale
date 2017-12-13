import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './flow/defaultActions';
import './Default.less';
import OutPutName from './components/OutPutName';

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
  
  constructor(props){
    super(props);
  }
  
  componentWillReceiveProps(nextProps){

  }

  componentWillMount(){
    this.props.getAsyncDefault({'name': 'icepy'});
  }

  componentDidMount(){
    
  }

  componentWillUnmount(){
    this.props.clearData();
  }

  render(){
    console.log('DEFAULT PROPS', this.props);
    const { name,asyncName } = this.props.defaultData;
    return (
      <div className="container">
        <OutPutName getDefault={ this.props.getDefault } name={ name }/>
        <div className="async-name-container">【ASYNC】Hello { asyncName }</div>
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