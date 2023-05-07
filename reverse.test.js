import { textRevers } from './reverse.js'


describe('should text revers', () => {
    it(' Желание -> ЕиналеЖ ', () => { expect( textRevers('ЖеланиЕ')).toBe('ЕиналеЖ') })
    it(' РадаР -> РадаР ', () => { expect( textRevers('РадаР')).toBe('РадаР') })
    it(' Аппроксимация -> яицамискорппА ', () => { expect( textRevers('Аппроксимация')).toBe('яицамискорппА') })
});