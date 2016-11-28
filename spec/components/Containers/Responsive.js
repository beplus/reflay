import React from 'react'

import Layout from '../../../src/components/Layout'
import Box from '../../../src/components/Box'

const Responsive = () => (
  <div>
    <h3>Responsive Layout</h3>
    <Layout direction='row' direction-xs='column'>
      <Box className='box' flex='auto'>
        I'm above on mobile, and to the left on larger devices.
      </Box>
      <Box className='box' flex='auto'>
        I'm below on mobile, and to the right on larger devices.
      </Box>
    </Layout>
  </div>
)

export default Responsive
