import React from 'react'
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  CardSubtitle
} from 'reactstrap'

export const Bidang = (props) => (
  <Card className={props.className}>
    <CardImg top src='https://placeholdit.imgix.net/~text?txtsize=33&txt=Image' alt='Card image cap'></CardImg>
    <CardBody>
      <CardTitle>{props.title}</CardTitle>
      <CardSubtitle>{props.subtitle}</CardSubtitle>
      <CardText>{props.text}</CardText>
      <Button>{props.button}</Button>
    </CardBody>
  </Card>
)
