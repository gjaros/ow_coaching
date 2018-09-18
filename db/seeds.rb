require 'faker'

user = User.create!(email: Faker::Internet.free_email, password: 'password', password_confirmation: 'password')
profile = Profile.create!(user_id: user.id, platform: rand(0..2), region: rand(0..1), tag: Faker::Esport.player, sr: rand(1..5000))
coach = Coach.create!(profile_id: profile.id, reputation: rand(-100..100), roles: [['tank', 'support', 'damage'].sample(rand(1..3))])
student = Student.create!(profile_id: profile.id, reputation: rand(-100..100), roles: [['tank', 'support', 'damage'].sample(rand(1..3))])
post =  Post.create!(student_id: student.id, reviewed: Faker::Boolean.boolean, title: Faker::Lorem.sentence, link: Faker::Internet.url('https://www.youtube.com'), coachability: rand(-100..100))
review = Review.create!(coach_id: coach.id, post_id: post.id, summary: Faker::Lorem.paragraph_by_chars(rand(175..300), false), rating: rand(-100..100), title: Faker::Lorem.sentence)


# case Rails.env
#   when 'test'
#
#   when 'development'
# end
