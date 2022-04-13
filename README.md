This project will be for an admin and user portal for the Hennops River Revival group

## Getting Started

Yarn is being used, so ensure it is insalld and up to date by running the following command:

```bash
npm install -g yarn
```

Install the project with

```bash
yarn i
```

Run the project with

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[Ionic v5](https://ionicframework.com/docs/v5/react/quickstart) is being used in this project, please reference the documentation when making changes

[React-query](https://react-query.tanstack.com/) will manage all API calls and hopefully mitigate the need for a state store. Ensure queries are run server or client side where necessary (i.e serverside when not fetching user specific data)

Please ensure NO ts issues are committed, Husky is in place to prevent this. _DO NOT_ circumvent this by any means.
