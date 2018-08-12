import React, { Component } from 'react'
import {
  Container,
  Header,
  Responsive,
  Segment
} from 'semantic-ui-react'

class DesktopContainer extends Component {
  render() {
    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Segment
          inverted
          textAlign='center'
          style={{ minHeight: '100vh', padding: '1em 0em' }}
          vertical
        >
          <Container text>
            <Header
              as='h1'
              content='Work in Progress '
              inverted
              style={{
                fontSize: '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: '4em',
              }}
            />
          </Container>
        </Segment>
      </Responsive>
    )
  }
}

class MobileContainer extends Component {
  render() {
    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Segment
          inverted
          textAlign='center'
          style={{ minHeight: '100vh', padding: '1em 0em' }}
          vertical
        >
          <Container text>
            <Header
              as='h1'
              content='Work in Progress '
              inverted
              style={{
                fontSize: '2em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: '8em',
              }}
            />
          </Container>
        </Segment>
      </Responsive>
    )
  }
}

const WorkInProgress = ({ children }) => (
  <React.Fragment>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </React.Fragment>
)

export default WorkInProgress
