const jsdom = require("jsdom");
const { JSDOM } = jsdom;

hexo.extend.tag.register('admonition', function(args, content) {
  var cls = args[0] || 'note';
  var title = args.slice(1).join(' ') || 'Note';
  var lines = hexo.render.renderSync({
    text: content,
    engine: 'markdown'
  });

  const dom = new JSDOM(lines);
  const document = dom.window.document;
  var ps = document.getElementsByTagName("p");
  for (p of ps){
    p.classList.add('admonition-content');
  }
  var final_content = document.body.innerHTML;

  return `<div class="admonition ${cls}"><p class="admonition-title">${title}</p>${final_content}</div>`;
}, {
  async: true,
  ends: true
});