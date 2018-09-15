class Post < ApplicationRecord
  belongs_to :student
  has_many :reviews

  validates :reviewed, presence: true
  validates :title, presence: true
  validates :link, presence: true
end
