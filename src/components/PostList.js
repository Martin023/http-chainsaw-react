//Get Requests
import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts: [],
       errorMessage: ''
    }
  }//end constructor
  //lifecycle method that runs immediately the component is mounted and runs only once in the component's life cycle. hence making it a good place to make an API call.

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    //axios is a promise based library hence:
    //axios returns a promise. hence we use the .then() method to get the response
    .then(response => {
        console.log(response)
        this.setState({posts: response.data})

    })
    //incase of any error, we use the .catch() method to handle the error
    .catch(error => {
        console.log(error)
        this.setState({errorMessage: 'Error retrieving data'})
    })
    }
    render() {
        //destructuring the posts array from the state object

        const {posts} = this.state
        
    return (
        <div>
            <h1>List of Posts</h1>

            {
                posts.length ?
                posts.map(post => <div key={post.id}>{post.title}</div>) :
                null
            }
        </div>
    )
  } //end render

    
  }


export default PostList