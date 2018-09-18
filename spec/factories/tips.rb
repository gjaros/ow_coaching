FactoryBot.define do
  factory :tip do
    review
    timestamp { 0 }
    comment { 'Eius dolorem et. Optio tempora voluptatibus. Vero explicabo incidunt. Vita.' }
    helpfulness { 0 }
    tags { ['tags'] }
  end

  factory :random_tip, class: Tip do
    review
    timestamp { rand(0..1800) }
    comment { Faker::Lorem.paragraph_by_chars(rand(75..300), false) }
    helpfulness { rand(-100..100) }
    tags { Faker::Lorem.words(9).delete_if { |tag| tag.length < 3 } }
  end
end
