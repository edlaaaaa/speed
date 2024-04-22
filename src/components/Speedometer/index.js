import {Component} from 'react'
import './index.css'
class Speedometer extends Component {
  state = {speedCount: 0}

  onClickAccelerateButton = () => {
    this.setState(prevState => ({speedCount: prevState.SpeedCount + 10}))
  }

  onClickApplyBrakeButton = () => {
    this.setState(prevState => ({brakeCount: prevState.speedCount - 10}))
  }

  render() {
    const {speedCount} = this.state

    return (
      <div className="speed-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="speedometer"
          alt="speedometer"
        />
        <h1 className="head">Speed is {speedCount}mph </h1>
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
