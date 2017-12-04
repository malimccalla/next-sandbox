// @flow
import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import { aspectRatio } from '../lib/styleUtils'

import Grid from './Grid'

type Props = {||}

const featuredArtists = [
  {
    name: 'Mabel',
    image: 'https://vg-images.condecdn.net/image/P3eJ4y3QoA9/crop/1020',
    bio: 'Mabel bio',
  },
  {
    name: 'Minx',
    image:
      'https://static1.squarespace.com/static/5820f18a6b8f5b12160bf8d4/583211efc534a553942e0b96/583212069de4bb0ca85df473/1479676455578/DSC_8344+copylogo.jpg?format=1000w',
    bio: 'Minx bio',
  },
  {
    name: 'Pale Waves',
    image: 'https://pbs.twimg.com/media/DMq9jrgXUAAaKI0.jpg',
    bio: 'Pale waves bio',
  },
  {
    name: 'Earthgang',
    image:
      'http://media-s3-us-east-1.ceros.com/vevo/images/2017/11/07/61d41b3ae33c03abc8584c50a97a9541/00-idle-state-720x720-earthgang.jpg',
    bio: 'Earthgang bio',
  },
]

class FeaturedArtists extends Component<Props, void> {
  render() {
    return (
      <Grid width={1300}>
        {featuredArtists.map(({ image, bio, name }) => (
          <ArtistCard>
            <CardFront image={image} />
            <CardBack>Back</CardBack>
          </ArtistCard>
        ))}
      </Grid>
    )
  }
}

const ArtistCard = styled.div`
  perspective: 150rem;
  width: 23%;
  position: relative;

  ${aspectRatio('150%')};
`

const CardSide = styled.div`
  box-shadow: ${props => props.theme.boxShadow};

  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  transition: all 500ms ease;

  backface-visibility: hidden;
  position: absolute;
`

const CardFront = CardSide.extend`
  background-image: url(${props => props.image});
  background-color: ${props => props.theme.white};

  background-size: cover;

  ${ArtistCard}:hover & {
    transform: rotateY(180deg);
  }
`

const CardBack = CardSide.extend`
  background-color: ${props => props.theme.deepBlue};
  color: white;
  transform: rotateY(-180deg);
  ${ArtistCard}:hover & {
    transform: rotateY(0);
  }
`

export default FeaturedArtists
