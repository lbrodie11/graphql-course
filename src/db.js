const users = [
  {
    id: '1',
    name: 'Brodie',
    email: 'brodie@example.com',
    age: 30
  },
  {
    id: '2',
    name: 'Sarah',
    email: 'sarah@example.com'
  },
  {
    id: '3',
    name: 'Mike',
    email: 'mike@example.com'
  }
]

const posts = [
  {
    id: '10',
    title: 'Work Hard, Play Hard',
    body: 'trying to work hard every day to be able to enjoy myself',
    published: true,
    author: '1'
  },
  {
    id: '11',
    title: 'My First Query',
    body: 'I love this alot',
    published: false,
    author: '3'
  },
  {
    id: '12',
    title: 'For The Love Of The Game',
    body: 'basketball is a great sport',
    published: true,
    author: '2'
  }
]

const comments = [
  {
    id: '789',
    text: 'Great work',
    author: '3',
    post: '11'
  },
  {
    id: '790',
    text: 'Needs improvement',
    author: '2',
    post: '12'
  },
  {
    id: '791',
    text: "You're great at this",
    author: '1',
    post: '11'
  },
  {
    id: '792',
    text: 'So amazing',
    author: '3',
    post: '10'
  }
]

const db = {
  users,
  posts,
  comments
}

export { db as default }
