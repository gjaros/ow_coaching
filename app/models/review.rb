class Review < ApplicationRecord
  belongs_to :coach
  belongs_to :post
  has_many :tips

  validates :title, presence: true
  validates :summary, presence: true
end
