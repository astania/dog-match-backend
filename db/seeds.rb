# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding!"

user1 = User.create(username: "Anna", password: "Anna", profile_pic: "https://i.imgur.com/RpSCrVo.jpeg", about_me: "An outgoing and super friendly dog lover!", first_name: "Anna", last_name: "Stania")
user2 = User.create(username: "Jonas", password: "Jonas", profile_pic: "https://i.imgur.com/FB3kTzs.gif", about_me: "My dogs are so energetic! Let's make sure they actually fall asleep tonight", first_name: "Jonas", last_name: "Stania")
user3 = User.create(username: "Debbie", password: "Debbie", profile_pic: "https://i.imgur.com/Xj1n3af.jpeg", about_me: "I only like tiny dogs, so please do not try to set up a playdate if you have a big dog", first_name: "Debbie", last_name: "Reynolds")
dog1 = Dog.create(name: "Henry", breed: "German Pointer", about_me: "I'm very nervous and I don't like storms", user_id: 1, profile_pic: "https://i.imgur.com/ngCgXG8.jpeg" )
dog2 = Dog.create(name: "Bobby", breed: "Gremlin", about_me: "I like short hikes and long cuddles on the couch", user_id: 3, profile_pic: "https://i.imgur.com/oMdVph0b.jpg" )
dog3 = Dog.create(name: "Buck", breed: "Lab", about_me: "If I see a squirrel, I'm going to freak out", user_id: 2, profile_pic: "https://i.imgur.com/4zSAWJ5b.jpg" )
dog4 = Dog.create(name: "Snowy", breed: "Golden Retriever", about_me: "Let's play ball", user_id: 2, profile_pic: "https://i.imgur.com/XgbZdeAb.jpg" )
dog5 = Dog.create(name: "Boon", breed: "Mutt", about_me: "a real life cryptid", user_id: 1, profile_pic: "https://i.imgur.com/H981AN7b.jpg" )
dog6 = Dog.create(name: "June", breed: "Chihuahua", about_me: "C.R.E.A.M", user_id: 3, profile_pic: "https://i.imgur.com/gtWsPu9b.jpg" )
date1 = Playdate.create(date: "Saturday, October 6", time: "11:00 am", notes: "let's play fetch", dog_id: 1)
date2 = Playdate.create(date: "Tuesday, November 5", time: "5:30 pm", notes: "let's go to the park", dog_id: 5)
date3 = Playdate.create(date: "Tuesday, November 22", time: "9:30 am", notes: "let's take a walk", dog_id: 6)
PDRP1 = PlaydateRequestedDog.create(playdate_id: 1, dog_id: 2)
PDRP2 = PlaydateRequestedDog.create(playdate_id: 2, dog_id: 4)
PDRP3 = PlaydateRequestedDog.create(playdate_id: 3, dog_id: 1)
# Playdate.new(date: "Tuesday, November 22", time: "9:30 am", notes: "let's take a walk", dog_id: 6)

puts "Done seeding!"