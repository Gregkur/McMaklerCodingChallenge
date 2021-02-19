# README

`ReactJS` frontend, connected with a `Rails API` based backend.
Technologies:

- `hooks`,
- `react router`,
- `code-splitting`, component reusability
- `styled componenets` with dynamic variables
- `SCSS`,
- `fetching`
  and others.

Most of the project is in `app/javascript`(frontend), and `app/controllers/api/v1`(backend). Rails views are redundant, only pointing to ReactJS, everything is client-side-rendered. The project has security issues of which I am aware of, like not encrypted API keys, but it's made so for easier access from other computers.

Sadly I did not start this project on github, so I tried to add comments so that my thought process is clear and visible.

`app/javascript/components` hosts `Home.jsx` which is a frontend start of the app, which then leads to:

-`app/javascript/components/properties/NewProperty.jsx` and `app/javascript/components/modals/ModalConstructor.jsx` for Property construction -`app/javascript/components/properties/AllProperties.jsx` for displaying the properties.
Styles are contained within the folders in seperate `styles` folders.

##### 1. Download

Download the master

##### 2. Setup

Just to be sure

```bash
$ npm install
$ yarn install
$ bundle install
$ rails db:drop db:create db:migrate db:seed
```

##### 2. Start the Rails server

You can start the rails server using the command given below.

```ruby
rails s
```

And now you can visit the site with the URL http://localhost:3000

If anything doesn't work, please let me know at grzegorz.kurzajczyk@gmail.com
