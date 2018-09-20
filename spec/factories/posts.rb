FactoryBot.define do
  factory :post do
    profile
    title { 'title' }
    link { 'https://www.youtube.com/watch?v=x2qapy3s6Tg' }
    coachability { 0 }
  end

  factory :random_post, class: Post do
    association :profile, factory: :random_profile
    title { Faker::Lorem.sentence }
    link { Faker::Internet.url('https://www.youtube.com') }
    coachability { rand(-100..100) }
  end
end
