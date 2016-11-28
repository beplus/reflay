import React from 'react'

import Alignment from './Children/Alignment'
import Flex from './Children/Flex'
import FlexAdditional from './Children/FlexAdditional'
import FlexPercent from './Children/FlexPercent'
import FlexResponsive from './Children/FlexResponsive'
import Offsets from './Children/Offsets'
import Ordering from './Children/Ordering'

const Children = () => (
  <div>
    <h2>Children</h2>
    <Flex />
    <FlexPercent />
    <FlexResponsive />
    <FlexAdditional />
    <Ordering />
    <Offsets />
    <Alignment />
  </div>
)

export default Children
