import React, { Component } from 'react';
import {
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Label,
  Rating,
  Segment,
  Table
} from 'semantic-ui-react'

class Content extends Component {
  render() {
    return (
      <React.Fragment>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Header as='h1' style={{ fontSize: '4em' }}>
              Projects
            </Header>
            <Grid.Row>
              <Grid.Column width={8}>
                <Image
                  bordered
                  rounded
                  size='huge'
                  src='project-kombas.PNG'
                  href='http://marketplace.kombas.id/'
                  target='_blank'
                 />
              </Grid.Column>
              <Grid.Column width={6}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  Marketplace Kombas
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Created using Codeigniter 3 with Rajaongkir as the shipping price API. Developed as a solo developer.
                </p>
                <div>
                  <Label image>
                    <Icon name='html5' />
                    HTML5

                  </Label>
                  <Label image>
                    <Icon name='php' />
                    PHP
                  </Label>
                  <Label image>
                    JavaScript
                  </Label>
                </div>
                <Button floated='right' color='blue' animated style={{marginTop: '1em'}} href='http://marketplace.kombas.id/' target='_blank'>
                  <Button.Content visible>Let's see</Button.Content>
                  <Button.Content hidden>
                    <Icon name='arrow right' />
                  </Button.Content>
                </Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={8}>
                <Image
                  bordered
                  rounded
                  size='huge'
                  style={{ height: '280px' }}
                  src='https://react.semantic-ui.com/images/wireframe/image.png'
                  // href='http://marketplace.kombas.id/'
                  // target='_blank'
                 />
              </Grid.Column>
              <Grid.Column width={6}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  {/* Marketplace Kombas */}
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                  {/* Created using Codeigniter 3 with Rajaongkir as the shipping price API. Developed as a solo developer. */}
                </p>
                <div>
                  <Label image>
                    <Icon name='' />


                  </Label>
                  <Label image>
                    <Icon name='' />


                  </Label>
                </div>
                <Button floated='right' disabled color='blue' animated style={{marginTop: '1em'}} href='http://marketplace.kombas.id/' target='_blank'>
                  <Button.Content visible></Button.Content>
                  <Button.Content hidden>
                    <Icon name='arrow right' />
                  </Button.Content>
                </Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={8}>
                <Image
                  bordered
                  rounded
                  size='huge'
                  style={{ height: '280px' }}
                  src='https://react.semantic-ui.com/images/wireframe/image.png'
                  // href='http://marketplace.kombas.id/'
                  // target='_blank'
                 />
              </Grid.Column>
              <Grid.Column width={6}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  {/* Marketplace Kombas */}
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                  {/* Created using Codeigniter 3 with Rajaongkir as the shipping price API. Developed as a solo developer. */}
                </p>
                <div>
                  <Label image>
                    <Icon name='' />


                  </Label>
                  <Label image>
                    <Icon name='' />


                  </Label>
                </div>
                <Button floated='right' disabled color='blue' animated style={{marginTop: '1em'}} href='http://marketplace.kombas.id/' target='_blank'>
                  <Button.Content visible></Button.Content>
                  <Button.Content hidden>
                    <Icon name='arrow right' />
                  </Button.Content>
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Header as='h1' style={{ fontSize: '4em' }}>
              Skills
            </Header>
            <Grid.Row>
              <Grid.Column width={8}>
                  <Card fluid color='blue' header='JavaScript (ES6)' meta={<Rating defaultRating={7} maxRating={10} disabled />}/>
              </Grid.Column>
              <Grid.Column width={8}>
                  <Card fluid color='blue' header='React JS' meta={<Rating defaultRating={8} maxRating={10} disabled />}/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={8}>
                  <Card fluid color='blue' header='Express JS' meta={<Rating defaultRating={6} maxRating={10} disabled />}/>
              </Grid.Column>
              <Grid.Column width={8}>
                  <Card fluid color='blue' header='Codeigniter' meta={<Rating defaultRating={8} maxRating={10} disabled />}/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={8}>
                  <Card fluid color='blue' header='Laravel' meta={<Rating defaultRating={3} maxRating={10} disabled />}/>
              </Grid.Column>
              <Grid.Column width={8}>
                  <Card fluid color='blue' header='PHP' meta={<Rating defaultRating={7} maxRating={10} disabled />}/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={8}>
                  <Card fluid color='blue' header='HTML' meta={<Rating defaultRating={7} maxRating={10} disabled />}/>
              </Grid.Column>
              <Grid.Column width={8}>
                  <Card fluid color='blue' header='CSS' meta={<Rating defaultRating={4} maxRating={10} disabled />}/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={8}>
                  <Card fluid color='blue' header='Problem Solving' meta={<Rating defaultRating={7} maxRating={10} disabled />}/>
              </Grid.Column>
              <Grid.Column width={8}>
                  <Card fluid color='blue' header='Time Management' meta={<Rating defaultRating={6} maxRating={10} disabled />}/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={8}>
                  <Card fluid color='blue' header='Logic Algorithm' meta={<Rating defaultRating={7} maxRating={10} disabled />}/>
              </Grid.Column>
              <Grid.Column width={8}>
                  <Card fluid color='blue' header='Fast Learner' meta={<Rating defaultRating={6} maxRating={10} disabled />}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Header as='h1' style={{ fontSize: '4em' }}>
              Educations
            </Header>
            <Grid.Row>
              <Grid.Column width={4}>
                <Image
                  size='small'
                  src='http://2.bp.blogspot.com/-M7fMqC934Fo/UeDMftreMyI/AAAAAAAAASc/jk_pOfbzANQ/s1600/Logo+amikom.png'
                 />
              </Grid.Column>
              <Grid.Column width={10}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  STMIK AMIKOM Purwokerto - Computer Science
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Bachelor in Computer Science from STMIK AMIKOM Purwokerto with 3.5 years of <i><strike>masa belajar</strike></i>. <b style={{ color: 'red' }}>3.65</b> of GPA achieved.
                </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={4}>
                <Image
                  size='small'
                  style={{ height: '150px', width: '140px' }}
                  src='http://3.bp.blogspot.com/-7IWR-9h7Jy8/T9OHgTJgJMI/AAAAAAAAALE/lt1gGlbmeOA/s1600/Copy+of+TARBIYATUNNASYIIN.JPG'
                 />
              </Grid.Column>
              <Grid.Column width={10}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  SMA PP Tarbiyatunnasyiin Jombang - High School
                </Header>
                <p style={{ fontSize: '1.33em' }}>

                </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={4}>
                <Image
                  size='small'
                  style={{ height: '150px', width: '140px' }}
                  src='http://3.bp.blogspot.com/-7IWR-9h7Jy8/T9OHgTJgJMI/AAAAAAAAALE/lt1gGlbmeOA/s1600/Copy+of+TARBIYATUNNASYIIN.JPG'
                 />
              </Grid.Column>
              <Grid.Column width={10}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  SMP PP Tarbiyatunnasyiin Jombang - Middle School
                </Header>
                <p style={{ fontSize: '1.33em' }}>

                </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={4}>
                <Image
                  size='small'
                  src='https://lh3.googleusercontent.com/-6XzUtghsq7w/V2GhC3SB90I/AAAAAAAAAX0/wkRDGAZ1T7kA2dwhWKl3lZ972Fx37GKaA/w720-h469/logo%2Bpb%2Bwanita%2Balirsyad.jpg'
                 />
              </Grid.Column>
              <Grid.Column width={10}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  SD AL-Irsyad Al-Islamiyyah Purwokerto - Junior School
                </Header>
                <p style={{ fontSize: '1.33em' }}>

                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </React.Fragment>
    );
  }
}

export default Content;
