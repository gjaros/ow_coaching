FactoryBot.define do
  factory :student do
    profile
    reputation { 0 }
    roles { ['tank'] }
  end

  factory :random_student, class: Student do
    profile
    reputation { rand(0..100) }
    roles { [['tank', 'support', 'damage'].sample] }
  end
end
