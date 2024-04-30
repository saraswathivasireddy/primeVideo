// Write your code here
import './index.css'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
const MovieItem = props => {
  const {eachMovie} = props
  return (
    <Popup
      modal
      trigger={
        <button className="thumbnail-button">
          <img
            src={eachMovie.thumbnailUrl}
            alt="thumbnail"
            className="thumbnail-image"
          />
        </button>
      }
    >
      {close => (
        <div className="popup-bg-container">
          <div className="close-button-container">
            <button
              className="close-button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose className="close" />
            </button>
          </div>
          <div>
            <ReactPlayer url={eachMovie.videoUrl} />
          </div>
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
