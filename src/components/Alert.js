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
      backgroundClor: this.bgColor,
      borderRadius: '7px',
      fontWeight: 'bold',
      borderColor: this.color,
      textAlign: 'center',
      fontSize: '0.8rem',
      margin: '10px 0',
      padding: '10px',
    };
  };

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
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
