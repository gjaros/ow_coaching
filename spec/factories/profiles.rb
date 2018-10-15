FactoryBot.define do
  factory :profile do
    user
    platform { 0 }
    region { 0 }
    sequence(:tag) { |n| "tag#{n}" }
    sr { 1 }
    reputation { 0 }
    roles { ['tank'] }
  end

  factory :random_profile, class: Profile do
    association :user, factory: :random_user
    platform { rand(0..2) }
    region { rand(0..1) }
    tag { Faker::Name.first_name }
    sr { rand(1..5000) }
    reputation { rand(-100..100) }
    roles { ['tank', 'support', 'damage'].sample(rand(1..3)) }
  end
end
