export const union = (a, b) => {
    if (!(a instanceof Set) || !(b instanceof Set))
        return undefined

    const result = new Set()
    a.forEach(element => result.add(element))
    b.forEach(element => result.add(element))
    return result
}
