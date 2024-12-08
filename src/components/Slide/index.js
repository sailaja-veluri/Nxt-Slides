import {Component} from 'react'
import './index.css'
import SlideContext from '../../Context'

class Slide extends Component {
  state = {headingActive: true, descriptionActive: true}

  onClickHeading = () => {
    this.setState({headingActive: false})
  }

  onClickDescription = () => {
    this.setState({descriptionActive: false})
  }

  render() {
    const {headingActive, descriptionActive} = this.state
    return (
      <SlideContext.Consumer>
        {value => {
          const {
            initialList,
            activeIndex,
            changeHeading,
            changeDescription,
          } = value

          const onBlurDescription = e => {
            if (e.target.value === '') {
              changeDescription('Description')
            }
            this.setState({descriptionActive: true})
          }

          const onBlurHeading = e => {
            if (e.target.value === '') {
              changeHeading('Heading')
            }
            this.setState({headingActive: true})
          }

          const onChangeDescription = e => {
            changeDescription(e.target.value)
          }

          const onChangeHeading = e => {
            changeHeading(e.target.value)
          }

          const tabDetails = initialList[activeIndex]
          const {description, heading} = tabDetails

          return (
            <div className="slide-view-container">
              <div className="slide-container">
                {headingActive ? (
                  <h1 onClick={this.onClickHeading} className="heading">
                    {heading}
                  </h1>
                ) : (
                  <input
                    type="text"
                    value={heading}
                    onChange={onChangeHeading}
                    onBlur={onBlurHeading}
                    className="slide-heading-input"
                  />
                )}
                {descriptionActive ? (
                  <p onClick={this.onClickDescription} className="description">
                    {description}
                  </p>
                ) : (
                  <input
                    type="text"
                    value={description}
                    onChange={onChangeDescription}
                    onBlur={onBlurDescription}
                    className="slide-description-input"
                  />
                )}
              </div>
            </div>
          )
        }}
      </SlideContext.Consumer>
    )
  }
}

export default Slide
