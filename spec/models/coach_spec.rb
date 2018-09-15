require 'rails_helper'

RSpec.describe Coach, type: :model do
  context 'validation tests' do
    it 'ensures roles presence' do
      coach = Coach.new(profile_id: 1).save
      expect(coach).to eq(false)
    end

    it 'should save successfully' do
      coach = Coach.new(profile_id: 1, roles: ['tank']).save
      expect(coach).to eq(true)
    end
  end
end
