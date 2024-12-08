import {Component} from 'react'
import SlideListItem from '../SlideListItem'
import Slide from '../Slide'
import SlideContext from '../../Context'

import './index.css'

class SlidesPanel extends Component {
  render() {
    return (
      <SlideContext.Consumer>
        {value => {
          const {initialList} = value
          return (
            <div className="slidesPanel-container">
              <ol className="slidesList-in-panel">
                {initialList.map((eachSlide, index) => (
                  <SlideListItem
                    details={eachSlide}
                    key={eachSlide.id}
                    serialNo={index + 1}
                  />
                ))}
              </ol>
              <Slide />
            </div>
          )
        }}
      </SlideContext.Consumer>
    )
  }
}

export default SlidesPanel
