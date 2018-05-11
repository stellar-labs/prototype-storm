# Contributing

Thank you a lot for your time. If you want to make this library a better one, we have what you need here.

## Summary

- [Where do we need me on?](#where-do-we-need-me-on)
- [How can I add a new prototype?](#how-can-i-add-a-new-prototype)
- How can I add a new command

## Where do we need me on?

- Checking for dead links on [the documentation](https://stellar-labs.github.io/prototype-storm) and every versions
- Filling issues for typos in the documentation
- Checking the weirder cases on the prototypes you love to find bugs
- Filling issue for the bug you know
- Reinforcing the tests on the prootype you love

Thank you for your precious time!

## How can I add a new prototype?

1. Clone the project: `git clone https://github.com/stellar-labs/prototype-storm`
2. Make a branch: `git checkout -b <nice name>`
2. Update dependencies: `npm update`
3. Create the necessary files: `npm make:prototype <nice name>`
4. Make some tests
5. Test your use cases: `npm test:file test/<nice name>.js`
6. Push your changes to your git account: `git add . && git commit -m "nice message" && git push`
7. Make a pull request on GitHub