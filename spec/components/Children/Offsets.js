import React from 'react'

import Layout from '../../../src/components/Layout'
import Box from '../../../src/components/Box'

const Offsets = () => (
  <div>
    <h3>Offsets</h3>
    <Layout direction='row'>
      <Box className='box' flex={66} offset={15}>
        [offset="15"]
        [flex="66"]
      </Box>
      <Box className='box' flex='auto'>
        [flex]
      </Box>
    </Layout>
  </div>
)

export default Offsets
