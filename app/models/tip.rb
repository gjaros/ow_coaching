class Tip < ApplicationRecord
  before_validation :validate_individual_tags

  belongs_to :review

  validates :timestamp, presence: true
  validates :comment, presence: true, length: { minimum: 75, maximum: 300 }
  validates :tags, length: { maximum: 10 }

  serialize :tags, Array

  private

  def validate_individual_tags
    self.tags.delete_if { |tag| tag.length < 3 || tag.length > 15 }

    until self.tags.length < 11
      self.tags.pop
    end
  end
end
