class Coach < ApplicationRecord
  belongs_to :profile

  validates :roles, presence: true

  serialize :roles, Array
end
