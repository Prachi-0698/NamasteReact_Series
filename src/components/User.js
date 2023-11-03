import React from "react"

class User extends React.Component {
    constructor(props){
        super(props)
        console.log(props);
        this.state = {
            count: 0,
            count1: 1,
        };
        console.log('Child constructor called');
      }

      async componentDidMount(){
        console.log('Child Mount');
        const data = await fetch('https://api.github.com/users/Prachi-0698');
        const json = await data.json()
        console.log(json);
      }
    render(){
        console.log('Child Render');
        const {name, contact} = this.props
        const {count, count1} = this.state;
        return(

            <div>
                <h1>Count: {count}</h1>
                <h1>Count1: {count1}</h1>
                <button onClick={() =>{
                    this.setState({
                        count: this.state.count + 1,
                        count1: this.state.count1 + 2,
                    }) 
                }}>Inc Count</button>
                <h1>This is a Class Component</h1>
                <p>Name: {name}</p>
                <p>Contact: {contact}</p>
            </div>            
        )
    }
}

export default User;