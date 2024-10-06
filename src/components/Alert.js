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

  render() {
    return (
      <div
        className="Alert"
        style={{ position: 'relative', display: 'inline-block' }}
      >
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'rgb(124, 93, 250)';
    this.bgColor = 'transparent';
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'rgb(236, 87, 87)';
    this.bgColor = 'transparent';
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'rgb(247, 181, 49)';
    this.bgColor = 'transparent';
  }
}

export { InfoAlert };
export { ErrorAlert };
export { WarningAlert };
