import React, {Component} from 'react';

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    }
  }

  render() {
    return <form>
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
        <button>提交</button>
      </div>
    </form>;
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
}
