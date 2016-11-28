import React from 'react'

import Layout from '../../../src/components/Layout'
import Box from '../../../src/components/Box'

const Ordering = () => (
  <div>
    <h3>Ordering HTML elements</h3>
    <Layout direction='row'>
      <Box className='box' flex='auto' order={-1}>
        <p>[order="-1"]</p>
      </Box>
      <Box className='box' flex='auto' order={1} order-gt-md={3}>
        <Box tagName='p' hide-gt-md>[order="1"]</Box>
        <Box tagName='p' hide show-gt-md>[order-gt-md="3"]</Box>
      </Box>
      <Box className='box' flex='auto' order={2}>
        <p>[order="2"]</p>
      </Box>
      <Box className='box' flex='auto' order={3} order-gt-md={1}>
        <Box tagName='p' hide-gt-md>[order="3"]</Box>
        <Box tagName='p' hide show-gt-md>[order-gt-md="1"]</Box>
      </Box>
    </Layout>
  </div>
)

export default Ordering
