import React from "react"
import { css, Styled } from "theme-ui"
import Header from "./header"
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

export default ({ children, ...props }) => (
  <Styled.root>
    <Header {...props} />
    <div>
      <Container>
        {children}
      </Container>
    </div>
  </Styled.root>
)
