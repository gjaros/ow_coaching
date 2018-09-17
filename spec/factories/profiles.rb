FactoryBot.define do
  factory :profile do
    user
    platform { 0 }
    region { 0 }
    tag { 'tag' }
    sr { 1 }
  end

  factory :random_profile, class: User do
    user
    platform { rand(0..2) }
    region { rand(0..1) }
    tag { Faker::Esport.player }
    sr { rand(1..5000) }
  end
end
