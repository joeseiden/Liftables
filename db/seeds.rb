# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#guest_user
User.destroy_all
Article.destroy_all

guest_user = User.create!(username: "barry_bluejeans", password: "password");

article1 = Article.create!(
              title: 'First article',
              description: 'This is the first article',
              image_url: 'http://www.drodd.com/images15/number1-7.jpg',
              user_id: guest_user.id)
article2 = Article.create!(
              title: 'Second article',
              description: 'This is the second article',
              image_url: 'http://www.drodd.com/images15/number2-23.jpg',
              user_id: guest_user.id)
