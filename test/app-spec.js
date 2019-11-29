const sinon = require('sinon')
const { app } = require('../app')
it('logs Hello', () => {
  const log = sinon.spy(console, 'log')
  app()
  if (!log.calledOnceWith('Hello')) {
    throw new Error('Log was not called')
  }
})

it.only('logs again', () => {
  // will throw an error
  const log = sinon.spy(console, 'log')
})
