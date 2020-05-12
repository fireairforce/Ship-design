## Build

```bash
npx create-react-app react-with-ts --typescript
```

## A simple Component

Just Like a `Hello.tsx` component:

```ts
import React from 'react';

interface IProps {
  message: string;
}

const Hello: React.FC<IProps> = (props) => {
return <h2>{props.message}</h2>
}

Hello.defaultProps = {
  message: 'hello world'
}

export default Hello
```

`React.FC` 是官方提供的一个 `React` 泛型支持。

## style

- Inline CSS
- CSS in JS(many ways, the famous way is `style component`)
- Sass/less(预处理)

## keey style normalize

We use normalize.css. See `_rebot.scss`

Import it to the root.

## Test
We will use `Jest` as our test framework.

[the website](https://jestjs.io/docs/zh-Hans/getting-started.html)

We can use it as a simple demo:

```js
// jest.test.js
test('test common matcher', () => {
  expect(2 + 2).toBe(4)
})
```

use command like:
```bash
npx jest jest.test.js
# or
npx jest jest.test.js --watch
```

This is a default test library in cra:
```
"@testing-library/jest-dom": "^4.2.4",
"@testing-library/react": "^9.3.2",
"@testing-library/user-event": "^7.1.2",
```

So we will use this library.Just see the demo in the `button.test.tsx`