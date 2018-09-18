class Post < ApplicationRecord
  belongs_to :student
  has_many :reviews

  validates :title, presence: true, length: { minimum: 3, maximum: 50 }
  validates :link, presence: true

  # TODO: link validation.
end
