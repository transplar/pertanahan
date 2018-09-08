import React from 'react'
import loremIpsum from 'lorem-ipsum'
import {
  Carousel,
  CarouselCaption,
  CarouselItem,
  CarouselIndicators,
  CarouselControl
} from 'reactstrap'
import slide_1 from '../images/slides/slide-1.jpg'
import slide_2 from '../images/slides/slide-2.jpg'

const items = [
  {
    src: slide_1,
    altText: loremIpsum(),
    captionHeader: loremIpsum({count: '5', units:'word'}),
    captionText: loremIpsum()
  },
  {
    src: slide_2,
    altText: loremIpsum(),
    captionHeader: loremIpsum({count: '5', units:'word'}),
    captionText: loremIpsum()
  }
]

export default class MainSlide extends React.Component {
  constructor (props) {
    super(props)
    this.state = {activeIndex: 0}
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.goToIndex = this.goToIndex.bind(this)
    this.onExiting = this.onExiting.bind(this)
    this.onExited = this.onExited.bind(this)
  }

  onExiting() {
    this.animating = true
  }

  onExited() {
    this.animating = false
  }

  next() {
    if (this.animating) return
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1
    this.setState({activeIndex: nextIndex})
  }

  goToIndex(newIndex) {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  previous() {
    if (this.animating) return
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  render () {
    const { activeIndex } = this.state
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}>
          <img src={item.src} alt={item.altText} style={{width: '100%', maxHeight: '350px'}} />
          <CarouselCaption captionText={item.captionText} captionHeader={item.captionHeader} />
        </CarouselItem>
      )
    })

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        ride='carousel'
        className='my-3'
        >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction='prev' directionText='Previous' onClickHandler={this.previous} />
        <CarouselControl direction='next' directionText='Next' onClickHandler={this.next} />
      </Carousel>
    )
  }
}
