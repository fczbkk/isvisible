# isVisible

Cross-browser function that checks if an element is visible.

This script is very simple. But it checks for several edge cases, that are not so trivial. I used to copy/paste it between my projects, until I decided to make a simple Bower component out of it.

## How to use it

```javascript
isVisible(element); // -> bool
```

It's that simple. Just one function with one parameter. The parameter should be a reference to an existing element. It returns false if:

- element does not exist
- element is not in document
- element or any of it's parents is not displayed (`display: none`)
- element or any of it's parents is not visible (`visibility: hidden`)


## Bug reports, feature requests and contact

If you found any bugs, if you have feature requests or any questions, please, either [file an issue at GitHub](https://github.com/fczbkk/isvisible/issues) or send me an e-mail at [riki@fczbkk.com](mailto:riki@fczbkk.com).

## License

isVisible is published under the [UNLICENSE license](https://github.com/fczbkk/isvisible/blob/master/UNLICENSE). Feel free to use it in any way.
