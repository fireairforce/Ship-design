import React from 'react';
import { render } from '@testing-library/react'
import Button from './button'

test('our first react test case', () => {
  const wrapper = render(<Button>Nice</Button>)
  //  这里通过测试dom里面的文本值来反馈一个结果
  const element = wrapper.queryByText('Nice')
  expect(element).toBeTruthy()
})