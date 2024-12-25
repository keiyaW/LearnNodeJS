const hobbies = (name, gender, ...args) => {
    return "Name is " + name + "\ngender : " + gender + "\n" + args
}

console.log(hobbies('Warid', 'male', 1,2,3,4));