import React from 'react' // import react

class Spaceship extends React.Component {
  render() {
    return (
      <div>
      <p>{this.props.name}</p>
      <p>{this.props.speed}</p>
      <p>{this.props.hasRockets}</p>
      <p>{this.props.colors}</p>
      <p></p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
};

export default Spaceship;
// export a function that returns a JSX element
