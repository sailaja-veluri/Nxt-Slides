import {Component} from 'react'
import './index.css'
import SlideContext from '../../Context'

class SlideListItem extends Component {
  render() {
    const {details, serialNo} = this.props
    const {heading, description} = details
    return (
      <SlideContext.Consumer>
        {value => {
          const {changeActiveTab, activeIndex} = value
          const isActive = activeIndex === serialNo - 1
          const activeStyling = isActive ? 'active-slide-style' : ''

          const onClickSlideTab = () => {
            changeActiveTab(serialNo - 1)
          }

          return (
            <li
              className={`slide-list-item ${activeStyling}`}
              onClick={onClickSlideTab}
              testid={`slideTab${serialNo}`}
            >
              <p className="slide-no">{serialNo}</p>
              <div className="slide-tab">
                <h1 className="slide-heading">{heading}</h1>
                <p className="slide-description">{description}</p>
              </div>
            </li>
          )
        }}
      </SlideContext.Consumer>
    )
  }
}

export default SlideListItem
