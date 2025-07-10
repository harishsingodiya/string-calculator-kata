# 🧮 String Calculator - TDD Kata (JavaScript + Jest)

This is my solution for the "String Calculator TDD Kata" using JavaScript and Jest. The project follows TDD principles strictly with tests written first. All requirements including custom delimiters, newline handling, and error throwing for negative numbers are implemented and tested.

## 📖 Project Description

This project is a clean, test-driven implementation of the **String Calculator Kata** using **JavaScript** and **Jest** as the testing framework. It follows the **TDD (Test-Driven Development)** methodology — write a test, write code to make the test pass, and then refactor.

The purpose of this kata is to demonstrate:
- Writing robust code using TDD
- Keeping clean and meaningful Git commit history
- Handling edge cases like custom delimiters and negative numbers
- Writing modular, readable, and testable code

This kata simulates how requirements evolve step-by-step and encourages you to approach each change by writing a failing test first.

---

## ✅ Problem Statement

Implement a method `add(string numbers)` that returns the sum of the numbers provided in the string. It should support various delimiters and handle invalid or negative inputs gracefully.

### Rules

1. If the input is an empty string `""`, the result should be `0`.
2. If the string contains a single number, return it as an integer.
3. If the string contains multiple numbers separated by commas (`,`), return their sum.
4. Allow newline characters (`\n`) as delimiters along with commas.
5. Support custom delimiters defined like this: `"//[delimiter]\n[numbers]"`.
6. Raise an exception if any negative number is provided.
   - The exception message should include **all** negative numbers.
7. Extra Credit:
   - Allow multiple custom delimiters, like: `"//[*][%]\n1*2%3"`
   - Allow multi-character delimiters, like: `"//[***]\n1***2***3"`

---

## 🚀 How to Run the Project

### 1. 📦 Prerequisites
Ensure you have **Node.js** and **npm** installed.

Check installation:

```bash
node -v
npm -v

```
## Run All Tests

npm test

## Run with Coverage Report

npx jest --coverage