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
- Fisher-Yates shuffling algorithm used to shuffle cards.
- Gameboard component manages the logic to check matches of flipped cards
- Timer component tracks the time player takes to complete the game
- GameResult component shows the winning message and provides option to restart the game
- Card component defines the structure of each card and its flipping logic.

## Assumptions
- Single player game
- Timer tracks time per second since the game is meant to be a fun interactive experience for the player

## Tradeoffs
- Inline styles could be used to reduce lines of code but make the code less structured and thus harder to maintain
- Simpler shuffles could have been used to reduce complexity but Fisher-Yates shuffle is proven to be more reliable.

## Suggested Improvements
- gameboard dimensions can be customised to 4*4, 6*6 and 8*8 to provide difficulty options for player
- Persist timing with local storage to store best times.
- Welcome screen with game instructions for players
  

