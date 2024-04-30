// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import './index.css'
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa'
const MoviesSlider = props => {
  const {moviesList, category} = props
  return (
    <div className="each-category-container">
      <button className="arrow-button">
        <FaChevronCircleLeft className="arrow" />
      </button>
      <div>
        <Slider>
          <div>
            {moviesList.map(eachMovie => {
              if (eachMovie.categoryId === category) {
                return <MovieItem eachMovie={eachMovie} key={eachMovie.id} />
              }
            })}
          </div>
        </Slider>
      </div>

      <button className="arrow-button">
        <FaChevronCircleRight className="arrow" />
      </button>
    </div>
  )
}

export default MoviesSlider
