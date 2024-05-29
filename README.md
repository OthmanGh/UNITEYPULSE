<img src="./readme/title1.svg"/>

<br><br>

<!-- project philosophy -->
<img src="./readme/title2.svg"/>

> A comprehensive company management platform, empowering businesses to streamline operations and enhance efficiency, ensuring seamless collaboration and productivity across all departments.
>
> UNITY PULSE aims to revolutionize business operations by providing a centralized platform for comprehensive management across all aspects of the organization. We aim to simplify tasks such as employee management, finance tracking, task delegation, and communication, ultimately enhancing efficiency and productivity within businesses.

### User Stories:

#### Business Owner:

- As a business owner, I should be able to define and update company policies such as code of conduct, HR policies, etc., ensuring all employees are aware and compliant.

- As a business owner, I need to schedule and manage team meetings, including sending invites, setting agendas, and tracking attendance, to facilitate effective communication and collaboration.

- As a business owner, I need to manage project budgets, track expenses, and approve expenses submitted by team members, ensuring projects stay within budget constraints.

#### Employee:

- As an employee, I value having a centralized directory that provides detailed profiles of my colleagues, including their contact information and job roles, allowing for seamless collaboration and efficient communication.

- As an employee, I need to provide feedback on projects, processes, or team dynamics through anonymous surveys or suggestion boxes, fostering a culture of continuous improvement and employee engagement.

- As an employee, I have to be able to request flexible work arrangements such as remote work, flexible hours, or job sharing, supported by the company's policies and systems for managing work arrangements.

<br><br>

<!-- Tech stack -->
<img src="./readme/title3.svg"/>

### Unity Pulse is built using the following technologies:

- This project uses the [React](https://react.dev/) library for building the user interface. React is a powerful JavaScript library for building dynamic and responsive web applications.

- The backend of the application is powered by [Express](https://expressjs.com/), a fast and minimalist web framework for Node.js, which allows for robust routing and middleware capabilities.

- For persistent storage (database), the application uses [MongoDB](https://www.mongodb.com/), a NoSQL database that provides flexible and scalable data management.

- The mobile app is developed using [React Native](https://reactnative.dev/), a framework that allows for the development of cross-platform mobile applications using a single codebase.

- For styling, the application utilizes [Tailwind CSS](https://tailwindcss.com/), a utility-first CSS framework that enables rapid and efficient UI development.

- To enable real-time communication and live chatting, the application incorporates [Socket.IO](https://socket.io/), a library that enables low-latency, bidirectional, and event-based communication between the browser and server.

<br><br>

<!-- UI UX
<img src="./readme/title4.svg"/>

> We designed Unity Pulse using wireframes and mockups, iterating on the design until we reached the ideal layout for easy navigation and a seamless user experience.

### Mockups

| Home screen                             | Menu Screen                           | Order Screen                          |
| --------------------------------------- | ------------------------------------- | ------------------------------------- |
| ![Landing](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) | ![fsdaf](./readme/demo/1440x1024.png) |

<br><br> -->

<!-- Database Design -->
<img src="./readme/title5.svg"/>
 
### Architecting Data Excellence: Innovative Database Design Strategies:

<img src="./readme/demo/dataBaseSchema.png"/>

<br><br>

<!-- Implementation -->
<img src="./readme/title6.svg"/>

### Business Owners Screens (Web)

| Hero screen                                   | Landing screen                              |
| --------------------------------------------- | ------------------------------------------- |
| ![Landing](./readme/demo/HeroSection.gif)     | ![fsdaf](./readme/demo/LandingPage.gif)     |
| Login Screen (Google)                         | Signup Screen (Google)                      |
| ![Landing](./readme/demo/LoginWithGoogle.gif) | ![fsdaf](./readme/demo/SigupWithGoogle.gif) |

| Login screen                      | Signup Screen                      |
| --------------------------------- | ---------------------------------- |
| ![fsdaf](./readme/demo/Login.gif) | ![fsdaf](./readme/demo/Signup.gif) |

| Dashboard Screen                        | Company Infos screen                      |
| --------------------------------------- | ----------------------------------------- |
| ![Landing](./readme/demo/Dashboard.gif) | ![fsdaf](./readme/demo/Company-Infos.gif) |

| Employees Screen                      | Transactions Screen                      |
| ------------------------------------- | ---------------------------------------- |
| ![fsdaf](./readme/demo/Employees.gif) | ![fsdaf](./readme/demo/Transactions.gif) |

| Calendar Screen                      | Manage Screen Screen               |
| ------------------------------------ | ---------------------------------- |
| ![fsdaf](./readme/demo/Calendar.gif) | ![fsdaf](./readme/demo/Manage.gif) |

| Editor Screen                      | Customers Info Screen                 |
| ---------------------------------- | ------------------------------------- |
| ![fsdaf](./readme/demo/Editor.gif) | ![fsdaf](./readme/demo/Customers.gif) |

| Chat screen                            | Chatbot Screen                        |
| -------------------------------------- | ------------------------------------- |
| ![Landing](./readme/demo/Chatting.gif) | ![Landing](./readme/demo/chatbot.gif) |

### Employee Screens (Mobile)

| OnBoarding Screen                              | Login Screen                              |
| ---------------------------------------------- | ----------------------------------------- |
| ![OnBoarding](./readme/demo/onBoardingGif.gif) | ![Profile](./readme/demo/LoginScreen.gif) |

| Home Screen                                  | Users Screen                                  |
| -------------------------------------------- | --------------------------------------------- |
| ![Login](./readme/demo/homeScreenMobile.gif) | ![Users](./readme/demo/UsersScreenMobile.gif) |

| Profile Screen                        | Chat Screen                               |
| ------------------------------------- | ----------------------------------------- |
| ![Home](./readme/demo/ProfileGif.gif) | ![Chat](./readme/demo/ChattingMobile.gif) |

<br><br>

<!-- Prompt Engineering -->
<img src="./readme/title7.svg"/>

### Mastering AI Interaction: Unveiling the Power of Prompt Engineering:

- This project harnesses advanced prompt engineering techniques to optimize AI interactions. Utilizing OpenAI's ChatGPT-3.5 model, we swiftly generate examples based on user-created labels, expediting ML model creation. Seamlessly integrating human-AI collaboration, our approach empowers businesses with real-time, insightful assistance, revolutionizing operations.

  <img src="./readme/demo/ai model 1.png" style="margin-bottom: 20px;" />
  <img src="./readme/demo/ai model 2 .png" style="margin-bottom: 20px;" />

<br><br>

<!-- Unit Testing -->
<img src="./readme/title9.svg"/>

### Precision in Development: Harnessing the Power of Unit Testing:

Unit testing is pivotal at our company, ensuring API reliability and code quality. By rigorously testing individual components, we catch bugs early and fortify our software solutions for seamless user experiences.

<div style="display: flex; align-items: center;">
  <img src="./readme/demo/unitTests.png" style="margin-right: 20px;" />
</div>

<br><br>

<!-- AWS Deployment -->
<img src="./readme/title8.svg"/>

### Efficient AI Deployment: Unleashing the Potential with AWS Integration:

This project utilizes AWS deployment. Next, we'll go through the steps of launching a Node.js Express server on AWS EC2:

The initial step involves creating an AWS account and accessing the AWS Management Console, where you can proceed to set up your virtual server instance using the EC2 service.

Establish a connection to the EC2 instance using PuTTY:

1. **Convert .pem to .ppk Using PuTTYgen:**

   - Use PuTTYgen to convert your .pem key file to a .ppk key file.

2. **Connect Using PuTTY:**

   - Launch PuTTY and enter the public IPv4 address of your EC2 instance.
   - In the credentials section, specify the .ppk key file you generated in the previous step.

3. **Update and Upgrade Packages:**

   - Run the following commands to update and upgrade packages on your EC2 instance:

     ```
     sudo apt update
     sudo apt upgrade
     ```

4. **Install Node.js and NPM:**

   - Use the following command to install Node.js and NPM:
     ```
     sudo apt-get install -y nodejs npm
     ```

5. **Install git and Clone the Repository:**

   - Use the following commands to install git and clone the repository:
     ```
     sudo apt-get install git
     git clone https://github.com/OthmanGh/UNITY-PULSE.git
     cd UNITY-PULSE/backend/
     ```

6. **Create .env File:**

   - Use the following command to create and edit a new .env file:
     ```
     nano .env
     ```
   - Inside the .env file, add your environment variables as shown below:
     ```
     # Add your environment variables:
     MONGODB_URI=your_uri
     PORT=your_port
     JWT_SECRET=your-secret
     OPENAI_API_KEY=your_key
     ```

7. **Install Dependencies:**

   - Run the following command to install the dependencies for your Node.js application:

     ```
     npm install
     ```

8. **Start the Server:**

   - To launch your Node.js Express server, use the following command:
     ```
     npm start
     ```

9. **Fetching From Server:**
   - Below is an example of fetching from the server:
     ![AWS Image](./readme/demo/aws.png)

<br><br>

<!-- How to run -->
<img src="./readme/title10.svg"/>

> To set up Unity Pulse locally, follow these steps:

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Make sure you have Node.js installed. If not, you can download it from the [official website](https://nodejs.org/).
- **npm**: npm should be installed along with Node.js. Verify the installation by running `npm -v` in your terminal.
- **MongoDB**: Ensure MongoDB is installed and running on your local machine or accessible through a cloud service.
- **OpenAI API Key**: Obtain your API key from OpenAI.

## Environment Variables

Create a `.env` file in the backend directory and populate it with the following information:

```plaintext
MONGODB_URI=your_mongodb_uri
PORT=your_port
JWT_SECRET=your_jwt_secret
JWT_EXPIRESIN=your_jwt_expiry_time
CLIENT_ID=915727470406-your_client_id
CLIENT_SECRET=your_client_secret
OPENAI_KEY=your_openai_key
```

# Installation

To set up the project, follow these steps:

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Start the Backend Server**

   - Navigate to the Backend Directory: `cd UINITY-PULSE/backend`
   - Start the Backend Server: `npm start`

3. **Start the Frontend Application**

   - Navigate to the Frontend Directory: `cd UINITY-PULSE/frontend`
     ```bash
     npm start
     npm run dev
     ```

4. **Start the React Native Expo Mobile Application**

   - Navigate to the Mobile Directory: `cd UINITY-PULSE/mobile-directory`

   - Start the Expo server:
     ```bash
     npx expo start
     ```

Feel free to dive in and explore Unity Pulse's features on your local setup !
