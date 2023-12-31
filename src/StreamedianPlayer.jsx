import React from 'react'
import './VideoLoader.css'
import { MdKeyboardBackspace } from 'react-icons/md'

export default class StreamedianPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bufferDuration: 30,
      socket: 'ws://localhost:8080/ws/',
      redirectNativeMediaErrors: true,
      errorHandler: this.errHandler.bind(this),
      infoHandler: this.infHandler.bind(this)
    }

    this.player = null
    this.restart = this.restart.bind(this)
    this.changeSource = this.changeSource.bind(this)
    this.changeBufferDuration = this.changeBufferDuration.bind(this)
  }

  componentDidMount() {
    this.player = window.Streamedian.player(this.props.id, this.state)
  }

  componentWillUnmount() {
    this.player.destroy()
    this.player = null
  }

  restart() {
    this.player.player.src = this.state.source
    this.player.destroy()
    this.player = null
    this.player = window.Streamedian.player(this.props.id, this.state)
  }

  changeSource(src) {
    this.setState({ source: src }, () => {
      this.restart()
    })
  }

  changeBufferDuration(duration) {
    this.setState({ bufferDuration: duration })
  }

  errHandler(err) {
    console.error(err.message)
  }

  infHandler(inf) {
    this.setState({ info: inf })
  }

  render() {
    return (
      <div className="Wrapper-Con">
        <button
          className="backBtnStyles"
          onClick={() => {
            window.location.href = '/'
          }}>
          <MdKeyboardBackspace style={{ fontSize: '24px' }} />
        </button>
        <div className="Wrapper">
          <div className="Container">
            <div className="Video-container">
              <video id={this.props.id} controls autoPlay>
                {this.props.children}
              </video>
            </div>
            <div className="btnWrapper">
              <button
                className="btnStyles"
                onClick={() => {
                  window.location.href = '/model'
                }}>
                3D 모델 보기
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
