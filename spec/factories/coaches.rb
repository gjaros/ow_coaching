FactoryBot.define do
  factory :coach do
    profile
    reputation { 0 }
    roles { ['tank'] }
  end

  factory :random_coach, class: Coach do
    profile
    reputation { rand(0..100) }
    roles { [['tank', 'support', 'damage'].sample] }
  end
end
