import './styles/index.scss';

const userStack = {
    language: 'JavaScript',
    framework: 'Angular'
}

const User = {
    name: 'Kirill',
    age: '21',
    ...userStack
}

console.log(user);