# react-lib-boilerplate

This is a boilerplate for build, test, play, and deploy react libraries using typescript.

## Installation

```bash
# Clone the repo
git clone https://github.com/luisgustavolf/react-lib-boilerplate.git

# Enter the dir
cd react-lib-boilerplate

# install the dependencies 
yarn 
```

## Structure

```bash
/react-lib-boilerplate
|-- dist            # post build, publish file
|-- node_modules
|-- public
|-- src
|   |-- lib         # your code here
|   |-- playground  # your examples here
|-- README.md
```

## Export your components
As things needs to be visible for your consumers, remember to ALWAYS make index.tsx files with exports everything you want to be visible.

So, imaging the fallowing lib structure

```bash
/react-lib-boilerplate
|-- src
|   |-- lib  
|   |   |-- ComponentA
|   |   |-- ComponentB
|   |   |-- ComponentC
|   |   |-- index.tsx # EXPORT THINGS HERE
```

Your `index.tsx` should look like something like this

```node
export * from './ComponentA'
export * from './ComponentB'
export * from './ComponentC'
```

## Play with them

Create examples in the playground folder, linking your components

```bash
/react-lib-boilerplate
|-- playground
```

Run the test app

```bash
# Will start dev server, based on latest Create React APP
yarn start
```

## Building and testing for distribution

```bash
# run jest tests
yarn test

# build and see the output in the dist folder
yarn build
```

## Publishing 
IMPORTANT: you will need a NPM account!

```bash
# Make login
npm login

# Build the project
yarn build

# Change your version
yarn version --[major|minor|patch]

# Publish
# IMPORTANT: your project will only by publish if all test are passing...
npm publish
```
 
That´s it! :)