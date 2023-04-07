import * as React from 'react'
import { View } from 'react-native'
import Svg, { SvgProps, Path } from 'react-native-svg'

const Background = () => (
  <View style={{ position: 'absolute', top: 0, right: 0 }}>
    <Svg
      width={214}
      height={206}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <Path
        d='M113.2 28.5c-41.09 0-74.4 33.31-74.4 74.4s33.31 74.4 74.4 74.4 74.4-33.31 74.4-74.4-33.31-74.4-74.4-74.4Z'
        fill='#B62A27'
      />
      <Path
        d='M364.6 86.6c0 64-51.9 115.8-115.8 115.8-64 0-115.8-51.9-115.8-115.8V-247'
        stroke='#192342'
        strokeMiterlimit={10}
      />
      <Path
        d='M347.7 86.6c0 54.6-44.4 99-99 99s-99-44.4-99-99V-247'
        stroke='#192342'
        strokeMiterlimit={10}
      />
      <Path
        d='M330.8 86.6c0 45.3-36.8 82.1-82.1 82.1s-82.1-36.8-82.1-82.1V-247'
        stroke='#192342'
        strokeMiterlimit={10}
      />
      <Path
        d='M313.9-247V86.6c0 35.9-29.2 65.2-65.2 65.2s-65.2-29.2-65.2-65.2V-247'
        stroke='#192342'
        strokeMiterlimit={10}
      />
      <Path
        d='M297-247V86.6c0 26.6-21.7 48.3-48.3 48.3-26.6 0-48.3-21.7-48.3-48.3V-247'
        stroke='#192342'
        strokeMiterlimit={10}
      />
      <Path
        d='M113.3 53.7a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6ZM73.6 56.5c0-1.6 1.3-2.8 2.8-2.8 1.6 0 2.8 1.3 2.8 2.8 0 1.6-1.3 2.8-2.8 2.8-1.5 0-2.8-1.3-2.8-2.8Z'
        fill='#F3F6FF'
      />
      <Path
        d='M39.6 53.7a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6ZM2.8 53.7a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6ZM113.3 17.1a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6ZM73.6 19.9c0-1.6 1.3-2.8 2.8-2.8 1.6 0 2.8 1.3 2.8 2.8 0 1.6-1.3 2.8-2.8 2.8-1.5.1-2.8-1.2-2.8-2.8ZM39.6 17.1a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6ZM2.8 17.1a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Z'
        fill='#192342'
      />
    </Svg>
  </View>
)

export default Background
