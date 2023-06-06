import { login } from "./Login"



describe('login', () => {
    const mockalert = jest.fn()
    window.alert = mockalert

    it('deve testar mensagem de login', () => {
        login()
        expect(mockalert).toHaveBeenCalledWith("Bem vindo!")
    })
})