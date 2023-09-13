This is a tag plugin for hexo to support admonition.

## Basic usage

Of course, install the plugin first:

```
npm install --save https://github.com/sieveLau/hexo-tag-admonition
```

Then in your markdown file:

```
{% admonition danger Don't do this %}
Hello this is just a test.
This is an another line.
{% endadmonition %}
```

will turn into something like this:

```html
<div class="admonition danger">
  <p class="admonition-title">Don't do this</p>
  <p>Hello this is just a test.</p>
  <p>This is an another line.</p>
</div>
```

Note: there is no space or newline charater between tags in real implementation.

## What does this mean

`{% admonition danger Don't do this %}` is the open tag. Here **admonition** is the tag name, **danger** will be class name being added to the admonition `<div>`, **Don't do this** will be the title of the admonition.

`{% endadmonition %}` is the close tag. It can't be omitted.

Lines between the open and close tag are the contents, contents will be put in admonition `<div>`, each line wrapped in a single `<p>`.

## Styling

Then you can style it with proper css rules. Here is a [example][stylus] using stylus.

It is recommended to use at least 3 levels of admonition, for example: note, warning and danger. Each with it's own style.

Also, I think it's good practice to also styling similiar keywords. For example in CSS:

```
.info, .note {
  color: blue;
}

.warning, .important {
  color: orange;
}

.danger, .critical {
  color: red;
}
```

Have a look at this [codepen][codepen].

## What I modified

- Provide stylus example, since I use Hexo's default theme [Lanscape](https://github.com/hexojs/hexo-theme-landscape). Basically it is a direct translation from [the css example on codepen][codepen] to stylus.

## Useful Tools

- [Stylus Doc](https://stylus-lang.com/docs/): Mixins, Variables, and the CLI
- [Stylus Playground](https://stylus-lang.com/try.html): If you don't want to install stylus on your machine, you can use this online compiler.

## License

MIT

[stylus]: https://github.com/sieveLau/hexo-tag-admonition/blob/master/style_example/admonition.styl
[codepen]: http://codepen.io/haishanh/pen/zqqbmq/?editors=1100