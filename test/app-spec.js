const { app } = require('../app')

it('logs Hello', () => {
  const log = sandbox.spy(console, 'log')
  app()
  if (!log.calledOnceWith('Hello')) {
    throw new Error('Log was not called')
  }
})

it('logs again', () => {
  const log = sandbox.spy(console, 'log')
  app()
  expect(log).to.have.been.calledOnceWith('Hello')
})
