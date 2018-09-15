class Profile < ApplicationRecord
  validates :platform, presence: true
  validates :region, presence: true
  validates :tag, presence: true
  validates :sr, presence:true

  belongs_to :user

  enum platform: [:pc, :xbl, :psn]
  enum region: [:us, :eu]
end
