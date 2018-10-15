FactoryBot.define do
  factory :review do
    profile
    post
    summary { 'Nisi aut eum. Omnis quibusdam assumenda. Laboriosam rerum eveniet. Voluptatem quo a. Est libero a. Culpa ab rem. Et voluptatem iusto. Temporibus impedit dolor. Blanditiis qui.' }
    rating { 1 }
    title { 'title' }
  end

  factory :random_review, class: Review do
    association :profile, factory: :random_profile
    association :post, factory: :random_post
    summary { Faker::Lorem.paragraph_by_chars(rand(175..300), false) }
    rating { rand(-100..100) }
    title { Faker::Lorem.sentence }
  end
end
