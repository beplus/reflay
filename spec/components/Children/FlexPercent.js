import React from 'react'

import Layout from '../../../src/components/Layout'
import Box from '../../../src/components/Box'

const FlexPercent = () => (
  <div>
    <h3>Flex Percent</h3>
    <Layout direction='row' wrap>
      <Box className='box' flex={30}>
        [flex="30"]
      </Box>
      <Box className='box' flex={45}>
        [flex="45"]
      </Box>
      <Box className='box' flex={25}>
        [flex="25"]
      </Box>
      <Box className='box' flex={33}>
        [flex="33"]
      </Box>
      <Box className='box' flex={66}>
        [flex="66"]
      </Box>
      <Box className='box' flex={50}>
        [flex="50"]
      </Box>
      <Box className='box' flex='auto'>
        [flex]
      </Box>
    </Layout>
  </div>
)

export default FlexPercent
