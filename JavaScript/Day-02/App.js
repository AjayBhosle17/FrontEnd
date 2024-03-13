const student={

    fullName:'AjayBhosle',
    age:21,
    sgpa:8.70,
    isPass:true
};

document.write(typeof(student))
// Otherwise write console.log(typeof(student))

console.log(student)

// document.write(student)

console.log(student.age)


console.log(student["age"])

student['age']=22;

console.log(student["age"])


// Exercise

const product={

    title:'Ball Pen',
    rating:14,
    offer:4,
    price:275
};

console.log(product)
console.log(product.rating)
console.log(product['offer'])

