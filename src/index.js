import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import 'antd/dist/antd.css';
import { App } from "./App"

export const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJiNmZmYzA5YjEyZjgwZjRjMTBiYjQiLCJpYXQiOjE2NDcwMTM4ODYsImV4cCI6MTY3ODU0OTg4Nn0.ZRNgpbPfTYd1PoDqcgCMEHC32g6IYkvklY0tMMil2do'

ReactDOM.render(<App/>, document.querySelector('#root'));