import React, {Component} from 'react';
import request from 'superagent';

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    }
  }

  render() {
    return <div>
      <div>
        <input type="text" placeholder="title"
               value={this.state.title}
               onChange={this._onTitleChande.bind(this)}/>
      </div>
      <div>
        <textarea placeholder="content"
                  value={this.state.content}
                  onChange={this._onContentChange.bind(this)}/>
      </div>
      <div>
        <button type="submit" onClick={this._onSubmit.bind(this)}>提交</button>
      </div>
    </div>;
  }

  _onTitleChande(event) {
    this.setState({
      title: event.target.value
    })
  }

  _onContentChange(event) {
    this.setState({
      content: event.target.value
    })
  }

  _onSubmit(){
    alert('xx');
    request.post('/api/article')
      .send({
        title:this.state.title,
        content:this.state.content
      })
      .end((err,res)=>{
        if(err) return console.err(err);
        console.log(res.statusCode);
    })
  }
}
