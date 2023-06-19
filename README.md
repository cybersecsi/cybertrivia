<h1 align="center">
  <br>
    <img src="https://raw.githubusercontent.com/cybersecsi/cybertrivia/main/logo.png" alt= "CyberTrivia" width="200px">
</h1>
<p align="center">
    <b>CyberTrivia</b>
<p>

_CyberTrivia_ is a simple _React_ application to create a **trivia board game** from a generic _YAML_ file with the:

- questions
- answers
- points

<!-- omit in toc -->

## 📋 Table of Contents

- [⚡ YAML structure](#-yaml-structure)
- [ℹ️ Usage](#ℹ️-usage)
  - [🔌 Creating a Trivia Game](#-creating-a-trivia-game)
- [🚧 Contributing](#-contributing)
- [📚 Credits](#-credits)
- [🪪 License](#-license)

## ⚡ YAML structure

The YAML file must have the following structure:

```yaml
<Category>:
  - question:
      - <Question 1>
      - <Option 1>
      - <Option 2>
      - ...
    answers:
      - <Answer 1>
      - <Answer 2>
      - ...
    points: <Points>

<Category>:
  - question:
      - <Question 2>
      - <Option 1>
      - <Option 2>
      - ...
    answers:
      - <Answer 1>
      - <Answer 2>
      - ...
    points: <Points>
```

Here is a description of these fields:

- <Category>: Represents the category of the trivia questions.
- <Question>: The trivia question itself.
- <Option>: Multiple options for the question (if applicable, leave blank otherwise).
- <Answer>: The correct answer(s) for the question.
- <Points>: The number of points awarded for answering the question correctly.

## ℹ️ Usage

To use the "Cyber Trivia" application:

1. Clone the repository:

```bash
git clone https://github.com/cybersecsi/cybertrivia.git
```

2. Install the necessary dependencies:

```bash
yarn install
```

3. Start the application:

```bash
yarn dev
```

4. Access the application in your web browser at http://localhost:5173

### 🔌 Creating a Trivia Game

1. Prepare a YAML file following the structure mentioned above.
2. In the application, click on the "Nuova Partita" button.
3. Drag & Drop the YAML file.
4. Enjoy the game!

## 🚧 Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
When contributing to this repository, please follow the existing code style, conventions, and Git workflow.

## 📚 Credits

Developed by Angelo Delicato [@SecSI](https://secsi.io)

## 🪪 License

This project is licensed under the [MIT License](https://github.com/cybersecsi/cybertrivia/blob/main/LICENSE).
