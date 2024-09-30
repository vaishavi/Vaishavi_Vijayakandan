# My Portfolio Website

This is my professional portfolio website developed using React. It showcases my skills, projects, and professional trajectory through a visually appealing and interactive layout.

## Features

- **Interactive Particle Background**: Utilizes the `particles.js` library to create a dynamic and interactive background.
- **Project Showcase**: Features a carousel to display various projects I've worked on.
- **Contact Form**: Includes a functional contact form that integrates EmailJS for sending messages directly from the website.
- **Responsive Design**: Fully responsive web design that adapts to various device screens.

## Technologies Used

- **React**: Utilized for its efficient rendering and state management capabilities.
- **EmailJS**: For handling outgoing emails directly from the contact form without needing server-side code.
- **particles.js**: For creating interactive backgrounds that enhance the user interface.

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio

2. Install the dependencies:
   npm install

3. Start the development server:
   npm start
   
This will run the app in development mode. Open http://localhost:3000 to view it in the browser.

## Deployment

This portfolio is deployed using Vercel, a cloud platform that provides an easy and scalable way to host static websites and web applications.

### Steps to Deploy on Vercel

1. **Sign Up/Log In to Vercel**: First, create an account or log in to Vercel if you already have an account. You can sign up or log in here: [Vercel](https://vercel.com).

2. **Connect Your GitHub Repository**:
   - Once logged in, go to your Dashboard.
   - Click on the **New Project** button.
   - You will be prompted to import a project from your GitHub repository. Select the repository where your portfolio is stored.
   - Vercel will automatically detect that you are using a Node.js project (React).

3. **Configure Your Project**:
   - You may need to configure some settings, such as the build command and output directory, but for most React projects, the default settings should work out of the box.
   - For a standard React application created with `create-react-app`, the build command will be `npm run build` and the output directory should be set to `build`.

4. **Deploy**:
   - After configuring your project settings, click on the **Deploy** button.
   - Vercel will begin the deployment process, and you will see the build logs in real time.
   - Once the build is completed, Vercel will provide you with a URL to view your live site.

5. **Custom Domains**:
   - If you own a domain that you'd like to use with your portfolio, Vercel allows you to link your custom domain to your project easily.
   - Navigate to the **Settings** tab in your project dashboard, find the **Domains** section, and follow the instructions to link your domain.

### Automatic Redeploys

- Vercel offers automatic redeployment whenever you push changes to the connected repository branch. This ensures your deployed site is always up to date with your latest commits.

### Additional Settings

- Explore additional settings in the Vercel dashboard such as Environment Variables, Secrets, and more to customize your deployment according to your needs.

By following these steps, you can deploy your portfolio on Vercel and have it available globally. For more detailed instructions, refer to the official Vercel documentation: [Vercel Docs](https://vercel.com/docs).

## Contributing

If you have suggestions on how to improve the portfolio or find any issues, please feel free to submit an issue or pull request.

## Author

- **Vaishavi Vijayakandan** - *Author* - [VaishaviV](https://github.com/vaishavi)

## Acknowledgments
Thanks to the creators and contributors of all the libraries used in this project.
Special thanks to anyone else who inspired, tested, or helped out.
