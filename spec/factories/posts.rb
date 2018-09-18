FactoryBot.define do
  factory :post do
    student
    reviewed { false }
    title { 'title' }
    link { 'https://www.youtube.com/watch?v=x2qapy3s6Tg' }
    coachability { 0 }
  end

  factory :random_post, class: Post do
    student
    reviewed { Faker::Boolean.boolean }
    title { Faker::Lorem.sentence }
    link { Faker::Internet.url('https://www.youtube.com') }
    coachability { rand(-100..100) }
  end
end
