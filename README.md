# Romain Navarro Portfolio

This is a portfolio website for Romain Navarro, a web developer. The project is built using Next.js and styled with Bulma.

## Project Structure

```
romain-navarro-portfolio
├── public
│   └── favicon.ico          # Website icon
├── src
│   ├── components           # React components for different sections
│   │   ├── Welcome.tsx      # Welcome message component
│   │   ├── ServicesSkills.tsx # Services and skills component
│   │   ├── Portfolio.tsx     # Portfolio of projects component
│   │   ├── Curriculum.tsx     # Curriculum component
│   │   ├── Contact.tsx        # Contact information component
│   │   └── ProjectDetail.tsx  # Detailed project view component
│   ├── pages                # Next.js pages
│   │   ├── index.tsx        # Homepage
│   │   └── projects
│   │       └── [id].tsx     # Dynamic project detail page
│   ├── styles               # Global styles
│   │   └── globals.css      # Bulma styles and custom styles
│   ├── data                 # Static data files
│   │   ├── projects.ts      # Static project data
│   │   └── profile.ts       # Static profile data
│   └── types                # TypeScript types
│       └── index.ts         # Type definitions
├── package.json             # NPM configuration file
├── tsconfig.json            # TypeScript configuration file
└── README.md                # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/romain-navarro-portfolio.git
   ```

2. Navigate to the project directory:
   ```
   cd romain-navarro-portfolio
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the portfolio.

## Features

- **Welcome Section**: A warm welcome message to visitors.
- **Services & Skills**: A section showcasing Romain's skills and services offered.
- **Portfolio**: A collection of projects with links to detailed views.
- **Curriculum**: A summary of Romain's professional and academic background.
- **Contact**: Information on how to get in touch.

## Future Improvements

- Integrate an API for dynamic data fetching.
- Enhance the design with more custom styles.
- Add animations and transitions for a better user experience.

## License

This project is licensed under the MIT License.