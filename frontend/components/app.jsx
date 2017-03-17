import React from 'react';
import HeaderContainer from './header/header_container';

const App = (props) => (
  <div>
    <HeaderContainer pathname={props.location.pathname}/>
    { props.children }
  </div>
);

export default App;
