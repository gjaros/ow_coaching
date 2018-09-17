FactoryBot.define do
  factory :user do
    sequence(:email)      { |n| "person_#{n}@example.com" }
    password { 'password' }
  end

  factory :random_user, class: User do
    email { Faker::Internet.free_email }
    password { 'password' }
  end
end
