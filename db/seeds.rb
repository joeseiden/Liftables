User.destroy_all

grant = User.create!(username: "gbrown", password: "password")
joe = User.create!(username: "jseiden", password: "davis2014")
barry = User.create!(username: "barry_bluejeans", password: "password")


squat_art = Article.create!(
  title: "How to perform the Barbell Back Squat",
  description: "The barbell back squat is one of the most effective movements to train the lower body and posterior chain for strength and size. The barbell back squat should be at the foundation of any athletic training program. It is especially important for powerlifters, for whom it is a competition event, weightlifters and strongman competitors.",
  user_id: grant.id,
  published: true)
bench_art = Article.create!(
  title: "How to perform the Barbell Bench Press ",
  description: "  The barbell bench press is one of the three competition movements in the sport of powerlifting and is also one of the best indicators of overall upper body power. It is commonly used by bodybuilders, as well, to build the chest, shoulders and triceps muscles.\n\n  Effective bench press form is more technical than it would initially seem. In this article, we will walk through how to perform the movement optimally.",
  user_id: joe.id,
  published: true)
sumo_art = Article.create!(
  title: "How to perform the Sumo Deadlift",
  description: "The sumo deadlift is a style of deadlifting popular among many powerlifters. Probably its most famous practitioner is Ed Coan, considered the greatest powerlifter of all time, whose record of 901lbs still stands after almost 30 years. More recently, Dan Green has also been known for being a very strong sumo deadlifter.\n\n  The sumo deadlift is not optimal for everyone, but if your hip anatomy and flexibility allows it, it can let you deadlift more than you would otherwise.", user_id: joe.id,
  published: true)
intro_art = Article.create!(
  title: "How to use Liftables",
  description: "Hi there! Welcome to Liftables, a technical recreation of instructables.com with a focus on fitness and weight lifting. It is built using React/Redux on the front end, Ruby on Rails on the backend and a Postgres database to store everything.\n\nIn this article, I'll be giving you an overview on how to use this site and some of my design decisions.",
  user_id: joe.id,
  published: true)
intro_step1 = Step.create!(
  title: "So you've made it this far",
  body: "If you're reading this, you've figured out how to read articles, so I'll talk about how the articles are constructed and stored.\n\nIn the database, articles contain columns for the title, description, an integer index linking them to their author as well as a boolean field denoting whether or not the article is published. Unless explicitly published by clicking the 'Publish' button in the edit form, the article will default to being unpublished and will only be visible to the author under 'Drafts' on their 'My Articles' page. You can also view all of a specific user's published articles by clicking on their name in the title or the 'More from this user' pane.",
  article_id: intro_art.id,
  order: 1
)
intro_step2 = Step.create!(
  title: "The Steps",
  body: "Steps are stored in their own table, containing their title, body text, article_id and an integer denoting their order in the article. I did this because if a step is edited after the fact, they will be in a different order than they originally were when return from the database. By automatically saving their order by looking at the immediately previous step's order upon their creation, I can preserve the order of the steps regardless of when they were updated last. The steps are rendered in this preserved order by using a custom sorting algorithm that sorts them by their order value.\n\nAnother neat trick I was able to do with the order value is auto generate new steps' titles as 'Step X', where X is their order.",
  article_id: intro_art.id,
  order: 2
)
intro_step3 = Step.create!(
  title: "The Images",
  body: "Articles and steps also have their own associated images. I store all images in a single table and use a polymorphic association to link the images to the correct article or step through the type and id of what they're attached to. All image hosting is done through Cloudinary, and upon uploading the image file via the dropzone area, the file is uploaded to the Cloudinary server, that url is then returned and saved to the database, then rendered on the page automatically.",
  article_id: intro_art.id,
  order: 3
)
intro_step4 = Step.create!(
  title: "Creating and Editing Articles and Steps",
  body: "To create a new article, make sure you are logged in, then simply click the 'New Article' button on the header and fill out the form in the modal that pops up. Once you've done that, you will be redirected to a more detailed article edit form, where you can make further edits to the title and description as well as upload or remove images from the article. Of these images, the first one will be used as the thumbnail image in the articles index item.\n\nTo add steps, click the 'Add Step' button at the bottom of the form. This will create a step that you can then edit in its own form by clicking its 'Edit' link.",
  article_id: intro_art.id,
  order: 4
)
intro_step5 = Step.create!(
  title: "Comments",
  body: "Users can also comment on articles. Leaving a comment is fairly straight forward: just type what you want to say into the text box, then click 'Add Comment'. This saves the comment to the database, including the article id and id of the user who left it. Comments can also be deleted, but only by the author of the article or the author of the comment.",
  article_id: intro_art.id,
  order: 5
)
intro_step6 = Step.create!(
  title: "Try it out!",
  body: "Now that I've given you a rough overview of the site, create a new account or click the 'Demo' page to use a pre-made one, and start exploring! \n\nIf you would like to get in contact with me, I can be reached by email at joe.seiden214@gmail.com or on LinkedIn at linkedin.com/in/joe-seiden.",
  article_id: intro_art.id,
  order: 6
)
Comment.create!([
  { content: "This will help me achieve my dream of having horse legs!",
    user_id: barry.id,
    article_id: squat_art.id },
  { content: "Thanks for the writeup! I had no idea there was so much to think about with the bench press",
    user_id: barry.id,
    article_id: bench_art.id },
  { content: "Oh man, I don't know if my hips can do that. I guess it's time to start stretching more!",
    user_id: barry.id,
    article_id: sumo_art.id },
  { content: "I commented on this article!",
    user_id: joe.id,
    article_id: intro_art.id },
  { content: "So did I!",
    user_id: grant.id,
    article_id: intro_art.id },
  { content: "I did too. If you log in as the demo user, you'll be able to see the delete button in the top right corner.",
    user_id: barry.id,
    article_id: intro_art.id }
])

sumo_step_1 = Step.create!(
  title: "Set your Stance",
  body: "  Your stance should be approximately twice shoulder width. Place your feet so that your shins are lightly touching the bar, your feet are at a roughly 45 degree angle and your instep is directly under the bar. Your knees and hips should be externally rotated and open. You should feel stable and balanced in this position, so do not move on until you have found a comfortable position.",
  order: 1,
  article_id: sumo_art.id)
sumo_step_2 = Step.create!(
  title: "Set your Grip",
  body: "  Keeping your hips and knees externally rotated. Lower yourself until you can grasp the bar in both hands. Ideally, your descent will be mostly vertical, but your hips will have to move backwards slightly.\n\n  Your grip should be directly below your shoulders. Grasp the bar using an over/under grip. This prevents the bar from rolling out of your grip as the weights get heavier.",
  order: 2,
  article_id: sumo_art.id)
sumo_step_3 = Step.create!(
  title: "Start the Pull",
  body: "  After your stance and grip are set, take a deep breath and brace your core. Once you feel tight, pull your chest through to open up your hips and bring them as close as you can towards the bar. As you do this, pull against the bar to pull out the slack and make sure the bar breaks the floor smoothly and doesn't pull you out of position.\n\n  Tighten your back muslces and pull backwards at a slight angle as the bar breaks the floor. The bar is in front of you so you will have to compensate.\n\n  Focus on spreading the floor with your feet as you push with your legs and hinge at your hips to pull the bar up to your knees. Once the bar passes your knees, you will transition into the lockout phase.",
  order: 3,
  article_id: sumo_art.id)
sumo_step_4 = Step.create!(
  title: "Lockout",
  body: "  Once the bar passes your knees, lock them out and pull your hips through by flexing your butt as you reach the end of the lift.\n\n  The lift is over when your knees and hips are locked and you are standing, balanced and in control of the bar. Your body will be at a slight angle to compensate for the bar, but you should otherwise be standing straight with your shoulders hips and knees forming one line.\n\n  Release the breath that you've been holding throughout the lifting once you get to lockout.",
  order: 4,
  article_id: sumo_art.id)
sumo_step_5 = Step.create!(
  title: "Celebrate!",
  body: "  Reverse the motion, set the bar down and celebrate!",
  order: 5,
  article_id: sumo_art.id)

squat_step_1 = Step.create!(
  title: "1) Address the bar",
  body: "Walk up to the bar and set your grip. Take special attention to the fact that your hands should be evenly placed. You can have either a thumbless or full hand grip.",
  order: 1,
  article_id: squat_art.id)
squat_step_2 = Step.create!(
  title: "2) Move under the bar",
  body: "Bring your head under the bar and place the bar on your back.\nIt can be placed either on top of your traps or below them resting on your delts or anywhere in between, but these two positions are the most common.",
  order: 2,
  article_id: squat_art.id)
squat_step_3 = Step.create!(
  title: "3) Brace Upper Back",
  body: "Tightly grip the bar and pull it down into your back. You should be both retracting and depressing your scapulae. This can be performed by thinking of tightening the lats and trying to touch the points of your shoulder blades together at the middle of your back. Your thoracic spine should be neither extended nor flexed but braced in a neutral position.",
  order: 3,
  article_id: squat_art.id)
squat_step_4 = Step.create!(
  title: "4) Brace your core",
  body: "Pull your ribs down so that you have no extension in the\nlumbar spine, but not so much that you have lumbar flexion.\nIf you think about the pelvis and the rib cage as bowls stacked\non top of eachother, neither of them should be tipped.\n\nSetting your ribs can be eased by exhaling whilst setting them\ninto position. Once they are set take in a large breath\nwithout changing the position of your ribs. This breath should\nbe brought into the belly and not the chest.\n\nOnce the breath is pulled in you should brace the core\nmusculature out and away from the spine as if you were trying\nto break a belt in 360 degrees.\n\nThis is called the valsalva maneuver.",
  order: 4,
  article_id: squat_art.id)
squat_step_5 = Step.create!(
  title: "5) Unrack the bar",
  body: "Whilst maintaining all above described muscle tension stand up fully to get the bar out of the rack. This should be a very small movement as the rack should be set just a few inches below where the bars elevation while on your back when you are standing fully erect.",
  order: 5,
  article_id: squat_art.id)
squat_step_6 = Step.create!(
  title: "6) Walk out",
  body: "Take one set back at a time. This process should take maybe 2 to 3 steps at most. These steps should be steady as you do not want any extra movement happening nor do you want to challenge the braced positions you have set for yourself in the earlier steps.",
  order: 6,
  article_id: squat_art.id)
squat_step_7 = Step.create!(
  title: "7) Setting your feet",
  body: "At the end of your walkout you should be in your squatting position. This position should have you balanced evenly over the ball of your big and pinky toe as well as your heel. This position varies widely between individuals with some placing their feet at hip width and other standing in very wide stances. As a rule of thumb you shouldn't go narrower than hip width or so wide that you are in a position where your shins are angled inward towards your body at the bottom of the squat.",
  order: 7,
  article_id: squat_art.id)
squat_step_8 = Step.create!(
  title: "8) Brace hips",
  body: "Tighten the glutes and externally rotate your hips. While doing this straighten the knees.",
  order: 8,
  article_id: squat_art.id)
squat_step_9 = Step.create!(
  title: "9) Begin the squat",
  body: "Whilst maintaining all the above described muscular tension unhinge the knees and hips at the same time. The particular anatomy of the individual will dictate the rate of flexion in these joints but during the course of the movement the center of gravity of the system formed by the individual and the bar should always remain over the middle of the feet.\n\nFor some this will mean that they are very upright and for others this will mean they are fairly bent forward. As long as the above described body positions are maintained (the various bracing patterns described in the above steps) though these will not present any increased chance of injury.",
  order: 9,
  article_id: squat_art.id)
squat_step_10 = Step.create!(
  title: "10) Bottom of the squat",
  body: "At the bottom of the squat the flexion of the knee and hip will reverse and become extension. The moment you decide to do this can be based a few different factors, be they either for competition or muscle building goals. Generally the highest one wants to reverse a squat would be once the hip has gone lower than the knee. The low end of the range of motion would be defined by the hamstring coming into contact with the calf and preventing any further downward motion.\n\nDuring the course of this reversal all positions should be maintained. In particular one does not want to allow ones knees to move backwards suddenly during the reversal. While the knees will slowly move backwards as you stand up with the squat this is the result of knee extension rather than a sudden shift back onto ones heels and into ones hips which you want to avoid.\n\nYou want to avoid this because of the disruption of ones balance and the unproductive extension of the knee joint. You cannot regain the productive extension of a joint during the course of a lift and will have to make up that work with other muscles elsewhere in the body. This work will be made more difficult  as you have voided some tissues ability to contribute to the movement.",
  order: 10,
  article_id: squat_art.id)
squat_step_11 = Step.create!(
  title: "11) Completion of the squat",
  body: "The squat is complete when you are standing erect with your knees straight.",
  order: 11,
  article_id: squat_art.id)
squat_step_12 = Step.create!(
  title: "12) Rerack the bar",
  body: "Triumphantly walk the bar into the rack as aggressively as you can. Low key try and tip the rack over. Salt bae a bunch of chalk onto the bar before walking away.",
  order: 12,
  article_id: squat_art.id)

bench_step_1 = Step.create!(
  title: "Setup",
  body: "  The setup is one, if not the most important part of performing the bench press. To get the most power into the bar, we want to use our entire body. To do that, we employ an arch in our back that lets us put our shoulders and chest in a more mechanically advantageous position as well as lets us use the power in our legs and hips by giving us something to push against.\n\n  Create your arch by pulling your shoulder blades underneath you and bracing your traps against the bench while squeezing your scapulae together. This is what we will be pushing against when we engage our legs. It is helpful to grab the bar or the bench during this step.\n\n  Then, set your feet underneath you and push your hips as close as you can to your shoulders and place your feet below or behind your knees. You should feel tension through your trunk and legs, but it should not be painful.\n\n  This position allows us to store mechanical power like a drawn bow or a coiled spring.",
  order: 1,
  article_id: bench_art.id)
bench_step_2 = Step.create!(
  title: "Set Your Grip and Unrack",
  body: "  Set your grip where it feels most comfortable. In general, a grip where your hand is in contact with the rings on either side is ideal. A narrower grip puts more emphasis on the triceps and is a longer movement, while a wider grip is a shorter movement but is harder on the shoulders and demands more of the chest.\n\n  Ask a friend to help you un-rack the bar, as it is easy to lose the arch we worked so hard for during this step. Your friend also plays the role of spotter and will help you should you need help during the lift.\n\n  After you have taken the bar off the rack, hold it directly over your shoulders and lock your elbows. You should be able to feel the bar balance as it settles in the position. If you feel like the bar is falling towards or away from the rack, you are not balanced.\n",
  order: 2,
  article_id: bench_art.id)
bench_step_3 = Step.create!(
  title: "The Descent",
  body: "  Keeping your wrists and elbows aligned under the bar, lower the bar in a gentle arc to rest just below your sternum. This movement should be controlled throughout and at no point should you be \"dropping\" the bar or disengaging your muscles. It may help to think about bringing your chest up to meet the bar as you lower it.\n\n  As you practice more, try to feel the weight settling into your triceps and lat muscles as you control the descent of the bar.\n\n  When the bar reaches your chest, receive and retain the energy into your legs.This is important for producing as much power as possible, as we will be using this energy to reverse the direction of the bar as we press it up.",
  order: 3,
  article_id: bench_art.id)
bench_step_4 = Step.create!(
  title: "Press!",
  body: "  Simultaneously push with your legs into your shoulders and push the bar off your chest. Optimally, the path of the bar as it ascends will be the mirror of its path during the descent. Press the bar back towards the rack until it is over your shoulders and you can press the bar straight up. Keep trying to accelerate the bar until both your elbows have locked.\n",
  order: 4,
  article_id: bench_art.id)
bench_step_5 = Step.create!(title: "Finish your set",
  body: "  Repeat the movement as many times as is prescribed, then have your friend help you put the bar back into the rack when you are done.\n\n  Release your arch, stand up and celebrate! You've successfully done a bench press!",
  order: 5,
  article_id: bench_art.id)

Image.create!([
  {url: "https://res.cloudinary.com/liftables/image/upload/v1493228581/bench_press_c4v7if.jpg", imageable_id: bench_art.id, imageable_type: "Article"},
  {url: "https://res.cloudinary.com/liftables/image/upload/v1493229584/bench-setup_rfxzrg.jpg", imageable_id: bench_step_1.id, imageable_type: "Step"},
  {url: "https://res.cloudinary.com/liftables/image/upload/v1493231546/emily_arch_ltdwhj.jpg", imageable_id: bench_step_1.id, imageable_type: "Step"},
  {url: "https://res.cloudinary.com/liftables/image/upload/v1493231551/joe_arch_bqe4y0.jpg", imageable_id: bench_step_1.id, imageable_type: "Step"},
  {url: "https://res.cloudinary.com/liftables/image/upload/v1493231590/unrack_fe63yo.jpg", imageable_id: bench_step_2.id, imageable_type: "Step"},
  {url: "https://res.cloudinary.com/liftables/image/upload/v1493231694/bench_press_jquewd.jpg", imageable_id: bench_step_3.id, imageable_type: "Step"},
  {url: "https://res.cloudinary.com/liftables/image/upload/v1493231745/bar_path_tprail.jpg", imageable_id: bench_step_4.id, imageable_type: "Step"},
  {url: "https://res.cloudinary.com/liftables/image/upload/v1493231774/celebrate_atq9jn.jpg", imageable_id: bench_step_5.id, imageable_type: "Step"},
  {url: "https://res.cloudinary.com/liftables/image/upload/v1493232156/coan_sumo_d3jrel.jpg", imageable_id: sumo_art.id, imageable_type: "Article"},
  {url: "https://res.cloudinary.com/liftables/image/upload/v1493232160/dan-green-deadlift_nwcxiz.jpg", imageable_id: sumo_art.id, imageable_type: "Article"},
  {url: "https://res.cloudinary.com/liftables/image/upload/v1493232235/dan-sumo-setup_hw1zpi.jpg", imageable_id: sumo_step_1.id, imageable_type: "Step"},
  {url: "https://res.cloudinary.com/liftables/image/upload/v1493232250/sumo_approach_c1fezc.jpg", imageable_id: sumo_step_1.id, imageable_type: "Step"},
  {url: "https://res.cloudinary.com/liftables/image/upload/v1493232326/sumo_grip_h3s1z8.jpg", imageable_id: sumo_step_2.id, imageable_type: "Step"},
  {url: "https://res.cloudinary.com/liftables/image/upload/v1493232649/sumo_start_pull_blrpym.jpg", imageable_id: sumo_step_3.id, imageable_type: "Step"},
  {url: "https://res.cloudinary.com/liftables/image/upload/v1493232656/sumo_first_half_dpd2gz.jpg", imageable_id: sumo_step_3.id, imageable_type: "Step"},
  {url: "https://res.cloudinary.com/liftables/image/upload/v1493232693/IMG_2911_l91her.png", imageable_id: sumo_step_4.id, imageable_type: "Step"},
  {url: "https://res.cloudinary.com/liftables/image/upload/v1493232777/dan-lockout_mofefh.jpg", imageable_id: sumo_step_4.id, imageable_type: "Step"},
  {url: "http://res.cloudinary.com/liftables/image/upload/v1490325594/squat_splash_image.jpg", imageable_id: squat_art.id, imageable_type: "Article"},
  {url: "http://res.cloudinary.com/liftables/image/upload/v1490372470/squat_grip_position.jpg", imageable_id: squat_step_1.id, imageable_type: "Step"},
  {url: "http://res.cloudinary.com/liftables/image/upload/v1490373034/squat_bar_rack.jpg", imageable_id: squat_step_2.id, imageable_type: "Step"},
  {url: "http://res.cloudinary.com/liftables/image/upload/v1490373296/scapula.jpg", imageable_id: squat_step_3.id, imageable_type: "Step"},
  {url: "http://res.cloudinary.com/liftables/image/upload/v1490373719/valsalva.png", imageable_id: squat_step_4.id, imageable_type: "Step"},
  {url: "http://res.cloudinary.com/liftables/image/upload/v1490374371/squat_unrack.jpg", imageable_id: squat_step_5.id, imageable_type: "Step"},
  {url: "http://res.cloudinary.com/liftables/image/upload/v1490374677/walk_out.jpg", imageable_id: squat_step_6.id, imageable_type: "Step"},
  {url: "http://res.cloudinary.com/liftables/image/upload/v1490375085/squat_set_feet.jpg", imageable_id: squat_step_7.id, imageable_type: "Step"},
  {url: "http://res.cloudinary.com/liftables/image/upload/v1490375343/externally_rotate.jpg", imageable_id: squat_step_8.id, imageable_type: "Step"},
  {url: "http://res.cloudinary.com/liftables/image/upload/v1490375634/squat_form.jpg", imageable_id: squat_step_9.id, imageable_type: "Step"},
  {url: "http://res.cloudinary.com/liftables/image/upload/v1490376188/baby_squat_form.jpg", imageable_id: squat_step_10.id, imageable_type: "Step"},
  {url: "http://res.cloudinary.com/liftables/image/upload/v1490376888/squat_complete.jpg", imageable_id: squat_step_11.id, imageable_type: "Step"},
  {url: "http://res.cloudinary.com/liftables/image/upload/v1490377164/salt_bae.jpg", imageable_id: squat_step_12.id, imageable_type: "Step"},
  {url: "http://res.cloudinary.com/liftables/image/upload/v1495174020/Screen_Shot_2017-05-18_at_11.04.16_PM_rle5fb.png", imageable_id: intro_art.id, imageable_type: "Article"}
])
