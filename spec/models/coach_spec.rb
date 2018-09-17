require 'rails_helper'

RSpec.describe Coach, type: :model do
  context 'validation tests' do
    let(:coach) { build(:coach) }
    it 'ensures roles presence' do
      coach.roles = nil
      expect(coach.save).to eq(false)
    end

    it 'should save successfully' do
      expect(coach.save).to eq(true)
    end
  end
end
