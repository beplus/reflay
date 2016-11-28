import React from 'react'

import Layout from '../../../src/components/Layout'
import Box from '../../../src/components/Box'

// Helpers.
import {
  LAYOUT_DIRECTION_ROW
} from '../../../src/helpers/Layout/direction'

import {
  LAYOUT_ALIGN_START,
  LAYOUT_ALIGN_CENTER,
  LAYOUT_ALIGN_STRETCH
} from '../../../src/helpers/Layout/align'

class Alignment extends React.Component {
  constructor () {
    super()

    this.state = {
      layoutDirection: LAYOUT_DIRECTION_ROW,
      layoutAlignInDirection: LAYOUT_ALIGN_CENTER,
      layoutAlignPerpendicular: LAYOUT_ALIGN_CENTER
    }

    this.onLayoutDirectionChange = e => this.setState({
      layoutDirection: e.currentTarget.value
    })

    this.onAlignmentInLayoutDirectionChange = e => this.setState({
      layoutAlignInDirection: e.currentTarget.value
    })

    this.onAlignmentInPerpendicularDirectionChange = e => this.setState({
      layoutAlignPerpendicular: e.currentTarget.value
    })
  }

  getLayoutAlignment () {
    let layout = this.state.layoutAlignInDirection !== 'none'
      ? this.state.layoutAlignInDirection : LAYOUT_ALIGN_START

    let perpendicular = this.state.layoutAlignPerpendicular !== 'none'
      ? this.state.layoutAlignPerpendicular : LAYOUT_ALIGN_STRETCH

    return `${layout} ${perpendicular}`
  }

  render () {
    return (
      <div>
        <h2>Child alignment</h2>
        <Layout direction={this.state.layoutDirection}
          align={`${this.getLayoutAlignment()}`}
          style={{width: '100%', height: '200px'}}>
          <Box className='box'>one</Box>
          <Box className='box'>two</Box>
          <Box className='box'>three</Box>
        </Layout>

        <Layout direction='row'>
          <Box flex='auto'>
            <p>Layout Direction</p>
            <input type='radio' name='layoutDirection' value='row'
              checked={this.state.layoutDirection === 'row'}
              onChange={this.onLayoutDirectionChange} />Row <br />
            <input type='radio' name='layoutDirection' value='column'
              checked={this.state.layoutDirection === 'column'}
              onChange={this.onLayoutDirectionChange} />Column
          </Box>
          <Box flex='auto'>
            <p>Alignment in Layout direction</p>
            <input type='radio' name='layoutAlignInDirection' value='none'
              checked={this.state.layoutAlignInDirection === 'none'}
              onChange={this.onAlignmentInLayoutDirectionChange} />none <br />
            <input type='radio' name='layoutAlignInDirection' value='start'
              checked={this.state.layoutAlignInDirection === 'start'}
              onChange={this.onAlignmentInLayoutDirectionChange} />start (default) <br />
            <input type='radio' name='layoutAlignInDirection' value='center'
              checked={this.state.layoutAlignInDirection === 'center'}
              onChange={this.onAlignmentInLayoutDirectionChange} />center <br />
            <input type='radio' name='layoutAlignInDirection' value='end'
              checked={this.state.layoutAlignInDirection === 'end'}
              onChange={this.onAlignmentInLayoutDirectionChange} />end <br />
            <input type='radio' name='layoutAlignInDirection' value='space-around'
              checked={this.state.layoutAlignInDirection === 'space-around'}
              onChange={this.onAlignmentInLayoutDirectionChange} />space-around <br />
            <input type='radio' name='layoutAlignInDirection' value='space-between'
              checked={this.state.layoutAlignInDirection === 'space-between'}
              onChange={this.onAlignmentInLayoutDirectionChange} />space-between
          </Box>
          <Box flex='auto'>
            <p>Alignment in Perpendicular direction</p>
            <input type='radio' name='layoutAlignPerpendicular' value='none'
              checked={this.state.layoutAlignPerpendicular === 'none'}
              onChange={this.onAlignmentInPerpendicularDirectionChange} />none <br />
            <input type='radio' name='layoutAlignPerpendicular' value='start'
              checked={this.state.layoutAlignPerpendicular === 'start'}
              onChange={this.onAlignmentInPerpendicularDirectionChange} />start <br />
            <input type='radio' name='layoutAlignPerpendicular' value='center'
              checked={this.state.layoutAlignPerpendicular === 'center'}
              onChange={this.onAlignmentInPerpendicularDirectionChange} />center <br />
            <input type='radio' name='layoutAlignPerpendicular' value='end'
              checked={this.state.layoutAlignPerpendicular === 'end'}
              onChange={this.onAlignmentInPerpendicularDirectionChange} />end <br />
            <input type='radio' name='layoutAlignPerpendicular' value='stretch'
              checked={this.state.layoutAlignPerpendicular === 'stretch'}
              onChange={this.onAlignmentInPerpendicularDirectionChange} />stretch (default) <br />
          </Box>
        </Layout>
      </div>
    )
  }
}

export default Alignment
