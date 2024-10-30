import React, { useState } from 'react'
import "./App.css"

const data = [
  {
    name: "one",
    type: 'normal',
    folder: [
      {
        name: "one_A",
        type: "normal",
        folder: [
          {
            name: "one_AB",
            type: "ubnormal",
            folder: []
          }
        ]
      },
      {
        name: "one_B",
        type: "normal",
        folder: [
          {
            name: "one_BA",
            type: "ubnormal",
            folder: []
          }
        ]
      }
    ]
  },
  {
    name: "two",
    type: 'normal',
    folder: [
      {
        name: "two_A",
        type: "normal",
        folder: [
          {
            name: "two_AB",
            type: "ubnormal",
            folder: []
          }
        ]
      }
    ]
  },
  {
    name: "Three",
    type: 'normal',
    folder: [
      {
        name: "three_A",
        type: "normal",
        folder: []
      }
    ]
  },
  {
    name: "four",
    type: 'normal',
    folder: []
  },
  {
    name: "five",
    type: 'normal',
    folder: []
  }
]

function App() {
  return (
    <div style={{ marginLeft: '20px' }}>
      {data.map((user) => (<Folders user={user} key={user.name}/>))}
    </div>
  )
}

function Folders({ user }) {
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <div className='folders'>
      <p onClick={handleShow}> <i className="fa-solid fa-folder"></i> {user.name}</p>
      {show && user?.folder?.map((u) => (<Folders user={u} key={u.name} />))}
    </div>
  )
}

export default App
