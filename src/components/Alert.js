import { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.bgColor = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      backgroundColor: this.bgColor,
      borderRadius: '7px',
      fontWeight: 'bold',
      border: `1px solid ${this.color}`,
      textAlign: 'center',
      fontSize: '0.8rem',
      padding: '10px',
      position: 'relative',
      display: 'inline-block',
    };
  };

  getBubbleArrow = () => {
    return {
      content: '',
      position: 'absolute',
      width: '0',
      height: '0',
      borderStyle: 'solid',
      borderWidth: '10px 10px 10px 0', // Arrow points left
      borderColor: `transparent ${this.bgColor} transparent transparent`, // Arrow color matches the alert background
      top: '50%', // Vertically center the arrow
      left: '-10px', // Arrow placed at the left edge
      transform: 'translateY(-50%)',
    };
  };

  render() {
    return (
      <div
        className="Alert"
        style={{ position: 'relative', display: 'inline-block' }}
      >
        <p style={this.getStyle()}>{this.props.text}</p>
        <span style={this.getBubbleArrow()}></span>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'rgb(124, 93, 250)';
    this.bgColor = 'rgb(248, 248, 251)';
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'rgb(236, 87, 87)';
    this.bgColor = 'rgb(220, 220, 255)';
  }
}

export { InfoAlert };
export { ErrorAlert };
