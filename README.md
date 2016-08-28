# isVisible

Cross-browser function that checks if an element is visible.

This script is very simple. But it checks for several edge cases, that are not so trivial. I used to copy/paste it between my projects, until I decided to make a simple Bower component out of it.

## How to use it

```javascript
isVisible(element); // -> bool
```

It's that simple. Just one function with one parameter. The parameter should be a reference to an existing element. It returns false if:

-   element does not exist
-   element is not in document
-   element or any of it's parents is not displayed (`display: none`)
-   element or any of it's parents is not visible (`visibility: hidden`)

## Element lists and collections

These methods make it easy to apply the visibility check on array or collection of elements:

### isVisibleAll(list)

Returns `true` if all elements in the list are visible. Returns `false` if at least one element in the list is not visible. Also returns `false` if the argument is not a list (array or collection) or if any item in the list is not an element.

### isVisibleAny(list)

Returns `true` if at least one of the elements in the list is visible. Returns `false` if none of the elements in the list is visible. Also returns `false` if the argument is not a list (array or collection) or if any item in the list is not an element.

## Documentation

## Bug reports, feature requests and contact

If you found any bugs, if you have feature requests or any questions, please, either [file an issue at GitHub](https://github.com/fczbkk/isvisible/issues) or send me an e-mail at <mailto:riki@fczbkk.com>.

## License

isVisible is published under the [MIT license](https://github.com/fczbkk/isvisible/blob/master/LICENSE). Feel free to use it in any way.
