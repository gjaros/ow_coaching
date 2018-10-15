FactoryBot.define do
  factory :post do
    profile
    title { 'title' }
    coachability { 0 }
  end

  factory :random_post, class: Post do
    association :profile, factory: :random_profile
    title { Faker::Lorem.sentence }\
    coachability { rand(-100..100) }
  end
end
