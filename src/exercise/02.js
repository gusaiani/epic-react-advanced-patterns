// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return React.Children.map(children, child =>
    allowedTypes.includes(child.type)
      ? React.cloneElement(child, {on, toggle})
      : child,
  )
}

// Accepts `on` and `children` props and returns `children` if `on` is true
const ToggleOn = ({on, children}) => (on ? children : null)

// Accepts `on` and `children` props and returns `children` if `on` is false
const ToggleOff = ({on, children}) => (on ? null : children)

// Accepts `on` and `toggle` props and returns the <Switch /> with those props.
const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />

function MyToggleButton({on, toggle}) {
  return on ? 'this is on' : 'now it’s off'
}

const allowedTypes = [ToggleOn, ToggleOff, ToggleButton, MyToggleButton]

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>Hello</span>
        <ToggleButton />
        <MyToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
