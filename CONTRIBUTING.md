
# Contributing to Studia

Thank you for considering contributing to Studia!  
We welcome all contributions, including bug reports, feature requests, and pull requests.

## Table of Contents

- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
  - [Reporting Issues](#reporting-issues)
  - [Feature Requests](#feature-requests)
  - [Pull Requests](#pull-requests)
- [Code Style](#code-style)
- [Development Setup](#development-setup)
- [Communication](#communication)
- [License](#license)

---

## Getting Started

1. Fork the repository from [Studia on GitHub](https://github.com/studia-econan/studia).
2. Clone the forked repository:
    ```sh
    git clone https://github.com/studia-econan/studia.git
    cd studia
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Start the development server:
    ```sh
    npm run dev
    ```

---

## How to Contribute

### Reporting Issues

- If you find a bug or have a feature request, please create an [Issue](https://github.com/studia-econan/studia/issues).
- Provide as much detail as possible, including steps to reproduce the issue, expected behavior, and screenshots if applicable.

### Feature Requests

- Before developing a new feature, please open an [Issue](https://github.com/studia-econan/studia/issues) to discuss it with the maintainers.
- This helps to avoid duplicate work and ensures that your contribution aligns with the project's goals.

### Pull Requests

1. Create a new branch:
    ```sh
    git checkout -b feature/your-feature-name
    ```
2. Make your changes and commit them:
    ```sh
    git add .
    git commit -m "[Feature] Description of the feature"
    ```
3. Push your branch to your forked repository:
    ```sh
    git push origin feature/your-feature-name
    ```
4. Create a Pull Request from your branch to the main repository's `main` branch.

#### Pull Request Guidelines

- Clearly describe the purpose of your PR.
- Link to the corresponding Issue if applicable.
- Ensure all tests pass by running:
    ```sh
    npm run test
    ```
- Make sure your code follows the project's coding standards.

---

## Code Style

- We use **ESLint** and **Prettier** for consistent code style.  
  Run the linter before committing:
    ```sh
    npm run lint
    ```
- We follow the [Conventional Commits](https://www.conventionalcommits.org/) standard for commit messages:
    ```
    [Fix] Bug fix description
    [Feature] New feature description
    [Refactor] Code refactoring description
    [Docs] Documentation updates
    ```

---

## Development Setup

1. Clone the repository and navigate to the project directory:
    ```sh
    git clone https://github.com/studia-econan/studia.git
    cd studia
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the development server:
    ```sh
    npm run dev
    ```

---

## Communication

- If you have questions or need help, feel free to open a [Discussion](https://github.com/studia-econan/studia/discussions) or leave a comment on an Issue or PR.
- Please be respectful and considerate in your communication.

---

## License

By contributing to this project, you agree that your contributions will be licensed under the [MPL-2.0 license](./LICENSE).

---

Thank you for contributing to Studia! 🎉
