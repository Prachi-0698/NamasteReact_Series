import User from "./User"
import React from "react"

class About extends React.Component {

  constructor(props){
    super(props)
    console.log('Parent Constructor called');
  }

  componentDidMount(){
    console.log('Parent Component Mount');
  }

  render(){
    console.log('Parent Render');
    return(
      <div>
        <h2>About Page</h2>
        <p>This is About us page</p>
        <User name={"Sheena"} contact={"+01-938846783"}/>
      </div>
    )
  }
}

export default About
