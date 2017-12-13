import React from 'react';
import { Button } from 'antd';
import './OutPutName.less';

class NameS extends React.Component{
  constructor(props){
    super(props)
  }

  clickUP(){
    this.props.getDefault({name: 'wower'});
  }

  render(){
    const { name } = this.props;
    return (
      <div className="sync-name-container">
        <div className="sync-name">【SYNC】Hello { name } </div>
        <Button type="primary" onClick={ this.clickUP.bind(this)}>点击输出名字</Button>
      </div>
    )
  }
}

export default NameS;