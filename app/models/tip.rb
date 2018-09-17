class Tip < ApplicationRecord
  belongs_to :review

  validates :timestamp, presence: true
  validates :comment, presence: true

  serialize :tag, Array
end
