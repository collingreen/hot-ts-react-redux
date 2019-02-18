# Hot-TS-React-Redux

This is an extremely opinionated project skeleton for single page web apps that is
focused on a high-velocity developer workflow.


## Highly Opinionated

- [Parcel](https://parceljs.org/) - very fast builds with litte config
- [Typescript](https://www.typescriptlang.org/) - avoid stupid errors
- [React](https://reactjs.org/) - component-based, declarative views
- [Redux](https://redux.js.org/) + [React-Redux](https://react-redux.js.org/) -
  state you can reason about + time travel -- use the dev tools
- [Prettier](https://www.npmjs.com/package/prettier) and
  [Husky](https://github.com/typicode/husky) to automatically reformat your code
  as a pre-commit hook and to require passing tests before pushing. Do your part
  to remove style nitpicking from code review by using this and not complaining.
- [Jest](https://jestjs.io/index.html) - use components intelligently and write
  equally good tests for them.


## Initial Setup

    yarn install


## Start the Development Server

    # With type checking (use this)
    yarn develop

    # Transpile only
    yarn start

Go to `localhost:1234` in your browser.


## How to build the application for deployment

    yarn build

The default output directory is `/dist`.


## How to run the tests

    yarn test       # run test once
    yarn test:watch # watch mode

You have to create `__tests__` directory at the same location of files which you
want to test.  Test file's name should be `SOURCE.test.ts/tsx/js` or
`SOURCE.spec.ts/tsx/js`.


## Why this is my opinion of a great workflow

Everything in this project is geared toward making it easier and faster to
develop, often by reducing complexity, accelerating iteration, or preventing
costly errors.

- React -- React lets you build your user interface in a declarative,
  component-based way. This allows you to easily organize and re-use/extend your
  ui elements as your application grows and, more importantly, lets you separate
  the application logic/state from the view, drastically reducing the mental
  overhead required to get work done.

- Redux -- Redux is a reducer-based state management library with excellent
  tooling that makes it easy to reason about (and iterate on) the logic that
  drives your application. Replaying actions using the redux devtools is a
  magical experience - if you haven't watched Dan Abramov talk about how to get
  the most out of Redux then go do that now.

- Typescript -- Typescript adds an annoying layer of bookkeeping to your
  javascript development in exchange for catching 90% of the dumb little
  mistakes you make every day at BUILD TIME instead of run time.

- Parcel -- Parcel is very fast for incremental builds and supports
  hot-module-replacement out of the box.

- hot-module-replacement -- The above systems come together to make this a
  reality. Edits to your react components, reducers, and styles get instantly
  applied without losing your application state. This lets you iterate and tweak
  things with the same responsiveness as changing styles in the developer
  console. When done correctly, this means you can record a set of actions (like
  some button clicks), then tweak reducer code to make sure you end up with the
  correct state, then tweak your react code to make sure that state is rendered
  how you want it, without ever going through a full reload or re-performing the
  steps to get there.

- Jest -- Jest is a test library for javascript. Good test coverage makes it
  easy to refactor your code at full speed. Tests + type safety means you can
  keep working on your project day after day, month after month, without
  degrading into that crippled state where you can't change anything without
  breaking something else.


## Getting the Most Value

- install https://github.com/reduxjs/redux-devtools and learn to use them - this
  gives you incredible power over iterating on and debugging your application
  state
- install the react dev tools -
  https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
- write tests and learn the difference between good tests and bad tests


## Based on / Special Thanks

This project is based on
[ts-react-parcel](https://github.com/adhrinae/ts-react-parcel) by Ahn Dohyung
