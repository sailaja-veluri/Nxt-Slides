import React from 'react'

const SlideContext = React.createContext({
  initialList: [],
  activeIndex: 0,
  addNewItem: () => {},
  changeActiveTab: () => {},
  changeHeading: () => {},
  changeDescription: () => {},
})

export default SlideContext
