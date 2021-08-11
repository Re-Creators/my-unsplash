<!-- Please update value in the {}  -->

<h1 align="center">My Unsplash</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://my-unsplash-io.netlify.app/">
      Demo
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/solutions/fOHscGfyFo1Sptx5reZO">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/rYyhwJAxMfES5jNQ9YsP">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How To Use](#how-to-use)
- [Using API](#using-api)
- [Acknowledgement](#acknowledgement)
- [Contact](#contact)

<!-- OVERVIEW -->

## Overview
![my-unsplash](https://user-images.githubusercontent.com/51537231/128985773-2e955956-f1c2-448e-9fe7-952797ad1639.PNG)

This repo just for Frontend. I have hosted Backend API on different platform.


### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [Vue 2](https://vuejs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Laravel 8](https://laravel.com/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/rYyhwJAxMfES5jNQ9Ys) was to build an application to complete the given user stories.

- I can see a list of photos in the masonry layout that I have added
- I can see select an answer
- I can see if my answer is correct or incorrect
- I can add a new photo to the list - the new photo should be on top of the list
- I can search for photos by label
- When I hover a photo, I can see a label and a delete button
- I can delete images
- When I delete an image, I can enter my password

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/Re-Creators/my-unsplash/

# Install dependencies
$ npm install

# Run the app
$ npm run serve

```

## Using API

API endpoint `https://my-unsplash-io.herokuapp.com/api`

## Available Routes

#### **POST** `/images`
* accepts  `label`, `url` to add new image
example :
```
"image" : {
  "label" : "dog image",
  "url" : "https://dog-image.com"
}
```

#### **GET** `/images`
* Return all images in database

#### **GET** `/images?label={label_name}`
* Search image by label

#### **DELETE** `/images/{id}`
* Delete a image

## Acknowledgement
- [Masonry](https://masonry.desandro.com/)
- [Vue-Lazyload](https://github.com/hilongjw/vue-lazyload)
- [Loading.io](https://loading.io/)

## Contact

- GitHub [Re-Creators](https://github.com/Re-Creators)
