FactoryBot.define do
  factory :tip do
    review
    timestamp { 0 }
    comment { 'comment' }
    helpfulness { 0 }
    tag { ['tag'] }
  end

  factory :random_tip, class: Tip do
    review
    timestamp { rand(0..1800) }
    comment { Faker::Lorem.sentence }
    helpfulness { rand(-100..100) }
    tag { ['tag'] }
  end
end
