FactoryBot.define do
  factory :profile do
    user
    platform { 0 }
    region { 0 }
    sequence(:tag) { |n| "tag#{n}" }
    sr { 1 }
  end

  factory :random_profile, class: Profile do
    association :user, factory: :random_user
    platform { rand(0..2) }
    region { rand(0..1) }
    tag { Faker::Esport.player }
    sr { rand(1..5000) }
  end
end
