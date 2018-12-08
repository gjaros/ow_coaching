require 'faker'
#84 OWL pro player tags.
owl_tags = [
  'Agilities', 'AimGod', 'aKm', 'Anamo', 'Architect', 'Arhan', 'Ark', 'aWesomeGuy', 'BABYBAY', 'Bani', 'Bdosin', 'BigGoose', 'birdring', 'Bischu', 'Boink', 'Boombox', 'Bunny', 'Carpe', 'Choilhyobin', 'Closer', 'Coolmatt', 'Custa', 'Diya', 'EFFECT', 'Eqo', 'Fate', 'Fearless', 'Fissure', 'FLETA', 'fragi', 'Fury', 'Gamsu', 'Geguri', 'Gesture', 'HarryHook', 'Hotba', 'Hydration', 'Izayaki', 'Jake', 'Jjonak', 'Kariv', 'Kellex', 'KSF', 'KuKi', 'Libero', 'LiNkzr', 'Mano', 'Meko', 'Mickie', 'Moth', 'Muma', 'Munchkin', 'Neko', 'Neptuno', 'Nevix', 'NotE', 'NUS', 'OGE', 'Pine', 'Poko', 'Profit', 'Rawkus', 'ryujehong', 'SADO', 'Saebyeolbe', 'Sayaplayer', 'Shaz', 'sinatraa', 'sleepy', 'Smurf', 'Snillo', 'Soon', 'Space', 'SPREE', 'STRIKER', 'super', 'Surefour', 'Taimou', 'tobi', 'TviQ', 'Unkoe', 'Void', 'XepheR', 'ZUNBA'
]
#
# 10.times do |i|
#   user = User.create!(
#     email: Faker::Internet.free_email,
#     password: 'password',
#     password_confirmation: 'password'
#   )
#   profile = Profile.create!(
#     user_id: user.id,
#     platform: rand(0..2),
#     region: rand(0..1),
#     tag: owl_tags[i],
#     sr: rand(3000..5000),
#     reputation: rand(-100..100),
#     roles: ['tank', 'support', 'damage'].sample(rand(1..3))
#   )
# end

# Profile.all.each do |profile|
#   review = Review.create!(
#     profile_id: profile.id,
#     post_id: 1,
#     summary: Faker::Lorem.paragraph_by_chars(rand(175..300), false),
#     rating: rand(-100..100),
#     title: Faker::Lorem.sentence
#   )
#   rand(5..13).times do
#     tip = Tip.create!(
#       review_id: review.id,
#       timestamp: rand(1..1800),
#       comment: Faker::Lorem.paragraph_by_chars(rand(75..300), false),
#       helpfulness: [rand(1..100), rand(1..100)],
#       tags: Faker::Lorem.words(rand(0..9)).delete_if { |tag| tag.length < 3 }
#     )
#   end
# end

# create users and a profile for each user
owl_tags.length.times do |i|
  user = User.create!(
    email: Faker::Internet.free_email,
    password: 'password',
    password_confirmation: 'password'
  )
  profile = Profile.create!(
    user_id: user.id,
    platform: rand(0..2),
    region: rand(0..1),
    tag: owl_tags[i],
    sr: rand(1..5000),
    reputation: rand(-100..100),
    roles: ['tank', 'support', 'damage'].sample(rand(1..3))
  )
  # each profile creates 0 to 3 posts
  rand(0..2).times do
    post =  Post.create!(
      profile_id: profile.id,
      title: Faker::Lorem.sentence,
      coachability: [rand(1..100), rand(1..100)]
    )
  end
end

# each profile creates a review with 5 to 13 tips for 3 to 7 posts
Profile.all.each do |profile|
  Post.all.sample(rand(3..5)).each do |post|
    # to make sure validation doesn't trigger
    if Profile.find(profile.id).sr > Profile.find(Post.find(post.id).profile_id).sr
      review = Review.create!(
        profile_id: profile.id,
        post_id: post.id,
        summary: Faker::Lorem.paragraph_by_chars(rand(175..300), false),
        rating: rand(-100..100),
        title: Faker::Lorem.sentence
      )
      rand(3..7).times do
        tip = Tip.create!(
          review_id: review.id,
          timestamp: rand(1..1800),
          comment: Faker::Lorem.paragraph_by_chars(rand(75..300), false),
          helpfulness: [rand(1..100), rand(1..100)],
          tags: Faker::Lorem.words(rand(0..9)).delete_if { |tag| tag.length < 3 }
        )
      end
    end
  end
end

# me
user = User.create!(email: 'jarosgregory@gmail.com', password: 'password', password_confirmation: 'password')
Profile.create(user_id: user.id, platform: 1, region: 0, tag: 'GamingBotanist', sr: 2551, reputation: 100, roles: ['support'])

# higher and lower rank user
user = User.create!(email: 'higher@example.com', password: 'password', password_confirmation: 'password')
Profile.create(user_id: user.id, platform: 1, region: 0, tag: 'higher', sr: 4500, reputation: 50, roles: ['support'])

user = User.create!(email: 'lower@example.com', password: 'password', password_confirmation: 'password')
Profile.create(user_id: user.id, platform: 2, region: 0, tag: 'lower', sr: 500, reputation: 50, roles: ['tank'])
