import React from 'react'

import Layout from '../../../src/components/Layout'
import Box from '../../../src/components/Box'

const Base = () => (
  <div>
    <h3>Base</h3>
    <Layout direction='row'>
      <Box className='box' flex={33}>First item in row</Box>
      <Box className='box' flex={33}>Second item in row</Box>
      <Box flex={33}>
        <Layout direction='column'>
          <Box className='box' flex={100}>First item in column</Box>
          <Box className='box' flex={100}>Second item in column</Box>
        </Layout>
      </Box>
    </Layout>
  </div>
)

export default Base
