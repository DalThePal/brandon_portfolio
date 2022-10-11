import React from 'react'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'

import colors from 'styles/colors'

import Home from 'pages/Home'

const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.main`
  background: ${colors.black};
  overflow: hidden;
`