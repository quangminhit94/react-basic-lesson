import React, { Component } from 'react'

export default class Container1 extends Component {
  
  arr1 = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    }
  ]

  RenderListItem = (props) => (
  <div>{props.item.id}/ {props.item.title}</div>
  )
  
  render() {
    return (
      <div>
        {this.arr1.map(item => <this.RenderListItem item={item}/> )}   
      </div>
    )
  }
}

