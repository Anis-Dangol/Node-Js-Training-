import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'


import { Button } from "@/components/ui/button"
import { HStack } from "@chakra-ui/react"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <App/>
    </ChakraProvider>
  </StrictMode>,
)

const Demo = () => {
  return (
    <HStack>
      <Button>Click me</Button>
      <Button>Click me</Button>
    </HStack>
  )
}