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
- Green for ingredient/location title: #95BD8C
- Green for page header: #6A9161
- Profile page green background color: #D1DECE

## Typography

- Primary Font: Jomhuria, sans-serif
- Secondary Font: Anek Gurmukhi

## Component Behavior

- Menu and button hovering causes component color changes
- Liking/disliking ingredients or locations will dynamically remove them from the visible list. This is indicated by the red color or lack thereof of the heart
- Smooth transition animation when submitting feedback forms from initial form to feedback text

## Accessibility Standards
We referenced Apple's Human Interface Guidelines in order to make our webapp more accessible.
- Thicker fonts (Jomhuria, Anek) for easier reading accessibility
- Buttons with sufficient color contrast (dark green background with light-colored text)
- Use of both color and visuals to differentiate different indicators
- Use of left and right-aligned text
- Use of icons for features
  - Microphone: Speech-To-Text Feature
  - Arrow Icons: Dropdown Indication
- Clear, big, visible text (All font sizes are proportional to screen size)
- Buttons with distinct colors (Separates it from other components and calls-to-action)
- Proper feedback for user actions (submitting a form, proper form validation)

## Responsive Breakpoints

- We will be using Tailwind's default breakpoints to create a responsive webapp. Specifically, we will be implementing our web design for breakpoints greater or equal to md and our mobile design for breakpoints less than md.

sm: 640px\
md: 768px\
lg: 1024px\
xl: 1280px\
2xl: 1536px
