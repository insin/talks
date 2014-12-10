'use strict';

var React = require('react')

/**
 * A text <input> with submit and cancel buttons, which can also be submitted or
 * cancelled using the keyboard.
 */
var EditInput = React.createClass({
  propTypes: {
    onCancel: React.PropTypes.func.isRequired
  , onSubmit: React.PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      autoFocus: true
    , cancelButton: 'Cancel'
    , className: 'EditInput'
    , defaultValue: ''
    , required: true
    , size: 15
    , submitButton: 'Submit'
    , trim: true
    , wrapper: 'span'
    }
  },

  componentDidMount() {
    if (this.props.autoFocus) {
      this.refs.input.getDOMNode().focus()
    }
  },

  _onSubmit() {
    var value = this.refs.input.getDOMNode().value
    if (this.props.trim) {
      value = value.replace(/^\s+|\s+$/g, '')
    }
    if (this.props.required && !value) {
      return
    }
    this.props.onSubmit(value)
  },

  _omCancel() {
    this.props.onCancel()
  },

  _onKeyDown(e) {
    if (e.key == 'Enter') {
      e.preventDefault()
      this.submit()
    }
    else if (e.key == 'Escape') {
      this.cancel()
    }
  },

  render() {
    return <this.props.wrapper className={this.props.className}>
      <input type="text" size={this.props.size} ref="input"
        defaultValue={this.props.defaultValue}
        onKeyDown={this._onKeyDown}
      />{' '}
      <button type="button" onClick={this._onSubmit}>{this.props.submitButton}</button>{' '}
      <button type="button" onClick={this._onCancel}>{this.props.cancelButton}</button>
    </this.props.wrapper>
  }
})

module.exports = EditInput