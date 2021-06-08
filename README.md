## Project Goal
Create a dynamic NextJS image/blog website.  
Warning: This site is ugly for now, as the current priority is to test and link all back-end using NextJS

## Try this project  
You can already pull this repo and try it yourself with your own database and cloudinary account.  
For this, you will need to provide the following local variables in the `.env.local` file at the root of the project:
- `CLOUD_NAME` is your Cloudinary cloud name  
- `PRESET` is your Cloudinary upload preset name (must be unsigned mode)  
- `DB_LINK` is your MongoDB connection string  
Disclaimer: Both `CLOUD_NAME` and `PRESET` are used on client-side at the moment.  

## Stack
- NextJS Framework / ReactJS
- MongoDB (using Mongoose) to store all posts data including image *URL*
- Cloudinary widget to host the images and use its various transformation tools
- React-Bootstrap

## Current WIP 
- Need to implement frontpage dynamically pulling every post from MongoDB and displaying them.
- Good looking, responsive front-page
- TBD: Layout component  

##     
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
