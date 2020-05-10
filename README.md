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