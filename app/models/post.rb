class Post < ApplicationRecord
  paginates_per 5

  belongs_to :profile
  has_many :reviews, dependent: :destroy
  has_one_attached :video, dependent: :destroy
  has_one_attached :thumbnail, dependent: :destroy

  validates :title, presence: true, length: { minimum: 3, maximum: 50 }

  serialize :coachability, Array

  # TODO: link validation.
end
