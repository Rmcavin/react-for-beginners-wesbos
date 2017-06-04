import React from 'react';

//because the only method this component will ever use is render, we do not
//need the full "class Header extends React.Component", instead we are using a
//stateless function component, which is a more simple style of component.
//See it on the line right below :)

const Header = (props) => {
    return (
      <header className="top">
        <h1>
        Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
        Day
        </h1>
        <h3 className="tagline"><span>{props.tagline}</span></h3>
      </header>
    )
}

export default Header;
