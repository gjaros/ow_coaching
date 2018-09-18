FactoryBot.define do
  factory :coach do
    profile
    reputation { 0 }
    roles { ['tank'] }
  end

  factory :random_coach, class: Coach do
    profile
    reputation { rand(-100..100) }
    roles { ['tank', 'support', 'damage'].sample(rand(1..3)) }
  end
end
