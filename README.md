# cropsy

> Image Cropper prototype built with Ember, Yeoman, and Foundation.

## Getting Started

This app was build using [Yeoman](http://yeoman.io), the Web's scaffolding tool. The Yeoman workflow combines three tools:

1. Yo
2. Grunt
3. Bower

To get started, clone this repository and ````cd```` into your newly created directory:

```shell
cd cropsy
```

This prototype requires that you have Yeoman installed. To do so, run:

```shell
npm install -g yo
```

Install the necessary gem dependancies:

```shell
bundle install
```

Install Bower dependancies:

```shell
bower install
```

Lastly, install the Node dependancies:

```shell
npm install
```

To start your server run:

```shell
grunt serve
```

## Building Cropsy for Production

Yeoman is great for development because it allows you to work in unconcatinated and unminified files which makes development easier. When you're ready to prepare your application for distribution, run:

```shell
grunt build
```

Grunt will take care of concatenating and minifying your JavaScript and CSS files so they're ready for deploying to your production web server. Your production ready application is placed in the /dist folder.


## Deployment

Cropsy is configured to use the [rsync-deploy](https://github.com/rosszurowski/deploy) gem. To deploy this app to a remote web serve, add your web server configuration do the following:

1. Rename /deploy-sample.yml to /deploy.yml
2. Open deploy.yml in your favorite text editor and add your web server host, user, and remote path.

Then run:

```shell
deploy
```

## Using Cropsy

Cropping images is a complex task. We focused on building a tool that would work on mobile/touch devices first and scale up to work on a desktop client.

One key task of desktop cropping tools is the difficulty involved in resizing. We solved this problem by offering developers to option to offer the user popular presets based on their content guidelines.

* Create a results preview css class
* Add your event to the image edit view file
* Your new aspect ration will be added to the ration dropdown

Preview your image on mobile was clumsy, so using media queries we placed the preview panel off screen in order to allow the user to focus on one task at a time.

* Preview button will display off canvas on mobile
* Editing the aspect ratio setting will update the preview canvas

## Why Cropsy

We experimented with Hammer.js and a pure touch experience, but eventually decided that we needed to include a simple desktop feature set in the component.

[Cropbox](https://github.com/acornejo/jquery-cropbox)
[Hammer](http://hammerjs.github.io/)

We landed on extending the offerings of cropper.js as a mobile first component and focusing on the primary elements that support a core touch experience. 

[Cropper](https://github.com/fengyuanchen/cropper)

We chose Foundation as a Front End framework for its blank visual style and Bourbon for its powerful mixins.

* [Foundation](http://foundation.zurb.com/docs/)
* [Bourbon](http://bourbon.io/)

