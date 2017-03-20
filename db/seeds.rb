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

article1_step1 = Step.create!(
title: 'Step 1',
body: 'open the door',
order: 1,
article_id: article1.id
)
article1_step2 = Step.create!(
title: 'Step 2',
body: 'get on the floor',
order: 2,
article_id: article1.id
)
article1_step3 = Step.create!(
title: 'Step 3',
body: 'everybody walk the dinosaur',
order: 3,
article_id: article1.id
)

step1_image = Image.new(
url: "http://lda.lowes.com/is/image/Lowes/WND_door_4COL_steel-entry-doors?$JPEG-HQ$&wid=234"
)
step1_image.imageable = article1_step1
step1_image.save!

step2_image = Image.new(
url: "https://www.lowes.com/projects/images/thumbnails/grout-bg-beige-tile-floor-TH.jpg"
)
step2_image.imageable = article1_step2
step2_image.save!

step3_image = Image.new(
url: "https://i.ytimg.com/vi/hM-kd_IC9Uc/hqdefault.jpg"
)
step3_image.imageable = article1_step3
step3_image.save!
