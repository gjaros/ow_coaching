require 'rails_helper'

RSpec.describe Profile, type: :model do
  context 'validation tests' do
    let(:profile) { build(:profile) }
    it 'ensures profile_id presence' do
      profile.user_id = nil
      expect(profile.save).to eq(false)
    end

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

    it 'ensures sr presence' do
      profile.sr = nil
      expect(profile.save).to eq(false)
    end

    it 'should save successfully' do
      expect(profile.save).to eq(true)
    end
  end
end
