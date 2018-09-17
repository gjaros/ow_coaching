class Post < ApplicationRecord
  belongs_to :student
  has_many :reviews

  validates :title, presence: true
  validates :link, presence: true
end
