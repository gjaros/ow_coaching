FactoryBot.define do
  factory :student do
    profile
    reputation { 0 }
    roles { ['tank'] }
  end

  factory :random_student, class: Student do
    profile
    reputation { rand(-100..100) }
    roles { [['tank', 'support', 'damage'].sample(rand(1..3))] }
  end
end
