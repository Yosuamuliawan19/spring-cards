import { render } from 'react-dom'
import React, { useState } from 'react'
import { useSprings, animated, interpolate, config } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import '../styles.css'
import { CirclePicker } from 'react-color'
import mojs from '@mojs/core'
import domtoimage from 'dom-to-image'
import { getViews } from '../helper/api'

var selected = 0

function Deck(prop) {
  React.useEffect(() => {
    console.log('component updated')
  })

  const baseLineX = prop.baseLineX,
    baseLineY = prop.baseLineY

  // These two are just helpers, they curate spring data, values that are later being interpolated into css
  const to = (i) => ({ x: baseLineX, y: i * -4 + baseLineY, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
  const from = (i) => ({ x: baseLineX, rot: 0, scale: 1.5, y: -1000 })
  // This is being used down there in the view, it interpolates rotation and scale into a css transform
  const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, set] = useSprings(prop.cards.length, (i) => ({ ...to(i), from: from(i), config: { ...config.gentle, precision: 0.5 } })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    set((i) => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      selected = i
      prop.setSelectedCards(i)
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta + baseLineX : baseLineX // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })

    if (!down && gone.size === prop.cards.length) setTimeout(() => gone.clear() || set((i) => to(i)), 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return props.map(({ x, y, rot, scale, blur }, i) => (
    <animated.div className="cardWrapper" key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
      {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
      <animated.div {...bind(i)} className={'card'} style={{ transform: interpolate([rot, scale], trans) }}>
        <div className="cardImg" style={{ backgroundImage: 'url(' + prop.cards[i].img + ')' }} />
      </animated.div>
    </animated.div>
  ))
}

class InformationSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCard: 0,
      cards: this.props.cards
    }
  }
  handleTitle(event) {
    this.props.setCardTitle(this.state.selectedCard, event.target.value)
    this.setState({ title: event.target.value })
  }
  handleContent(event) {
    this.props.setCardContent(this.state.selectedCard, event.target.value)
    this.setState({ content: event.target.value })
  }
  componentWillReceiveProps(props) {
    console.log(props)
    this.setState({ selectedCard: props.selectedCard })
  }
  render() {
    return (
      <form className="information-container">
        <input
          className="information-title"
          type="text"
          value={this.state.cards[this.state.selectedCard].title}
          onChange={(e) => this.handleTitle(e)}
        />
        <textarea
          className="information-content"
          value={this.state.cards[this.state.selectedCard].content}
          onChange={(e) => this.handleContent(e)}
        />
        {/* <input type="text" value={"Our memory is made up of our individual memories and our collective memories. The two are intimately linked. And history is our collective memory. If our collective memory is taken from us - is rewritten - we lose the ability to sustain our true selves."}/> */}
        {/* <div className="information-title-">{cards[selected].title}</div>
        <div className="information-content">{cards[selected].content}</div> */}
      </form>
    )
  }
}
const backgroundColours = ['#ddf3f5', '#f1c5c5', '#faf0af', '#e5edb7', '#8bcdcd', '#a6dcef', 'linear-gradient(to right, #b993d6, #8ca6db)']
function BackButton() {
  return (
    <div className={'back-btn'}>
      <svg
        class="icon icon-tabler icon-tabler-arrow-back-up"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="black"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
      </svg>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    getViews().then((data) => {
      if (data.data.data.projects) {
        console.log(data.data.data.projects)
        this.setState({ projects: data.data.data.projects })
      }
    })
    this.state = {
      currentBackgroundColour: backgroundColours[0],
      selectedCard: 0,
      cards: [
        {
          img: 'https://res.cloudinary.com/yosuam19/image/upload/v1605701926/polaroid/radoslav-bali-jN9JnZ-SyVc-unsplash_kf2b1r.jpg',
          title: 'On memory',
          content:
            'Our memory is made up of our individual memories and our collective memories. The two are intimately linked. And history is our collective memory. If our collective memory is taken from us - is rewritten - we lose the ability to sustain our true selves.'
        },
        {
          img:
            'https://res.cloudinary.com/yosuam19/image/upload/v1605701927/polaroid/sebastian-pena-lambarri-tKxSn6jEm0g-unsplash_gv0suf.jpg',
          title: 'title2',
          content: 'content'
        },
        {
          img: 'https://res.cloudinary.com/yosuam19/image/upload/v1605701926/polaroid/artem-beliaikin-yeIq4R7WS6o-unsplash_1_obwqoj.jpg',
          title: 'title3',
          content: 'content'
        },
        {
          img: 'https://res.cloudinary.com/yosuam19/image/upload/v1605701926/polaroid/alexandra-andersson-si4-pd-eeJs-unsplash_txrvjr.jpg',
          title: 'title4',
          content: 'content'
        },
        {
          img: 'https://res.cloudinary.com/yosuam19/image/upload/v1605701926/polaroid/alfons-taekema-uOmhrkwy234-unsplash_1_yimqff.jpg',
          title: 'title5',
          content: 'content'
        }
      ],
      baseLineX: -300,
      baseLineY: 0
    }
  }

  componentDidMount() {
    const animation = new mojs.Shape({
      parent: '#test',
      shape: 'circle',
      fill: { '#F64040': '#FC46AD' },
      radius: { 20: 80 },
      duration: 2000,
      isYoyo: true,
      isShowStart: true,
      easing: 'elastic.inout',
      repeat: 1
    })
    animation.play()
  }

  setSelectedCards(idx) {
    if (idx !== this.state.selectedCard) {
      this.setState({ selectedCard: idx })
      console.log(idx)
    }
  }
  handleBackgroundColorChange(color, e) {
    this.setState({ currentBackgroundColour: color.hex })
  }
  setCardTitle(idx, title) {
    var currentCards = this.state.cards
    currentCards[idx].title = title
    this.setState({ cards: currentCards })
  }
  setCardContent(idx, content) {
    var currentCards = this.state.cards
    currentCards[idx].content = content
    this.setState({ cards: currentCards })
  }
  componentDidMount() {
    setTimeout(() => {
      var node = document.getElementById('root')

      domtoimage
        .toPng(node)
        .then(function (dataUrl) {
          var img = new Image()
          img.src = dataUrl
          console.log(dataUrl)
          // document.body.appendChild(img)
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error)
        })
    }, 1000)
  }
  render() {
    return (
      <div style={{ background: this.state.currentBackgroundColour }} className={'bg'}>
        <div onClick={(_) => (window.location.href = '/dashboard')}>
          <BackButton />
        </div>
        <div id="test" />
        {/* <div onClick={_ => this.setState({baseLineX: this.state.baseLineX + 100})}>asdas</div> */}
        <Deck
          baseLineX={this.state.baseLineX}
          baseLineY={this.state.baseLineY}
          cards={this.state.cards}
          setSelectedCards={(idx) => this.setSelectedCards(idx)}
          className="deck"
        />
        {/* <div>{this.state.selectedCard}</div> */}
        <InformationSection
          cards={this.state.cards}
          setCardTitle={(idx, title) => this.setCardTitle(idx, title)}
          setCardContent={(idx, content) => this.setCardContent(idx, content)}
          selectedCard={this.state.selectedCard}
        />
        <CirclePicker
          colors={backgroundColours}
          className="colour-picker"
          onChange={(color, e) => this.handleBackgroundColorChange(color, e)}
        />
      </div>
    )
  }
}
export default App
