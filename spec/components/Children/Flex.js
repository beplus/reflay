import React from 'react'

import Layout from '../../../src/components/Layout'
import Box from '../../../src/components/Box'

const Flex = () => (
  <div>
    <h3>Flex</h3>
    <Layout direction='row'>
      <Box className='box' flex={20}>
        [flex="20"]
      </Box>
      <Box className='box' flex={70}>
        [flex="70"]
      </Box>
      <Box className='box' flex='auto' hide-sm hide-xs>
        [flex]
      </Box>
    </Layout>
  </div>
)

export default Flex
