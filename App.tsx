import React from 'react'
import { Container } from 'container/container'
import { Provider } from 'react-redux'
import { store } from 'screens/reduxToolkit/features/store'

const App = () => {

  return (
    <Provider store={store}>
      <Container />
    </Provider>
  )
}

export default App