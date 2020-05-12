import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps } from './button'
const defaultProps = {
  onClick: jest.fn()
}

const testProps: ButtonProps = {
  btnType: 'primary',
  size: 'lg',
  className: 'wdcla'
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn
}

// test('our first react test case', () => {
//   const wrapper = render(<Button>Nice</Button>)
//   //  这里通过测试dom里面的文本值来反馈一个结果
//   const element = wrapper.queryByText('Nice')
//   expect(element).toBeTruthy()
//   expect(element).toBeInTheDocument()
// })

// 对测试名称做一个分类
describe('Test Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button>Nice</Button>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    // 测试是为一个Button
    expect(element.tagName).toEqual('BUTTON')
    // 测试Button是否有内置对一些属性
    expect(element).toHaveClass('btn btn-default')
    // 没有disabled属性
    expect(element.disabled).toBeFalsy()
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  it('should render the correct component based on different props', () => {
     const wrapper = render(<Button {...testProps}>Nice</Button>)
     const element = wrapper.getByText('Nice')
     expect(element).toBeInTheDocument()
     expect(element).toHaveClass('btn btn-default wdcla')
  })
  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(<Button btnType='link' href='http://google.com/'>Link</Button>)
    const element = wrapper.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })
  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>Nice</Button>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})