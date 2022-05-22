import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})


test('renders product page component',()=>{
  render(<Product/>);
  const productItem1=screen.getByText('Jharkhand arts');
  const productItem2=screen.getByText('vvvvvvvvvvv');
  expect({productItem1,productItem2}).toBeInTheDocument();
})

test('renders blog component',()=>{
  render(<Blog/>);
  const item1=screen.getByText('| Industry / Factories Of Jharkhand -Jharkhandblogs');
  expect(item1).toBeInTheDocument();
})