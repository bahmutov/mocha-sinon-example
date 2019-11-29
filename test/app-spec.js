const { app } = require('../app')

it('logs Hello', () => {
  const log = global.sandbox.spy(console, 'log')
  app()
  if (!log.calledOnceWith('Hello')) {
    throw new Error('Log was not called')
  }
})

it('logs again', () => {
  const log = global.sandbox.spy(console, 'log')
  app()
  expect(log).to.have.been.calledOnceWith('Hello')
})
