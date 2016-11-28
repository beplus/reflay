import React from 'react'

import Layout from '../../../src/components/Layout'
import Box from '../../../src/components/Box'

const FlexResponsive = () => (
  <div>
    <h3>Responsive Flex</h3>
    <Layout direction='row'>
      <Box className='box' flex-gt-sm={66} flex={33}>
        flex 33% on mobile, <br />and 66% on gt-sm devices.
      </Box>
      <Box className='box' flex-gt-sm={33} flex={66}>
        flex 66%  on mobile, <br />and 33% on gt-sm devices.
      </Box>
    </Layout>
  </div>
)

export default FlexResponsive
