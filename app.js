const app = () => console.log('Hello')
module.exports = { app }
if (!module.parent) {
  app()
}
