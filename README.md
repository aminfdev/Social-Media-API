### Social Media API 

This is a simple RESTful API for a social media platform. It allows users to perform various actions, such as creating posts, updating and deleting posts, and liking and commenting on other users' posts.

#### Implemented Features

* Registering into the system
* Login and Logout
* Authentication and Validation
* Create, Read, Update, and Delete the Posts
* Each post can be updated and deleted only by its author
* Liking and Commenting on other users posts

#### Technologies used to develop

* Node.js
* Express.js
* TypeScript
* MySQL
* Express-validator
* JWT
* Bcrypt
* Sequelize
* Sequelize-cli
* ts-node
* uuid

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- MySQL
- TypeScript

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/aminfdev/social-media-api.git
   ```

2. Install dependencies:

   ```bash
   cd social-media-api
   npm install
   ```

3. Set up environment variables:

Create a .env file in the root directory with the following content:
 
   ```bash
   DB_USERNAME=your_username_to_access_database
   DB_PASSWORD=your_password_to_access_database
   DB_NAME=social_media_db
   JWT_SECRET=wf9y58wh4w45x97w4h5ohw4s
   PORT=3000
   ```

4. Start the Server:

   ```bash
   npm start
   ```

### Usage

Once the application is running, you can access the library interface in your web browser.

### API Endpoints

 * POST /api/auth/register: Register a new user.
 * POST /api/auth/login: Log in a user and receive an authentication token.
 * GET /api/users/:userId: Get a specific user's profile
 * GET /api/posts: Get a list of all posts.
 * GET /api/posts/:postId: Get details of a specific post.
 * GET /api/posts/by-user-id/:userId: Get a specific user's posts.
 * POST /api/posts: Create a new post.
 * PUT /api/posts/:postId: Update a post.
 * DELETE /api/posts/:postId: Delete a post.
 * POST /api/likes/by-post-id/:postId: Like a post.
 * GET /api/comments/by-post-id/:postId: Get comments of a specific post
 * POST /api/comments/by-post-id/:postId: Add a comment to a post.
 * DELETE /api/comments/:postId: Delete a comment.

For more details on request and response formats, refer to the source code and documentation.
