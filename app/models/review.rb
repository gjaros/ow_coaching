class SRDifferenceValidator < ActiveModel::Validator
  def validate(record)
    if Profile.find(record.coach_id).sr < Profile.find(Post.find(record.post_id).student_id).sr
      record.errors[:base]
    end
  end
end

class Review < ApplicationRecord
  belongs_to :coach
  belongs_to :post
  has_many :tips

  validates :title, presence: true, length: { minimum: 3, maximum: 50 }
  validates :summary, presence: true, length: { minimum: 175, maximum: 40000 }
  validates_with SRDifferenceValidator

end
