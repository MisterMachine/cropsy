# cropsy

> Image Cropper prototype built with Ember, Yeoman, and Foundation.

## Getting Started

This app was build using [Yeoman](http://yeoman.io/), the Web's scaffolding tool. The Yeoman workflow combines three tools:

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

Install the neccessary gem dependancies:

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


## Deployment

## Using Cropsy

Cropping images is a complex task. We focused on building a tool that would work on mobile/touch devices first and scale up to work on a desktop client.

One key task of desktop cropping tools is the difficulty involved in resizing. We solved this problem by offering developers to option to offer the user popular presets based on their content guidelines.

Preview your image on mobile was clumsy, so using media queries we placed the preview panel off screen in order to allow the user to focus on one task at a time.

## Why Cropsy

We experimented with Hammer.js and a pure touch experience, but eventually decided that we needed to include a simple desktop feature set in the component.

We landed on extending the offerings of cropper.js as a mobile first component and focusing on the primary elements that support a core touch experience. 

We chose Foundation as a Front End framework for its blank visual style and Bourbon for its powerful mixins.


