import React from "react";
import { ChakraProvider, Center, Input, Button, Box } from "@chakra-ui/react";
import { login } from "./services/Login";




function App() {
  return (
    <ChakraProvider>
      <Box marginBottom="50px" fontSize="30px" fontFamily="sans-serif">
        <Center bg="tomato" h="100px" color="white">
          <div>
            <h1>Faça o Login</h1>
          </div>
        </Center>
      </Box>
      <Box fontFamily="sans-serif">
        <Center>
          <div>
            <div>
              <Input 
                className="loginSenha"
                id="loginSenha" 
                placeholder="login" 
                marginBottom="10px" 
              />
              <Input
                className="password"
                id="password"
                placeholder="password"
                marginBottom="10px"
              />
            </div>
            <div>
              <Center>
                <Button
                  id="enviaForm"
                  colorScheme="gray"
                  variant="outline"
                  width="100px"
                  onClick={login}
                >
                  Entrar
                </Button>
              </Center>
            </div>
          </div>
        </Center>
      </Box>
    </ChakraProvider>
  );
}

export default App;
