import React, { Component } from 'react';
import { Container, Relative } from 'theme/grid';
import { TutorialContainer, Thumbnail, DescriptionContainer, OrderNumber } from './Tutorial.style';
import { A } from 'theme/types';
import AsyncImage from 'components/AsyncImage/AsyncImage';

const tutorials = [
  {
    index: '01',
    title: 'Create-react-app',
    thumbnail: require('assets/tutorials/BAP1.png'),
    url: 'https://youtu.be/QR40RON4S-4',
    description: `
      <p>Introduce create-react-app to bootstrap our application with 0 effort.</p>
      <p>Use styled-components to style the portfolio.</p>
    `
  },
  {
    index: '02',
    title: 'React-hot-loader V1',
    thumbnail: require('assets/tutorials/BAP2.png'),
    url: 'https://youtu.be/hc0pwKgOeE0',
    description: `
      <p>Setup react-hot-loader to speed up our development process.</p>
    `
  },
  {
    index: '02-EXTRA',
    title: 'React-hot-loader V3',
    thumbnail: require('assets/tutorials/BAP2-extra.png'),
    url: 'https://youtu.be/DrIp4YZ4_8s',
    description: `
      <p>(Optional) This video continues my last video (#2). Turns out there is a newer version of react-hot-loader (v3 or next) that I didn't know of. Thus, I make this video to apply this new react-hot-loader to the portfolio's configuration.</p>
    `
  },
  {
    index: '03',
    title: 'Organize files, reveal text effects and more on styled-components',
    thumbnail: require('assets/tutorials/BAP3.png'),
    url: 'https://youtu.be/m9vxDLT75U8',
    description: `
      <p>I reorganized my files... because it's important, and build a "magic" text effect with styled-components.</p>
    `
  },
  {
    index: '04',
    title: 'Webpack configuration - Resolve modules',
    thumbnail: require('assets/tutorials/BAP4.png'),
    url: 'https://youtu.be/riEgwz_v6YY',
    description: `
      <p>We will configure our webpack to get rid of the ugly "../../" path when we import a module.</p>
    `
  },
  {
    index: '05',
    title: 'Reveal elements when user scrolls down with react-waypoint',
    thumbnail: require('assets/tutorials/BAP5.png'),
    url: 'https://youtu.be/UYUhNPKrXvA',
    description: `
      <p>Create a special element with the help of react-waypoint to reveal some of our elements when the user scrolls down.</p>
    `
  },
  {
    index: '06',
    title: 'Zoom an image with react-zoomy',
    thumbnail: require('assets/tutorials/BAP6.png'),
    url: 'https://youtu.be/shIeuTM_6t0',
    description: `
      <p>Every website has at least one image, but let's not be boring here. We will a special library of mine: react-zoomy to zoom an image.</p>
    `
  },
  {
    index: '07',
    title: 'Styled-components rocks',
    thumbnail: require('assets/tutorials/BAP7.png'),
    url: 'https://youtu.be/3j8UbajiLok',
    description: `
      <p>We focus on the layout and use styled-components. Style-compnents allows us to write javascript in css. Pretty cool huh? And because of that, we will have some fun and create some tricks along the way.</p>
    `
  },
  {
    index: '08',
    title: 'Responsiveness w/ styled-components',
    thumbnail: require('assets/tutorials/BAP8.png'),
    description: `
      <p>Creating media queries with styled-components cound't be more fun. We will make our websites responsive for all devices with this library.</p>
    `,
    url: 'https://youtu.be/kMNNMAStvHs'
  },
  {
    index: '09',
    title: 'Image parallax with react-image-parallax2',
    thumbnail: require('assets/tutorials/BAP9.png'),
    url: 'https://youtu.be/kPpip3rlaZw',
    description: `
      <p>I use one of my library react-image-parallax2 to create the parallax effect in all of my images here on this portfolio. I'll replicate this effect in just a few lines of code.</p>
    `
  },
  {
    index: '10',
    title: 'Navigation & Styled-components',
    thumbnail: require('assets/tutorials/BAP10.png'),
    url: 'https://youtu.be/CM9k6xLlL5w',
    description: `
      <p>We have created some pages, now let's have some navigation with react-router. Another than that, I'll use a bit of styled-component in this episode.</p>
    `
  },
  {
    index: '11',
    title: 'Smooth Scrolling (Remake)',
    thumbnail: require('assets/tutorials/BAP11-Remake.png'),
    url: 'https://youtu.be/aiG4rMLHjUc',
    description: `
      <p>I discover that a lot of websites made by big grands (Nike, Adidas, and some other fashion brands) implements smooth scroll. I looked for solutions to do the same thing on the Internet but can't find any. Thus, I created one myself and here's how you can use it in just few lines of code.</p>
    `
  },
  {
    index: '12',
    title: 'About Me Page',
    thumbnail: require('assets/tutorials/BAP12.png'),
    url: 'https://www.youtube.com/watch?v=eSxixsY17Vg',
    description: `
      <p>People hire people. So you have to prove you are an awesome person that others want to work with. In my about me page, I describe my hobbies and the people I admire and shape the way I am now. In this video, I'll show you how I implemented this page.</p>
    `
  },
  {
    index: '13',
    title: 'Deploy your portfolio with Github Pages',
    thumbnail: 'https://i.ytimg.com/vi/nyjarJhVQMM/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLAdoWYQ0CqXseXUjOE4jYfYD7sUvA',
    url: 'https://i.ytimg.com/vi/RupYh-fd8hQ/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAvqrYCpdH8r53S9HjPemO9pp4P3g',
    description: `
      <p>You got your website ready (almost). Then it's time to deploy it.</p>
    `
  },
  {
    index: '14',
    title: 'Create Video Play Button | SVG, react-toggle-state and more',
    thumbnail: 'https://i.ytimg.com/vi/h7Rpqh2jbxg/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB7cksBjw5sCtu7HuV2dSyl3S8YUw',
    url: 'https://www.youtube.com/watch?v=h7Rpqh2jbxg',
    description: `
      <p>We will do style the portfolio again with styled-components</p>
    `
  },
  {
    index: '15',
    title: 'LAST EPISODE OF PORTFOLIO TUTORIALS',
    thumbnail: 'https://i.ytimg.com/vi/5ONWqUSOwu8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDzfXz2QsSf1HbGvfMbNAolnqeLIw',
    url: 'https://www.youtube.com/watch?v=5ONWqUSOwu8',
    description: `
      <p>Last episode and what's next on FroDev.</p>
    `
  }
];

class Tutorial extends Component {
  render() {
    return (
      <Container>
        <h3>Hi, so you're curious how I created my portfolio! Don't worry I got you.</h3>
        <p>I created a tutorial series on my youtube channel, showing you how, from the beginning to the end, I built this portfolio website. However, in order to follow this series, you would need to grasp the basics of the following knowledge:</p>
        <ol>
          <li>HTML</li>
          <li>JavaScript</li>
          <li>And ReactJs</li>
        </ol>
        <p>You have already know these stuff? Great. Let's begin!</p>
        {tutorials.map(({ url, thumbnail, description, title, index }, i) =>
          <TutorialContainer key={i}>
            <Thumbnail target="_blank" href={url}>
              <Relative>
                <AsyncImage className="thumbnail" src={thumbnail} alt="thumbnail"/>
                <AsyncImage className="youtubePlayButton" src={require('assets/youtube-play.png')} alt="youtubePlay"/>
              </Relative>
            </Thumbnail>
            <Relative>
              <DescriptionContainer>
                <OrderNumber>
                  <h1>{ index }</h1>
                </OrderNumber>
                <h4>{title}</h4>
                <div className="description" dangerouslySetInnerHTML={{ __html: description }}/>
              </DescriptionContainer>
            </Relative>
          </TutorialContainer>
        )}
        <p>To see more content about web development like this, subscribe to <A target="_blank" href="https://www.youtube.com/c/FroDevers">FroDev</A>.</p>
      </Container>
    );
  }
}

export default Tutorial;