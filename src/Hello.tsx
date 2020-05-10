import React from 'react'

interface IProps {
  message: string
}

const Hello: React.FC<IProps> = (props) => {
  return <h2>{props.message}</h2>
}

Hello.defaultProps = {
  message: 'hello world',
}

export default Hello
