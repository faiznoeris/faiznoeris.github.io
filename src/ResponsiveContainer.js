import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './responsiveContainer.css'
import Heading from './Heading'
import {
  Responsive,
  Segment
} from 'semantic-ui-react'

class DesktopContainer extends Component {
  render() {
    const { children } = this.props

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Segment
          className='landing-image'
          inverted
          textAlign='center'
          style={{ minHeight: 700, padding: '1em 0em' }}
          vertical
        >
          <Heading />
        </Segment>
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  render() {
    const { children } = this.props

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Segment
          className='landing-image'
          inverted
          textAlign='center'
          style={{ minHeight: 350, padding: '1em 0em' }}
          vertical
        >
          <Heading mobile />
        </Segment>

        {children}
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <React.Fragment>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </React.Fragment>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

export default ResponsiveContainer
