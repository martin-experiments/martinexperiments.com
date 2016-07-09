import _ from 'lodash'
import React from 'react'

import Page from '../Page.jsx'

import {web as log} from 'log'

class ErrorPage extends React.Component {
  constructor(props) {
    super(props)
  }

  getContent(path) {
    log('Getting content:', path)
    return _.get(this.props.content, path, null)
  }

  render() {
    const props = this.props

    return (
      <Page
        className='container'
        content={props.content}
        updateRoute={props.updateRoute}
      >
      </Page>
    )
  }
}

ErrorPage.propTypes = {
  content: React.PropTypes.object
, globalElements: React.PropTypes.object
, updateRoute: React.PropTypes.func.isRequired
}

export default ErrorPage
