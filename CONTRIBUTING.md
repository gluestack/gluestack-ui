# Contributing to `gluestack-style`

We'd love for you to contribute to our source code and to make `gluestack-style` even better than it is
today! Here are some guidelines we'd like you to follow:

- [Contributing to `gluestack-style`](#contributing-to-gluestackui)
  - [ Code of Conduct](#-code-of-conduct)
  - [ Ways to Contribute](#-ways-to-contribute)
  - [ Questions, Bugs, Features](#-questions-bugs-features)
    - [ Got a Question or Problem?](#-got-a-question-or-problem)
    - [ Found an Issue or Bug?](#-found-an-issue-or-bug)
    - [ Missing a Feature?](#-missing-a-feature)
  - [ Issue Submission Guidelines](#-issue-submission-guidelines)
  - [ Setting Up your Development Environment](#-setting-up-your-development-environment)
  - [ Contributing Code](#-contributing-code)
  - [ Helping with Documentation](#-helping-with-documentation)

## <a name="coc"></a> Code of Conduct

Help us keep `gluestack-style` open and inclusive. Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## <a name="wtc"></a> Ways to Contribute

If you are eager to start contributing code right away, you can go through [`gluestack-style` Issues](https://github.com/gluestack/gluestack-style/issues) that contain bugs.

There are other ways you can contribute without writing a single line of code. Here are a few things you can do to help out:

1. **Replying and handling open issues.** We get a lot of issues every day, and some of them may lack necessary information. You can help out by guiding people through the process of filling out the issue template, asking for clarifying information, or pointing them to existing issues that match their description of the problem.
2. **Reviewing pull requests for the docs.** Reviewing [documentation updates](https://github.com/gluestack/gluestack-style/pulls) can be as simple as checking for spelling and grammar. If you encounter situations that can be explained better in the docs, click **Edit** at the bottom left of most docs pages to get started with your own contribution.
3. **Help people write test plans.** Some pull requests sent to the main repository may lack a proper test plan. These help reviewers understand how the change was tested, and can speed up the time it takes for a contribution to be accepted.

Each of these tasks is highly impactful, and maintainers will greatly appreciate your help.

## <a name="requests"></a> Questions, Bugs, Features

### <a name="question"></a> Got a Question or Problem?

Do not open issues for general support questions as we want to keep GitHub issues for bug reports
and feature requests. You've got much better chances of getting your question answered on dedicated
support platforms, the best being [Stack Overflow](http://stackoverflow.com/questions/tagged/gluestack).

Stack Overflow is a much better place to ask questions since:

- there are thousands of people willing to help on Stack Overflow
- questions and answers stay available for public viewing so your question / answer might help
  someone else
- Stack Overflow's voting system assures that the best answers are prominently visible.

To save your and our time, we will systematically close all issues that are requests for general
support and redirect people to the section you are reading right now.

### <a name="issue"></a> Found an Issue or Bug?

If you find a bug in the source code, you can help us by submitting an issue to our
[GitHub Repository](https://github.com/gluestack/gluestack-style/issues/new). Even better, you can submit a Pull Request with a fix.

**Please see the [Submission Guidelines](#submit) below.**

### <a name="feature"></a> Missing a Feature?

You can request a new feature by submitting an idea to our discussion under [Feature Request](https://github.com/gluestack/gluestack-style/discussions/new?category=feature-request) category.

If you would like to implement a new feature then consider what kind of change it is:

- **Major Changes** that you wish to contribute to the project should be discussed on github discussion under [Feature Request](https://github.com/gluestack/gluestack-style/discussions/new?category=feature-request) category .that clearly outlines the changes and benefits of the feature.
- **Small Changes** can directly be crafted and submitted to the [GitHub Repository](https://github.com/gluestack/gluestack-style)
  as a Pull Request. See the section about [Contributing Code](#submit-pr).

## <a name="submit"></a> Issue Submission Guidelines

Before you submit your issue search the archive, maybe your question was already answered.

If your issue appears to be a bug, and hasn't been reported, open a new issue. Help us to maximize
the effort we can spend fixing issues and adding new features, by not reporting duplicate issues.

The "[new issue](https://github.com/gluestack/gluestack-style/issues/new)" form contains a number of prompts that you should fill out to
make it easier to understand and categorize the issue.

In general, providing the following information will increase the chances of your issue being dealt
with quickly:

- **Issue Description** - if an error is being thrown a non-minified stack trace helps
- **Motivation for or Use Case** - explain why this is a bug for you
- **`gluestack-style` Version(s)** - is it a regression?
- **Browsers and Operating System** - is this a problem with all browsers or only specific ones?
- **Reproduce the Error** - provide a live example (using [expo snack template](https://snack.expo.dev/@gluestack/4da9b2) or an unambiguous set of steps.
- **Related Issues** - has a similar issue been reported before?
- **Suggest a Fix** - if you can't fix the bug yourself, perhaps you can point to what might be
  causing the problem (line of code or commit)

## <a name="dev-env"></a> Setting Up your Development Environment

- Fork this repository.

- Clone your fork of `gluestack-style`:

  ```git
  git clone git@github.com:gluestack/gluestack-style.git
  ```

- Navigate to gluestack-style

  ```
  cd gluestack-style
  ```

- Add main repo remote:

  ```git
  git remote add gluestack git@github.com:gluestack/gluestack-style.git
  ```

- Install dependencies:

  ```bash
  yarn
  ```

- Start the Example App:

  ```bash
  yarn storybook
  ```

  - To start app directly on Web
    ```bash
    yarn storybook
    ```
  - To start app directly on IOS
    ```bash
    cd example/storybook
    yarn ios
    ```
  - To start app directly on Android
    ```bash
    cd example/storybook
    yarn android
    ```

and start making the changes.

## <a name="submit-pr"></a> Contributing Code

Code-level contributions to `gluestack-style` come in the form of [pull requests](https://help.github.com/en/articles/about-pull-requests). These are done by forking the repo and making changes locally. Directly in the repo, there is the [`Storybook Testbed` app](/example/storybook) that you can run on your device (or simulators) and use to test the changes you're making to `gluestack-style` source.

The process of proposing a change to `gluestack-style` can be summarized as follows:

1. Fork the Gluestack repository and create your branch from `master`.
2. Make the desired changes to Gluestack source. Use the `Storybook Testbed` app to test them out.
3. If you've added code that should be tested, add tests.
4. If you've changed APIs, update the documentation, which is available [here](https://github.com/gluestack/gluestack-style/tree/main/example/storybook/src).
5. Ensure the test suite passes, either locally or on CI once you opened a pull request.
6. Make sure your code lints. To keep project away from disputes we make use of **ESLint**, which is really a handy linting tool that enforces strict coding styles and makes sure your files are free from dead code. Each module of `gluestack-style` has bundled ESLint as a dev dependency and checks your code every time you commit.
7. Push the changes to your fork.
8. Create a pull request to the `gluestack-style` repository.
9. Review and address comments on your pull request.

If all goes well, your pull request will be merged. If it is not merged, maintainers will do their best to explain the reason why.

## <a name="docs"></a> Helping with Documentation

The `gluestack-style` documentation is hosted as part of the `gluestack` repository. The website itself is located at <https://gluestack.io/style>. If there's anything you'd like to change in the docs, you can get started by clicking on the "Edit" button located on the bottom left of most pages on the website.
