import { union } from './Set'


it('union fuction define', () => {
    expect(union).toBeDefined()
})

it('test set union', () => {
    let a = new Set([1, 2, 3])
    let b = new Set([10, 1, 2, 100])
    let expected = new Set([1, 2, 3, 10, 100])
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

// it('test set union incorrect parameters', () => {
// })