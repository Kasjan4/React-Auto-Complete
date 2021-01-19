// 1. Please write a function that reverses a string

function reverseString(s) {
  return s.split("").reverse().join("")
}

// console.log(reverseString('kasjan'))

// 2. Please write a function that filters out numbers from a list

function filterNum(array) {
  let numbers = []

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      numbers.push(array[i])
      console.log(array[i])
    }
  }
  return numbers
}

// filterNum(['kasjan', 55, 23, 'hinc'])

// 3. Please write a function that shows the usage of closures

var multiplyByTwo = (function () {
  var counter = 1
  return function () { counter * 2; return counter }
})()

console.log(multiplyByTwo())

// 4. Please write a recursive function that flattens an list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

function flatten(items) {
  const flat = []

  items.forEach(item => {
    if (Array.isArray(item)) {
      flat.push(...flatten(item))
    } else {
      flat.push(item)
    }
  })

  return flat
}

console.log(flatten([[2, [4, [44, 5, 6]]], [4, 5, 6], [[2, 4], 4], 5]))

// 5. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

function findCommon(array1, array2) {
  let array3 = []

  for (let i = 0; i < array1.length; i++) {

    if (array2.includes(array1[i])) {

      array3.push(array1[i])
    }
  }

  return array3
}

console.log(findCommon(['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']))

// 6. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

function findUncommon(array1, array2) {
  let array3 = []

  for (let i = 0; i < array1.length; i++) {
    if (!array2.includes(array1[i])) {
      array3.push(array1[i])
    }
  }
  for (let i = 0; i < array2.length; i++) {
    if (!array1.includes(array2[i])) {
      array3.push(array2[i])
    }
  }

  return array3
}

console.log(findUncommon(['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']))


// 7. Please write a function that transforms an object to a list of [key, value] tuples.
// example input { color: 'Blue', id: '22', size: 'xl' }
// example output [['color', 'blue'], ['id', '22'], ['size', 'xl']]

function objectToTuples(obj) {

  let tuples = []
  for (const [key, value] of Object.entries(obj)) {
    const t = []
    t.push(key, value)
    tuples.push(t)
  }
  return tuples
}

// console.log(objectToTuples({ color: 'Blue', id: '22', size: 'xl' }))

// 8. Please write a function that transforms a list of [key, value] tuples to object. // reverse or task 7
// example input [['color', 'blue'], ['id', '22'], ['size', 'xl']]
// example output { color: 'Blue', id: '22', size: 'xl' }

function tuplesToObject(array) {

  const obj = Object.fromEntries(array)
  return obj
}

// console.log(tuplesToObject([['color', 'blue'], ['id', '22'], ['size', 'xl']]))

// 9. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

function tuplePairs(arr1, arr2) {
  let tuples = []

  for (let i = 0; i < arr1.length; i++) {
    const t = []
    t.push(arr1[i], arr2[i])
    tuples.push(t)
  }

  return tuples
}

console.log(tuplePairs([1, 2, 3], [4, 5, 6, 7]))

// 10. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

// not sure here

// console.log(pathToValue(['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }))

// 11. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

function compareObjects(first, second) {
  const al = Object.getOwnPropertyNames(first)
  const bl = Object.getOwnPropertyNames(second)

  if (al.length !== bl.length) return false;

  const hasAllKeys = al.every(value => !!bl.find(v => v === value))

  if (!hasAllKeys) return false

  for (const key of al) if (first[key] !== second[key]) return false

  return true
}

// console.log(compareObjects({ a: 'b', c: 'd' }, { c: 'd', a: 'b' }))


// 12. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

function getKeyNotFromList(array, obj) {

  const keys = Object.keys(obj)
  const values = Object.values(obj)

  for (let i = 0; i < keys.length; i++) {

    if (!array.includes(keys[i])) {

      return { [keys[i]]: values[i] }
    }
  }

}

// console.log(getKeyNotFromList(['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }))


