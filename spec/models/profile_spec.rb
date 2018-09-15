require 'rails_helper'

RSpec.describe Profile, type: :model do
  context 'validation tests' do
    it 'ensures user_id presence' do
      profile = Profile.new(platform: 0, region: 0, tag: 'GamerTag', sr: 1600).save
      expect(profile).to eq(false)
    end

    it 'ensures platform presence' do
      profile = Profile.new(user_id: 1, region: 0, tag: 'GamerTag', sr: 1600).save
      expect(profile).to eq(false)
    end

    it 'ensures region presence' do
      profile = Profile.new(user_id: 1, platform: 0, tag: 'GamerTag', sr: 1600).save
      expect(profile).to eq(false)
    end

    it 'ensures tag presence' do
      profile = Profile.new(user_id: 1, platform: 0, region: 0, sr: 1600).save
      expect(profile).to eq(false)
    end

    it 'ensures sr presence' do
      profile = Profile.new(user_id: 1, platform: 0, region: 0, tag: 'GamerTag').save
      expect(profile).to eq(false)
    end

    it 'should save successfully' do
      profile = Profile.new(user_id: 1, platform: 0, region: 0, tag: 'GamerTag', sr: 1600).save
      expect(profile).to eq(true)
    end
  end
end
