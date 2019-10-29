import './index.scss'
import React from 'react'
import { render } from "react-dom"
import WebFontLoader from 'webfontloader'
import { Card, CardTitle, CardText, Slider, Grid, Cell } from 'react-md';

// Load the fonts
WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons']
  }
})

const App = () => (
  <Grid>
    <Cell>
      <Card>
        <CardTitle title="Using CardTitle" subtitle="With CardText" />
        <CardText>
          <p>
            The <code>CardText</code> component is really just useful for displaying any
            content with some additional padding.
          </p>
          <Slider id="example-card-slider" />
        </CardText>
      </Card>
    </Cell>
  </Grid>
)

render(
  <App />,
  document.getElementById('root')
)