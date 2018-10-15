class SRDifferenceValidator < ActiveModel::Validator
  def validate(record)
    if Profile.find(record.profile_id).sr < Profile.find(Post.find(record.post_id).profile_id).sr
      record.errors.add(:sr_difference, 'reviewer\'s sr cannot be lower than poster\'s')
    end
  end
end
