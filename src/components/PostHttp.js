import React, { Component } from 'react'

class PostHttp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        userId:'',
        title:'',
        body:''

      }
    }
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmitListener = (e) => {
        e.preventDefault()
        console.log(this.state)
        post('https://jsonplaceholder.typicode.com/posts', this.state)
    }
  render() {
        const {userId, title, body} = this.state
    return (
      <div>
        <form onSubmit={this.onSubmitListener}>
            <input type="text" name="userId" value={userId} onChange={this.changeHandler}/>
            <input type="text" name="title" value={title} onChange={this.changeHandler}/>
            <input type="text" name="body" value={body} onChange={this.changeHandler}/>
            <button type="submit">Submit</button>
        </form>

      </div>
    )
  }
}

export default PostHttp