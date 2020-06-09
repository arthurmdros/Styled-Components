import React, { Component } from 'react';

import { Title, SmallTitle } from './styles';

class App extends Component {
  render(){
    return (
      <div>
        <Title fontSize={20}>
          Hello World
          <span> de um mundo distante.</span>
        </Title>

        <SmallTitle>Mas não tão distante assim.</SmallTitle>
      </div>
    );
  }
}

export default App;
