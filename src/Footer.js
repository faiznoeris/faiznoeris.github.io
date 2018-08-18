import React, { Component } from 'react';
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  List,
  Segment } from 'semantic-ui-react'

class Footer extends Component {
  render() {
    return (
      <Segment vertical inverted style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header as='h4' inverted content='Services' />
                <List inverted link>
                  <List.Item>Website Development</List.Item>
                  <List.Item>Content Management System (CMS)</List.Item>
                  <List.Item>eCommerce Development</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header inverted as='h4'>
                  Follow Me

                </Header>
                <div>
                  <Button circular color='facebook' icon='facebook' href='https://www.facebook.com/faiz.noeris' target='_blank'/>
                  <Button circular color='instagram' icon='instagram' href='https://instagram.com/faiznoeris/' target='_blank'/>
                  <Button circular color='github' icon='github' href='https://github.com/faiznoeris' target='_blank'/>
                  <Button circular color='linkedin' icon='linkedin' href='https://www.linkedin.com/in/faiz-noeris-a67a5a166/' target='_blank'/>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <div style={{ marginTop: '20px' }}>
            <List floated='right' inverted horizontal>
              <List.Item disabled>
                © Faiz Noeris 2018.
              </List.Item>
            </List>
          </div>
        </Container>
      </Segment>
    );
  }
}

export default Footer;
