# react-random-beer-app

Requirements:
- git
- node
- npm
- yarn

To run the app install:

```bash
git clone https://github.com/kdrcetintas/react-random-beer-app.git
cd react-random-beer-app
yarn install
yarn start
```

Description:

* cors-anwhere demo link used at the api requests due to cors error
* tailwindcss used for the ui
* redux for state management
* redux-thunk for async action creators
* all api results mapped under /types folder
* state/prop types mapped as inline in the component files
* detail page has two way data read structure, from the global state or from the api. If there is no data at the global state for specific brewery, it's will read from the api and save the global state
* big components is seperated at /components folder