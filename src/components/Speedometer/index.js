import {Component} from 'react'
import './index.css'
class Speedometer extends Component {
  state = {speed: 0}
  onClickAccelerateButton = () => {
    this.setSate(prevState => ({speed: prevState.count + 10}))
  }

  onClickApplyBrakeButton = () => {
    this.setSate(prevState => ({speed: prevState.count - 10}))
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speed-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="speedometer"
          alt="speedometer"
        />
        <h1 className="head">Speed is {speed}mph </h1>
        <p className="speed-detail">Min Limit is 0mph, Max Limit is 200mph</p>

        <div className="button-container">
          <button
            className="acc-btn"
            type="button"
            onClick={this.onClickAccelerateButton}
          >
            Accelerate
          </button>
          <button
            className="app-btn"
            type="button"
            onClick={this.onClickApplyBrakeButton}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
