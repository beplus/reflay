import React from 'react'

import Layout from '../../../src/components/Layout'
import Box from '../../../src/components/Box'

const FlexAdditional = () => (
  <div>
    <h3>Additional Flex</h3>
    <Layout direction='row' wrap>
      <Box className='box' flex='none'>
        [flex="none"]
      </Box>
      <Box className='box' flex='auto'>
        [flex]
      </Box>
      <Box className='box' flex='nogrow'>
        [flex="nogrow"]
      </Box>
      <Box className='box' flex='grow'>
        [flex="grow"]
      </Box>
      <Box className='box' flex='initial'>
        [flex="initial"]
      </Box>
      <Box className='box' flex='auto'>
        [flex="auto"]
      </Box>
      <Box className='box' flex='noshrink'>
        [flex="noshrink"]
      </Box>
      <Box className='box' flex={0}>
        [flex="0"]
      </Box>
    </Layout>
  </div>
)

export default FlexAdditional
