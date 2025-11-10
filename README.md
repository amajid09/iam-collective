# Getting started with fa-kente-iam-collective

i am collective pwa. This project
was bootstrapped with [Create Micro App](https://github.com/mtnkente/create-micro-app).

# MicroFrontends

Microfrontends in a PWA architecture foster cross-functional collaboration by eliminating silos between development, design,
and other teams. Each team can focus on specialized areas within the PWA, enabling faster iterations and accelerating product delivery cycles.

- FeatureHub
- FeatureHub services
- FeatureHub router
- Capacitor
- Google Taging
- DataDog
- Custom hooks
- PWA service worker

# Paragon Design System

MTN Paragon design system is a centralised design system with modular functions that can scale rapidly across markets,
platforms, use-cases and brand nuances

- producer consumer
- storybook

# Setup instructions

To get started using this repository. You need a GitHub personal access token (PAT) to clone the dependencies deployed
into NPM GitHub.

## Development principles

### General

We follow common clean [Code Principles](https://x-team.com/blog/principles-clean-code/).

1. [KISS](https://en.wikipedia.org/wiki/KISS_principle): Keep It Simple Stupid.
2. [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself): Don’t Repeat Yourself.
3. [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it): You Aren’t Gonna Need It.
4. [Composition over inheritance](https://en.wikipedia.org/wiki/Composition_over_inheritance).
5. We add comments only if necessary. Comments can clutter your code and be misleading, if underlying code changes and comments are not kept in sync.
6. We automate everything (as far as it makes sense).

### Source code

#### Structuring and naming

1. We find meaningful names for our components.
2. We keep all files related to a component within a single folder.

#### React

1. We try to keep our [React](https://reactjs.org/) components as small as possible.
2. We use functional React components in combination with [React hooks](https://reactjs.org/docs/hooks-intro.html).
3. We define an explicit interface for our React component props.
4. We use [TypeScript](https://www.typescriptlang.org/) for creating React apps.
5. We enable the strict compiler flags for [TypeScript](https://www.typescriptlang.org/) (strict, noUnusedParameters, noUnusedLocals, noImplicitReturns, …)
6. Create New env file include the following lib versions. DO NOT CHANGE REACT VERSIONS { REACT_VERSION=16.7.0 FEATURE_HUB_REACT_VERSION=3.6.0}

#### Styling

We make use of the [Styled Components](https://styled-components.com/) library instead of CSS/SCSS files or inline styles.

#### Testing

1. We respect all principles of the [Practical Testing Pyramid by Martin Fowler](https://martinfowler.com/articles/practical-test-pyramid.html).
2. We make sure that our code is tested properly and review the test coverage sporadically.
3. We make use of the [Jest](https://jestjs.io/docs/en/getting-started.html) library for unit testing.
4. We make use of the [Cypress](https://www.cypress.io/) library for automated acceptance testing / end-to-end testing in combination with [Cucumber](https://cucumber.io/) and the [Page Object Model](https://martinfowler.com/bliki/PageObject.html).

## Version control

### Branching model

We prefer a single main branch, feature, bugfix and hotfix branches.

### Commit messages

We format our commit messages properly by using the following formats:

- if a commit is related to a certain Azure DevOps (ADO) ticket:

```shell

<type>: <ado-task-number> <
short description of what was accomplished>

-
<describe what you have done (optional)>
```

- if not:

```shell

<type>: <short description of what was accomplished>

-
<describe what you have done (optional)>
```

Type can be one of the following list:

```shell

build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test
```

## Integration & Delivery

### Continuous integration / Continuous delivery

We make use of [GitHub Actions](https://github.com/features/actions)
