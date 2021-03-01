import React from 'react'
import ReactDOM from 'react-dom'
import Button from "../button";
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom"
import renderer from "react-test-renderer"

afterEach(cleanup);

it('should render without crashing ',  () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div)
    ReactDOM.unmountComponentAtNode(div)
});

it('should render button correctly', function () {
    const {getByTestId} = render(<Button label="this test button"></Button>)
    expect(getByTestId('button')).toHaveTextContent("this test button")
});

it('passing a different label', function () {
    const {getByTestId} = render(<Button label="save"></Button>)
    expect(getByTestId('button')).toHaveTextContent("save")
});

it('matches snapshot one', function () {
    const tree = renderer.create(<Button label="save"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
});

it('matches snapshot two', function () {
    const tree = renderer.create(<Button label="dont save me"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
});
