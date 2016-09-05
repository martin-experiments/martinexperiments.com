import _ from 'lodash'
import React from 'react'

import {web as log} from 'log'

class ContentConsumer extends React.Component {
  getContent(path) {
    log('Getting content:', path)
    return _.get(this.props.content, path, null)
  }

  getGlobalElement(path) {
    log('Getting global element:', path)
    return _.get(this.props.globalElements, path, null)
  }
}

ContentConsumer.propTypes = {
  content: React.PropTypes.object
, globalElements: React.PropTypes.object
}

export default ContentConsumer
