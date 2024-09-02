
// let x=[12.345, 67.890, 34.567]
// let m=x.map((a)=>Number(a.toFixed(1)))
// console.log(m)

// let x=['123abc', '456def', '789ghi']
// let z=x.map((a)=>(parseInt(a)))
// console.log(z)



// let z=[12, 34.56, 78, 90.12]
// let i=z.map((a)=>(Number.isInteger(a)))
// console.log(i)


// let c=['abc', 123, 'def', 456]
// let z=c.map((a)=>isNaN(a))
// console.log(z)


let s=[123.456, 789.012, 345.678]
let a=s.map((j)=>j.toPrecision(4))
console.log(a)

