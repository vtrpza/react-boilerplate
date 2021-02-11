import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main/>', () => {
  it('should render  the heading', () => {
    const { container } = render(<Main />)

    expect(screen.getByRole('heading', { name: /react avançado/i }))
      .toBeInTheDocument

    expect(container.firstChild).toMatchInlineSnapshot(`
      <main
        class="styles__Wrapper-sc-1cs6c8-0 iAwbZK"
      >
        <img
          alt="Imagem de um átomo rosa, com React Avançado escrito ao lado"
          class="styles__Logo-sc-1cs6c8-1 igVxLV"
          src="/img/logo.svg"
        />
        <h1
          class="styles__Title-sc-1cs6c8-2 VHROD"
        >
          React Avançado
        </h1>
        <h2
          class="styles__Description-sc-1cs6c8-3 gQTEEc"
        >
          TS, ReactJS, NextJS e Styled Components
        </h2>
        <img
          alt="Imagem de um dev olhando para tela com código"
          class="styles__Illustration-sc-1cs6c8-4 frJyYJ"
          src="/img/hero-illustration.svg"
        />
      </main>
    `)
  })
  it('should render the colours correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
