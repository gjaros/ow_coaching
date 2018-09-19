require 'faker'

20.times do
  user = User.create!(
    email: Faker::Internet.free_email,
    password: 'password',
    password_confirmation: 'password'
  )
  profile = Profile.create!(
    user_id: user.id,
    platform: rand(0..2),
    region: rand(0..1),
    tag: Faker::Name.first_name,
    sr: rand(1..5000),
    reputation: rand(-100..100),
    roles: [['tank', 'support', 'damage'].sample(rand(1..3))]
  )
end

# post =  Post.create!(student_id: student.id, reviewed: Faker::Boolean.boolean, title: Faker::Lorem.sentence, link: Faker::Internet.url('https://www.youtube.com'), coachability: rand(-100..100))
# review = Review.create!(coach_id: coach.id, post_id: post.id, summary: Faker::Lorem.paragraph_by_chars(rand(175..300), false), rating: rand(-100..100), title: Faker::Lorem.sentence)
