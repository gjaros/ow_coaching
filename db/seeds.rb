require 'faker'

case Rails.env
when 'test'
   User.create!(email: 'sample@example.com', password: 'password', password: 'password')
   Profile.create!(user_id: 1, platform: 0, region: 0, tag: 'tag', sr: 0)
   Coach.create!(profile_id: 1, reputation: 0, roles: ['tank'])
   Student.create!(profile_id: 1, reputation: 0, roles: ['tank'])
   Post.create!(student_id: 1, reviewed: false, title: 'title', link: 'https://www.youtube.com/watch?v=dlVTv8O151M', coachability: 0)
   Review.create!(cocah_id: 1, post_id: 1, summary: 'summary', rating: 0, title: 'title')
   Tip.create!(review_id: 1, timestamp: 0, comment: 'comment', helpfulness: 0, tag: ['positioning'])
when 'development'
end
