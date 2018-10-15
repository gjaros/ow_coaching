class Profile < ApplicationRecord
  validates :platform, presence: true
  validates :region, presence: true
  validates :tag, presence: true, uniqueness: true
  validates :sr, presence:true
  validates :roles, presence: true

  serialize :roles, Array

  belongs_to :user

  enum platform: [:pc, :xbl, :psn]
  enum region: [:us, :eu]

  # TODO: validate that platform + region + tag is an actual account, assign SR
end
