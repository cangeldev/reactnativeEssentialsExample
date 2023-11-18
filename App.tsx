import React from 'react'
import { Container } from 'container/container'
import { Provider } from 'react-redux'
import { store } from 'screens/reduxToolkit/features/store'
import i18n from 'screens/i18nextPage/i18next'
import { I18nextProvider } from 'react-i18next';
const App = () => {

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Container />
      </I18nextProvider>
    </Provider>
  )
}

export default App