import { View } from 'react-native'
import React from 'react'
import { CustomButton } from 'components/index'

const App = () => {
  return (
    <View>
      <CustomButton
        title='Test'
        onPress={() => console.log("first")}
      />
    </View>
  )
}

export default App