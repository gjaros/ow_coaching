require 'rails_helper'

RSpec.describe Profile, type: :model do
  context 'validation tests' do
    let(:profile) { build(:profile) }
    it 'ensures platform presence' do
      profile.platform = nil
      expect(profile.save).to eq(false)
    end

    it 'ensures region presence' do
      profile.region = nil
      expect(profile.save).to eq(false)
    end

    it 'ensures tag presence' do
      profile.tag = nil
      expect(profile.save).to eq(false)
    end

    it 'ensures tag uniqueness' do
      profile1 = create(:random_profile, tag: 'tag')
      profile2 = build(:random_profile, tag: 'tag')
      expect(profile2).to_not be_valid
    end

    it 'ensures sr presence' do
      profile.sr = nil
      expect(profile.save).to eq(false)
    end

    it 'ensures role presence' do
      profile.roles = nil
      expect(profile.save).to eq(false)
    end

    it 'should save successfully' do
      expect(profile.save).to eq(true)
    end
  end
end
