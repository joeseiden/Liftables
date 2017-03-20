# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Article.destroy_all
Image.destroy_all

guest_user = User.create!(username: "barry_bluejeans", password: "password")

article1 = Article.create!(
              title: 'First article',
              description: 'This is the first article',
              user_id: guest_user.id)

article2 = Article.create!(
              title: 'Second article',
              description: 'This is the second article',
              user_id: guest_user.id)

article1_image = Image.new(
url: "https://rlv.zcache.com/table_number_1_statuette-r483eb68376aa458cb281c4762fb0cd47_x7saw_8byvr_324.jpg"
)
article1_image.imageable = article1
article1_image.save!

article2_image = Image.new(
url: "http://www.drodd.com/images15/number2-13.jpeg"
)
article2_image.imageable = article2
article2_image.save!
