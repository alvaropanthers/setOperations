import { union, intersection, difference, product, symmetricDifference } from './Set'


describe('Test union', ()=>{
    it('union fuction define', () => {
        expect(union).toBeDefined()
    })
    
    it('test set union by primitive', () => {
        let a = new Set([1, 2, 3])
        let b = new Set([10, 1, 2, 100])
        let expected = new Set([1, 2, 3, 10, 100])
        expect(union(a, b)).toEqual(expected)
    
        a = new Set(['string1', 'string2', 'string3'])
        b = new Set(['string1', 'string3', 'string10'])
        expected = new Set(['string1', 'string2', 'string3', 'string10'])
        expect(union(a, b)).toEqual(expected)
    })
    
    it('test set union incorrect parameters', () => {
        let a = undefined
        let b = [10, 1, 2, 100]
        let expected = new Set([1, 2, 3, 10, 100])
        expect(union(a, b)).toBeUndefined()
    
        a = {}
        b = {}
        expect(union(a, b)).toBeUndefined()
    
        a = [1, 2, 3]
        b = [1, 3, 4]
        expect(union(a, b)).toBeUndefined()
    })
    
    it('{1, 2} ∪ {1, 2} = {1, 2}', () => {
        let a = new Set([1, 2])
        let b = new Set([1, 2])
        let expected = new Set([1, 2])
        expect(union(a, b)).toEqual(expected)
    
    })
    
    it('{1, 2} ∪ {2, 3} = {1, 2, 3}', () => {
        let a = new Set([1, 2])
        let b = new Set([2, 3])
        let expected = new Set([1, 2, 3])
        expect(union(a, b)).toEqual(expected)
    
    })
    
    it('{1, 2, 3} ∪ {3, 4, 5} = {1, 2, 3, 4, 5}', () => {
        let a = new Set([1, 2, 3])
        let b = new Set([3, 4, 5])
        let expected = new Set([1, 2, 3, 4, 5])
        expect(union(a, b)).toEqual(expected)
    
    })
})



describe('Test intersection', () =>{
    it('intersection is defined', () => {
        expect(intersection).toBeDefined()
    })

    it('{1, 2} ∩ {1, 2} = {1, 2}', () => {
        const a = new Set([1, 2])
        const b = new Set([1, 2])
        expect(intersection(a, b)).toEqual(new Set([1, 2]))
    })

    it('{1, 2} ∩ {2, 3} = {2}', () => {
        const a = new Set([1, 2])
        const b = new Set([2, 3])
        expect(intersection(a, b)).toEqual(new Set([2]))
    })
    
    it('{1, 2} ∩ {3, 4} = ∅', () => {
        const a = new Set([1, 2])
        const b = new Set([3, 4])
        expect(intersection(a, b)).toEqual(new Set())
    })

    it('{1, 2} ∩ {} = ∅', () => {
        const a = new Set([1, 2])
        const b = new Set([])
        expect(intersection(a, b)).toEqual(new Set())
    })

    it('test params that are not instanceof Set', () => {
        let a = []
        let b = []
        expect(intersection(a, b)).toBeUndefined()

        a = {a: 1}
        b = {a: 1}
        expect(intersection(a, b)).toBeUndefined()
    })
})

describe('Test difference', () => {
    it('difference is defined', () => {
        expect(difference).toBeDefined()
    })

    it('{1, 2} - {1, 2} = ∅', () => {
        const a = new Set([1, 2])
        const b = new Set([1, 2])
        expect(difference(a, b)).toEqual(new Set([]))
    })

    it('{1, 2, 3, 4} - {1, 3} = {2, 4}', () => {
        const a = new Set([1, 2, 3, 4])
        const b = new Set([1, 3])
        expect(difference(a, b)).toEqual(new Set([2, 4]))
    })

    it('{1, 4} - {2, 3} = {1, 4}', () => {
        const a = new Set([1, 4])
        const b = new Set([2, 3])
        expect(difference(a, b)).toEqual(new Set([1, 4]))
    })

    it('test params that are not instanceof Set', () => {
        let a = []
        let b = []
        expect(difference(a, b)).toBeUndefined()

        a = {a: 1}
        b = {a: 1}
        expect(difference(a, b)).toBeUndefined()
    })
})


describe('Cartisian product', () => {
    it('test product defined', () => {
        expect(product).toBeDefined()
    })

    it('{1, 2} x {1, 2} = {(1, 1), (1, 2), (2, 1), (2, 2)}', () => {
        const a = new Set([1, 2])
        const b = new Set([1, 2])
        const result = new Set([new Set([1, 1]), new Set([1, 2]), new Set([2, 1]), new Set([2, 2])])
        expect(product(a, b)).toEqual(result)
    })

    it('{1, 2} × {red, white, green} = {(1, red), (1, white), (1, green), (2, red), (2, white), (2, green)}', () => {
        const a = new Set([1, 2])
        const b = new Set(['red', 'white', 'green'])
        const result = new Set([new Set([1, 'red']), new Set([1, 'white']), new Set([1, 'green']), new Set([2, 'red']), new Set([2, 'white']), new Set([2, 'green'])])
        expect(product(a, b)).toEqual(result)
    })
    
    // {a, b, c} × {d, e, f} = {(a, d), (a, e), (a, f), (b, d), (b, e), (b, f), (c, d), (c, e), (c, f)}.
    it('{a, b, c} × {d, e, f} = {(a, d), (a, e), (a, f), (b, d), (b, e), (b, f), (c, d), (c, e), (c, f)}', () => {
        const a = new Set(['a', 'b', 'c'])
        const b = new Set(['d', 'e', 'f'])
        const result = new Set([new Set(['a', 'd']), new Set(['a', 'e']), new Set(['a', 'f']), new Set(['b', 'd']), new Set(['b', 'e']), new Set(['b', 'f']), new Set(['c', 'd']), new Set(['c', 'e']), new Set(['c', 'f'])])
        expect(product(a, b)).toEqual(result)
    })

    it('test params that are not instanceof Set', () => {
        let a = []
        let b = []
        expect(product(a, b)).toBeUndefined()

        a = {a: 1}
        b = {a: 1}
        expect(product(a, b)).toBeUndefined()
    })
})

describe('Test symmetric difference', () => {
    it('test symmetricDifference defined', () => {
        expect(symmetricDifference).toBeDefined()
    })

    //({1, 2, 22, 10} - {1, 2, 4, 10}) U ({1, 2, 4, 10} - {1, 2, 22, 10}) = {22, 4}
    it('({1, 2, 22, 10} - {1, 2, 4, 10}) U ({1, 2, 4, 10} - {1, 2, 22, 10}) = {22, 4}', () => {
        const a = new Set([1, 2, 22, 10])
        const b = new Set([1, 2, 4, 10])
        expect(symmetricDifference(a, b)).toEqual(new Set([22, 4]))
    })

    it('({1, 22} - {1, 10}) U ({1, 10} - {1, 22}) = {22, 10}', () => {
        const a = new Set([1, 22])
        const b = new Set([1, 10])
        expect(symmetricDifference(a, b)).toEqual(new Set([22, 10]))
    })
})