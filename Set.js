const correctParameters = (a, b) => {
    if (!(a instanceof Set) || !(b instanceof Set))
        return false

    return true
}

export const union = (a, b) => {
    if (!correctParameters(a, b))
        return undefined

    const result = new Set()
    a.forEach(element => result.add(element))
    b.forEach(element => result.add(element))
    return result
}

export const intersection = (a, b) => {
    if (!correctParameters(a, b))
        return undefined

    const result = new Set()
    a.forEach(element => { if(b.has(element)) result.add(element) })

    return result
}

export const difference = (a, b) => {
    if (!correctParameters(a, b))
        return undefined

    const result = new Set()
    a.forEach(element => { if(!b.has(element)) result.add(element) })

    return result
}

export const product = (a, b) => {
    if (!correctParameters(a, b))
        return undefined

    const result = new Set()
    a.forEach(element => {
        b.forEach(element2 => {
            result.add(new Set([element, element2]))
        })
    })

    return result
}

export const symmetricDifference = (a, b) => {
    return union(difference(a, b), difference(b, a))
}