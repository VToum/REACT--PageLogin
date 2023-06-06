import { soma } from "./soma"

describe('soma', () => {
    it('deve somar um numero', () => {
        const value = soma(2)
        expect(value).toBe(3)
    })
})