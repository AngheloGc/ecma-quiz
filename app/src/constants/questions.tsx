import { AnswerProps } from '../components/Question/props'

export type Question = {
  content: React.ReactNode
  answers: AnswerProps[]
  correctAnswer: number
  currentAnswer: number | null
}

export const QUESTIONS: Question[] = [{
  content: <p className="question_title">¿Qué devolvería la siguiente sentencia al ser ejecutada? <pre>{`console.log(1 +  "2" + "2");`}</pre></p>,
  answers: [{
    label: '122',
    value: 1
  }, {
    label: '32',
    value: 2
  }, {
    label: 'NaN',
    value: 3
  }, {
    label: 'Error',
    value: 4
  }],
  correctAnswer: 1,
  currentAnswer: null
}, {
  content: <p className="question_title">¿Cuál NO es un Array Method en EcmaScript 6?</p>,
  answers: [{
    label: 'Array.of()',
    value: 1
  }, {
    label: 'Array.from()',
    value: 2
  }, {
    label: 'Array.prototype.find()',
    value: 3
  }, {
    label: 'Array.copy()',
    value: 4
  }],
  correctAnswer: 4,
  currentAnswer: null
}, {
  content: <p className="question_title">¿Cuál es el valor final de "obj" en el siguiente ejemplo? <pre>{`const obj = { foo: 1 };
obj.bar = 2;`}</pre></p>,
  answers: [{
    label: '{ foo: 1 }',
    value: 1
  }, {
    label: '{ foo: 1, bar: 2 }',
    value: 2
  }, {
    label: '{ foo: 1, 2: bar }',
    value: 3
  }, {
    label: 'Ninguno de las anteriores',
    value: 4
  }],
  correctAnswer: 2,
  currentAnswer: null
}, {
  content: <p className="question_title">¿Cuales serían los valores que tomarían "b" y "c" respectivamente? <pre>{`const a = [3, 6, 9, 12, 15];
const [b, c] = a;`}</pre></p>,
  answers: [{
    label: '12 y 15',
    value: 1
  }, {
    label: '6 y 9',
    value: 2
  }, {
    label: '3 y 6',
    value: 3
  }, {
    label: '15 y 12',
    value: 4
  }],
  correctAnswer: 3,
  currentAnswer: null
}, {
  content: <p className="question_title">Cómo obtengo el titulo (title) y la ciudad del autor (city)?. Si tengo definido el siguiente objeto: <pre>{`const Book {
    title: 'El señor de los anillos',
    numPages: 1000,
    author: {
      name: 'J.R.R. Tolkien',
      address: {
        city: 'Londres',
        country: 'Reino Unido'
      }
    }
  }`}</pre></p>,
  answers: [{
    label: 'const { title, city } = Book;',
    value: 1
  }, {
    label: 'const { title, author.address.city } = Book;',
    value: 2
  }, {
    label: 'let { title, author.address.city } = Book;',
    value: 3
  }, {
    label: 'const { title, author : { address : { city } } } = Book;',
    value: 4
  }],
  correctAnswer: 4,
  currentAnswer: null
}, {
  content: <p className="question_title">¿Cuál sería el resultado si evalúo la siguiente expresión: <pre>{`const a = 4;
const b = '4';
return a == b`}</pre></p>,
  answers: [{
    label: 'Verdadero',
    value: 1
  }, {
    label: 'Falso',
    value: 2
  }, {
    label: 'Error de sintaxis',
    value: 3
  }, {
    label: 'Undefined',
    value: 4
  }],
  correctAnswer: 1,
  currentAnswer: null
}]