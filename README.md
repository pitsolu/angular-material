 # Myapp

Project generated via [ng-cli](https://github.com/angular/angular-cli) v12.2.2.

Below are sample commands for `angular-cli` you don't need run anything after and
including the `generate` or `g` commands since those facets already exists in 
the project.

```sh
# install yarn
npm install -g yarn

#install angular
npm install -g @angular/cli

#create project
ng new [project name]
cd [project name]

yarn add @angular/material
yarn add @angular/flex-layout

#generate component
ng generate component login --module app
ng g component login --module app #short form

#generate a module and add routing
ng generate module layout --routing --module app

#generate a service
ng generate service login/auth

#build and store in dist/
ng build 									
ng build --prod #build for production

#test
ng test #with karma
ng e2e #end-to-end testing

#start deployment server at localhost:4200
ng serve
ng serve --open #open browser

#help
ng help
```

## Further Info

To get more help on the ng-cli go check out the [ng-cli-ref](https://angular.io/cli) page.

For help on tests see [Karma](https://karma-runner.github.io) page.
