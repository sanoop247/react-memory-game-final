# React Memory Game

A browser based memory card game built with React, Typescript and Vite

## Rules

Player reveals 2 cards one after another trying to match the numbers inside it in the shortest possible time.

## Features
- Timer tracks the players time taken to complete from first click of card.
- Unsuccessful matches are shown with shake animation and red colored card faces
- Successful matches are shown with green colored card faces and remains facing up to progress
- On matching all cards timer stops to show players completion time.
- On game finishing user is given option to play again

## Setup
### Install dependencies
- npm install
### Run the game
- npm run dev

## Overview of approach
- Gameboard component manages the logic to check matches of flipped cards
- Timer component tracks the time player takes to complete the game
- GameResult component shows the winning message and provides option to restart the game
- Card component defines the structure of each card and its flipping logic.

