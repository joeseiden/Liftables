# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.destroy_all
Article.destroy_all
Image.destroy_all

guest_user = User.create!(username: "barry_bluejeans", password: "password")
grant = User.create!(username: "gbrown", password: "password")

article1 = Article.create!(
              title: "First article",
              description: "This is the first article. \n
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              user_id: guest_user.id)

article2 = Article.create!(
              title: "Second article",
              description: "This is the second article",
              user_id: guest_user.id)

back_squat_article = Article.create!(
title: "How to perform the Barbell Back Squat",
description: "The barbell back squat is one of the most effective movements to train the lower body and posterior chain for strength and size. The barbell back squat should be at the foundation of any athletic training program. It is especially important for powerlifters, for whom it is a competition event, weightlifters and strongman competitors.",
user_id: grant.id
)

back_squat_article_image = Image.new(url: "http://res.cloudinary.com/liftables/image/upload/v1490325594/squat_splash_image.jpg")
back_squat_article_image.imageable = back_squat_article
back_squat_article_image.save!

squat_step1 = Step.create!(
title: "1) Address the bar",
body: "Walk up to the bar and set your grip. Take special attention to the fact that your hands should be evenly placed. You can have either a thumbless or full hand grip.",
order: 1,
article_id: back_squat_article.id
)

squat_step1_image = Image.new(url: "http://res.cloudinary.com/liftables/image/upload/v1490372470/squat_grip_position.jpg")
squat_step1_image.imageable = squat_step1
squat_step1_image.save!

squat_step2 = Step.create!(
title: "2) Move under the bar",
body: "Bring your head under the bar and place the bar on your back.\nIt can be placed either on top of your traps or below them resting on your delts or anywhere in between, but these two positions are the most common.",
order: 2,
article_id: back_squat_article.id
)

squat_step2_image = Image.new(
url: "http://res.cloudinary.com/liftables/image/upload/v1490373034/squat_bar_rack.jpg"
)
squat_step2_image.imageable = squat_step2
squat_step2_image.save!

squat_step2_image2 = Image.new(url: "http://res.cloudinary.com/liftables/image/upload/v1490325786/squat_bar_position.jpg").imageable = squat_step2
squat_step2_image2.save!

squat_step3 = Step.create!(
title: "3) Brace Upper Back",
body: "Tightly grip the bar and pull it down into your back. You should be both retracting and depressing your scapulae. This can be performed by thinking of tightening the lats and trying to touch the points of your shoulder blades together at the middle of your back. Your thoracic spine should be neither extended nor flexed but braced in a neutral position.",
  order: 3,
  article_id: back_squat_article.id
)

squat_step3_image = Image.new(url: "http://res.cloudinary.com/liftables/image/upload/v1490373296/scapula.jpg")
squat_step3_image.imageable = squat_step3
squat_step3_image.save!

squat_step4 = Step.create!(
title: "4) Brace your core",
body: "Pull your ribs down so that you have no extension in the
lumbar spine, but not so much that you have lumbar flexion.
If you think about the pelvis and the rib cage as bowls stacked
on top of eachother, neither of them should be tipped.

Setting your ribs can be eased by exhaling whilst setting them
into position. Once they are set take in a large breath
without changing the position of your ribs. This breath should
be brought into the belly and not the chest.

Once the breath is pulled in you should brace the core
musculature out and away from the spine as if you were trying
to break a belt in 360 degrees.

This is called the valsalva maneuver.",
  order: 4,
  article_id: back_squat_article.id
)

squat_step4_image = Image.new(url: "http://res.cloudinary.com/liftables/image/upload/v1490373719/valsalva.png")
squat_step4_image.imageable = squat_step4
squat_step4_image.save!

squat_step5 = Step.create!(
title: "5) Unrack the bar",
body: "Whilst maintaining all above described muscle tension stand up fully to get the bar out of the rack. This should be a very small movement as the rack should be set just a few inches below where the bars elevation while on your back when you are standing fully erect.",
  order: 5,
  article_id: back_squat_article.id
)

squat_step5_image = Image.new(url: "http://res.cloudinary.com/liftables/image/upload/v1490374371/squat_unrack.jpg")
squat_step5_image.imageable = squat_step5
squat_step5_image.save!


squat_step6 = Step.create!(
title: "6) Walk out",
body: "Take one set back at a time. This process should take maybe 2 to 3 steps at most. These steps should be steady as you do not want any extra movement happening nor do you want to challenge the braced positions you have set for yourself in the earlier steps.",
order: 6,
article_id: back_squat_article.id
)

squat_step6_image = Image.new(url: "http://res.cloudinary.com/liftables/image/upload/v1490374677/walk_out.jpg")
squat_step6_image.imageable = squat_step6
squat_step6_image.save!

squat_step7 = Step.create!(
title: "7) Setting your feet",
body: "At the end of your walkout you should be in your squatting position. This position should have you balanced evenly over the ball of your big and pinky toe as well as your heel. This position varies widely between individuals with some placing their feet at hip width and other standing in very wide stances. As a rule of thumb you shouldn't go narrower than hip width or so wide that you are in a position where your shins are angled inward towards your body at the bottom of the squat.",
order: 7,
article_id: back_squat_article.id
)

squat_step7_image = Image.new(url: "http://res.cloudinary.com/liftables/image/upload/v1490375085/squat_set_feet.jpg")
squat_step7_image.imageable = squat_step7
squat_step7_image.save!

squat_step8 = Step.create!(
title: "8) Brace hips",
body: "Tighten the glutes and externally rotate your hips. While doing this straighten the knees.",
order: 8,
article_id: back_squat_article.id
)

squat_step8_image = Image.new(url: "http://res.cloudinary.com/liftables/image/upload/v1490375343/externally_rotate.jpg")
squat_step8_image.imageable = squat_step8
squat_step8_image.save!

squat_step9 = Step.create!(
title: "9) Begin the squat",
body: "Whilst maintaining all the above described muscular tension unhinge the knees and hips at the same time. The particular anatomy of the individual will dictate the rate of flexion in these joints but during the course of the movement the center of gravity of the system formed by the individual and the bar should always remain over the middle of the feet.

For some this will mean that they are very upright and for others this will mean they are fairly bent forward. As long as the above described body positions are maintained (the various bracing patterns described in the above steps) though these will not present any increased chance of injury.",
order: 9,
article_id: back_squat_article.id
)

squat_step9_image = Image.new(url: "http://res.cloudinary.com/liftables/image/upload/v1490375634/squat_form.jpg")
squat_step9_image.imageable = squat_step9
squat_step9_image.save!

squat_step10 = Step.create!(
  title: "10) Bottom of the squat",
  body: "At the bottom of the squat the flexion of the knee and hip will reverse and become extension. The moment you decide to do this can be based a few different factors, be they either for competition or muscle building goals. Generally the highest one wants to reverse a squat would be once the hip has gone lower than the knee. The low end of the range of motion would be defined by the hamstring coming into contact with the calf and preventing any further downward motion.

During the course of this reversal all positions should be maintained. In particular one does not want to allow ones knees to move backwards suddenly during the reversal. While the knees will slowly move backwards as you stand up with the squat this is the result of knee extension rather than a sudden shift back onto ones heels and into ones hips which you want to avoid.

You want to avoid this because of the disruption of ones balance and the unproductive extension of the knee joint. You cannot regain the productive extension of a joint during the course of a lift and will have to make up that work with other muscles elsewhere in the body. This work will be made more difficult  as you have voided some tissues ability to contribute to the movement.",
  order: 10,
  article_id: back_squat_article.id
)

squat_step10_image = Image.new(
url: "http://res.cloudinary.com/liftables/image/upload/v1490376188/baby_squat_form.jpg"
)
squat_step10_image.imageable = squat_step10
squat_step10_image.save!

squat_step11 = Step.create!(
  title: "11) Completion of the squat",
  body: "The squat is complete when you are standing erect with your knees straight.",
  order: 11,
  article_id: back_squat_article.id
)

squat_step11_image = Image.new(url: "http://res.cloudinary.com/liftables/image/upload/v1490376888/squat_complete.jpg")
squat_step11_image.imageable = squat_step11
squat_step11_image.save!

squat_step12 = Step.create!(
title: "12) Rerack the bar",
body: "Triumphantly walk the bar into the rack as aggressively as you can. Low key try and tip the rack over. Salt bae a bunch of chalk onto the bar before walking away.",
order: 12,
article_id: back_squat_article.id
)

squat_step12_image = Image.new(url: "http://res.cloudinary.com/liftables/image/upload/v1490377164/salt_bae.jpg")
squat_step12_image.imageable = squat_step12
squat_step12_image.save!

article1_image = Image.new(
url: "https://rlv.zcache.com/table_number_1_statuette-r483eb68376aa458cb281c4762fb0cd47_x7saw_8byvr_324.jpg"
)
article1_image.imageable = article1
article1_image.save!

article1_image2 = Image.new(
url: "http://dinoxp.com/wp-content/uploads/2016/02/dinort.png"
)
article1_image2.imageable = article1
article1_image2.save!

article1_step1 = Step.create!(
title: "Step 1",
body: "open the door",
order: 1,
article_id: article1.id
)
article1_step2 = Step.create!(
title: "Step 2",
body: "get on the floor",
order: 2,
article_id: article1.id
)
article1_step3 = Step.create!(
title: "Step 3",
body: "everybody walk the dinosaur",
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

comment1 = Comment.create!(
content: "This will help me achieve my dream of having horse legs!",
user_id: guest_user.id,
article_id: back_squat_article.id
)
