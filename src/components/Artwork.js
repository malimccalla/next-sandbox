// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

import { media, boxShadow } from '../lib/styleUtils'

import { Play } from './svgs'

type Props = {|
  image: string,
|}

export default class extends Component<Props, void> {
  render() {
    const { image } = this.props
    return (
      <Artwork image={image}>
        <Overlay>
          <PlayButton>
            <Play fill="#fff" />
          </PlayButton>
        </Overlay>
      </Artwork>
    )
  }
}

const Artwork = styled.div`
  background-image: url(${props => props.image});
  ${boxShadow()};

  background-size: cover;
  width: 22%;
  background-color: #ccc;
  border-radius: 6px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    padding-top: 100%; /* initial ratio of 1:1*/
  }

  &:hover {
    cursor: pointer;
  }

  &:hover > * {
    visibility: visible;
  }

  ${media.break2`
    width: 30%;

    &:last-child {
      display: none;
    }
  `};

  ${media.break3`
    width: 48%;

    &:last-child {
      display: block;
    }
  `};

  ${media.break4`
    width: 100%;

    &:last-child {
      display: block;
    }
  `};
`

const Overlay = styled.div`
  visibility: hidden;
  transition: visibility 0s, opacity 0.5s linear;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-image: linear-gradient(to bottom, rgba(255,255,255,0) 80%,rgba(0,0,0,0.3) 100%); );
`

const PlayButton = styled.button`
  background-color: ${props => props.theme.primaryRedOpacity(0.98)};
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  border-radius: 500px;
  transition: all 75ms ease-out;
  border: none;
  outline: none;
  ${boxShadow()};

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.darkRed};
  }
`