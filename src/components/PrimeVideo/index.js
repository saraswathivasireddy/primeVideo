// Write your code here
import './index.css'

import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-video"
        />
        <div className="second-container">
          <h1 className="movies-heading">Action Movies</h1>
          <MoviesSlider moviesList={moviesList} category="ACTION" />
        </div>
      </div>
    )
  }
}

export default PrimeVideo
