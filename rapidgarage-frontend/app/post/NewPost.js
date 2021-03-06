import React, {Component} from 'react'
import Taggle from 'taggle'

class NewPost extends Component{
    constructor(props){
      super(props);
      this.state = {
      title: "Garage Sale in FiDi",
      text: "We're selling a lot of electronics, clothes, and house decor!",
      address: "1234 Fulton St. Apt 10",
      city: "New York",
      zipCode: "10001"
    };
  }
    render(){
      console.log(Taggle)
      return (
          <div className="col-sm-9" >
            <form>
              <div className="input-group">
                <span className="input-group-addon">Title:</span>
                <input className="form-control" id="title" type="text" name="title" required autofocus/>
              </div>
              <br />
              <div className="input-group">
                <span className="input-group-addon">Address:</span>
                <input className="form-control" id="address" type="text" name="address" required />
              </div>
              <div className="input-group">
                <span className="input-group-addon">City:</span>
                <input className="form-control" id="city" type="text" name="city" required />
              </div>
              <div className="input-group">
                <span className="input-group-addon">ZipCode:</span>
                <input className="form-control" id="zipcode" type="text" name="zipcode" required />
              </div>
              <br />
              <div className="input-group">
                <span className="input-group-addon">Description:</span>
                <textarea class="form-control" rows="8" id="description"></textarea>
              </div>
              <div id="example1"></div>
              <p id="log"></p>
            </form>
            <br />
              <button type="post" className="btn btn-info">Post</button>
          </div>
      )
    }

}

export default NewPost;
