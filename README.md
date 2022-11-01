# DOGMATCH README

There are many times I’ve been walking in my neighborhood and I’ve walked past a dog that I would love to invite for a playdate with my pets. However, usually the dog is playing in its yard by itself or I’m too shy to ask the people who are walking the dog. This is where DogMatch comes in! DogMatch allows you to create a profile, add your dogs, and then find other dogs to invite for playdates. You can even request multiple dogs owned by multiple people and have a real party!

##Technologies 

This app uses Ruby on Rails with a PostgreSQL server as the backend. The frontend was built with React, React Router, and Bootstrap. 

### Requirements 
* Node version 16.10.0
* npm version 8.19.2
* React version 18.2.0
* React Router version 6.4.0 
* Ruby version 3.1.2
* Bootstrap 5.2.1

## How to Start

Fork the repository (repo) - navigate here https://github.com/astania/dog-match-backend and click "fork" in the top right corner

Clone the repo - In your terminal type (ensuring to add your github username):  git clone git@github.com:username/dog-match-backend

Open the cloned project in your preferred code editor and open a terminal

CD into the dog-match folder and run npm install --prefix client
then run bundle install
Open a new terminal and run run rails s 
Open a new terminal and run rails db:seed 
Open a new terminal and run npm start --prefix client 

## How to Use

To create a user, click "create account" and fill in your information. If you have filled out each field and your username is unique, you will be automatically logged in once your account is created. If you log out, you can log in again with the username and password that you gave. 

Once you are logged in, you can see the navbar with the following tabs:

Home - displays the homepage 

Find Playmates - lists all the dogs owned by other users. If you see any dogs you like, you can click "add to playdate request form" they will be added to the dog request form. 

Playdate Request Form - If you have selected some dogs from the "Find Playdates" tab, you will be able to select which of your dogs you want to host the playdate, you will be able to write in the date and time and what you would like to do on the playdate. 

My Playdates - You will be able to see all the playdates that your dog(s) have been invited to, and all the playdates you have requested. 

Add Dogs - You can add your dogs here. 

Profile - You can view your profile, edit your profile, log out of your profile and delete your profile here. You can also view all of your dogs and edit or delete them as necessary. 

### Licensing
Copyright (c) 2022 Anna Stania

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

### Contributions
Contributions are greatly appreciated.

If you have a suggestion, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

### Fork the Project
-Create your Feature Branch (git checkout -b feature/AmazingFeature)
- Commit your Changes (git commit -m 'Add some AmazingFeature')
- Push to the Branch (git push origin feature/AmazingFeature)
- Open a Pull Request

## Contact

Anna Stania - annaestania@gmail.com

