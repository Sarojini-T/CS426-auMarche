# UI/UX Design and Style Guidelines Document

## Getting Started

Install [Tailwind Intellisense Plugin](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) and [Prettier](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) for faster tailwind-ing. \
\
The custom style themes described below are located in App.css.

## Color Schemes

- Primary Green: #48733F
- Primary Light Green: #B6D7B0
  - Hover color for buttons and menus
- Secondary Green: #709C67
  - Color when not hovering for buttons and menus
- Secondary Light Green: #B5C7B1
  - Color for boxes in saved ingredients/locations pages
- Ternary Light Green: #D7E6D3
  - Color for suggestion box

## Typography

- Primary Font: Jomhuria, sans-serif
- Secondary Font: Anek Gurmukhi

## Component Behavior

- Menu and button hovering causes component color changes
- Liking/disliking ingredients or locations will dynamically remove them from the visible list. This is indicated by the red color or lack thereof of the heart

## Accessibility Standards

- Use of icons for features
  - Microphone: Speech-To-Text Feature
  - Arrow Icons: Dropdown Indication
- Clear, big, visible text (All font sizes are proportional to screen size)
- Buttons with distinct colors (Separates it from other components and calls-to-action)

## Responsive Breakpoints

- We will be using Tailwind's default breakpoints to create a responsive webapp.

sm: 640px\
md: 768px\
lg: 1024px\
xl: 1280px\
2xl: 1536px\
