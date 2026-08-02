# Pokédex

A responsive Pokédex web application built with HTML, CSS, and vanilla JavaScript.

The application retrieves Pokémon data from the [PokéAPI](https://pokeapi.co/) and displays Pokémon cards with names, images, IDs, types, detailed information, and base statistics.

## Features

- Displays Pokémon data from the PokéAPI
- Loads Pokémon in groups of up to 20 cards
- Previous and next navigation
- Search function with a minimum input length of three characters
- Search results displayed as complete Pokémon cards
- Error message when no Pokémon is found
- Detailed Pokémon dialog
- About section with:
  - Height
  - Weight
  - Base experience
- Base statistics section
- Navigation between Pokémon inside the dialog
- Loading animation
- Responsive design from 300px up to large desktop screens
- Mobile-first development
- Keyboard-accessible buttons
- Accessible labels and semantic HTML elements

## Technologies

- HTML5
- CSS3
- JavaScript
- PokéAPI
- Git
- GitHub

## API

This project uses the free [PokéAPI](https://pokeapi.co/) to retrieve Pokémon information.

The initial API request loads the Pokémon names and detail URLs. Additional requests retrieve information such as:

- Pokémon ID
- Image
- Types
- Height
- Weight
- Base experience
- Base statistics

## Project Structure

```text
pokedex/
├── assets/
│   ├── css/
│   ├── fonts/
│   ├── img/
│   └── js/
├── index.html
└── README.md
