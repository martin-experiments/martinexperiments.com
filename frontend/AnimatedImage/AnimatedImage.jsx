import React from 'react'

import './animated-image.sass'

class AnimatedImage extends React.Component {
  render() {
    const props = this.props

    return (
      <div className='animated-image-container'>
        <div className='animated-image-background'/>
        <img className='animated-image' src={props.src}/>
      </div>
    )
  }
}

AnimatedImage.propTypes = {
  src: React.PropTypes.string
}

export default AnimatedImage
