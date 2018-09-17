FactoryBot.define do
  factory :review do
    coach
    post
    summary { 'summary' }
    rating { 1 }
    title { 'title' }
  end

  factory :random_review, class: Review do
    coach
    post
    summary { Faker::Lorem.paragraph }
    rating { rand(1..10) }
    title { Faker::Lorem.sentence }
  end
end
