import {Component} from 'react'
import Header from './components/Header'
import NewButton from './components/NewButton'
import SlidesPanel from './components/SlidesPanel'
import SlidesContext from './Context'

import './App.css'

// This is the list used in the application. You can move them to any component needed.
const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

const insert = (arr, index, newItem) => [
  ...arr.slice(0, index + 1),
  newItem,
  ...arr.slice(index),
]

// Replace your code here
class App extends Component {
  state = {initialList: initialSlidesList, activeIndex: 0}

  changeHeading = value => {
    const {activeIndex} = this.state
    this.setState(preState => {
      const {initialList} = preState
      const newList = initialList.map((eachItem, index) => {
        if (activeIndex === index) {
          return {...eachItem, heading: value}
        }
        return eachItem
      })
      return {initialList: newList}
    })
  }

  changeDescription = value => {
    const {activeIndex} = this.state
    this.setState(preState => {
      const {initialList} = preState
      const newList = initialList.map((eachItem, index) => {
        if (activeIndex === index) {
          return {...eachItem, description: value}
        }
        return eachItem
      })
      return {initialList: newList}
    })
  }

  changeActiveTab = index => {
    this.setState({activeIndex: index})
  }

  addNewItem = item => {
    const {activeIndex} = this.state
    this.setState(preState => {
      const {initialList} = preState
      const newList = insert(initialList, activeIndex, item)
      return {initialList: [...newList]}
    })
  }

  render() {
    const {initialList, activeIndex} = this.state
    return (
      <div className="app-container">
        <Header />
        <SlidesContext.Provider
          value={{
            initialList,
            activeIndex,
            addNewItem: this.addNewItem,
            changeActiveTab: this.changeActiveTab,
            changeHeading: this.changeHeading,
            changeDescription: this.changeDescription,
          }}
        >
          <div className="btn-slide-container">
            <NewButton />
            <SlidesPanel />
          </div>
        </SlidesContext.Provider>
      </div>
    )
  }
}

export default App
