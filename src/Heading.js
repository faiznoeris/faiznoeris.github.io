import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Header,
  Icon
} from 'semantic-ui-react'

class Heading extends Component {
  render () {
    const { mobile } = this.props

    return (
      <Container text>
        <Header
          as='h1'
          content='Muhammad Faiz Noeris'
          inverted
          style={{
            fontSize: mobile ? '2em' : '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: mobile ? '1.5em' : '3em',
          }}
        />
        <Header
          as='h2'
          content='Junior Software Engineer currently working at Moving Bytes Digital Pte Ltd, Surabaya, Indonesia as Web Developer. '
          inverted
          style={{
            fontSize: mobile ? '1.5em' : '1.7em',
            fontWeight: 'normal',
            marginTop: mobile ? '0.5em' : '1.5em',
          }}
        />
        <Button primary size='huge'>
          See my resume
          <Icon name='right arrow' />
        </Button>
      </Container>
    )
  }
}

Heading.propTypes = {
  mobile: PropTypes.bool,
}

export default Heading
