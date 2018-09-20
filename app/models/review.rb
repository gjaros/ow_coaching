class Review < ApplicationRecord
  belongs_to :profile
  belongs_to :post
  has_many :tips

  validates :title, presence: true, length: { minimum: 3, maximum: 50 }
  validates :summary, presence: true, length: { minimum: 175, maximum: 40000 }
  validates_with SRDifferenceValidator
end
