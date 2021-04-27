import React, {Component} from 'react';
import Flexbox from 'flexbox-react';


export default class Home extends Component {

  componentDidMount() {
 
  }

  render() {
    return (
        <div >      
          <hr/>
          <Flexbox flexDirection="column">
            <h3> simple </h3>
            <a href="/simple/hello" > hello </a>
            </Flexbox>
        </div>
    );
  }
}

