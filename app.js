const Vue = require('vue')
const server = require('express')()
// const renderer = require('vue-server-renderer').createRenderer()

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>The visited URL is: {{ url }}</div>`
  })

  const context = {
    title: 'hello',
    meta: `
    <div>まんまん</div>
    `
  }

  const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./index.template.html', 'utf-8')
  })
  renderer.renderToString(app,context, (err, html) => {
    console.log(html) // アプリのコンテンツを含む完全なページになります
    res.end(html)
  })
})


server.listen(8080)
