require 'rails_helper'

RSpec.describe Tip, type: :model do
  context 'validation tests' do
    let(:tip) { build(:tip) }
    it 'ensures presence of timestamp' do
      tip.timestamp = nil
      expect(tip.save).to eq(false)
    end

    it 'ensures presence of comment' do
      tip.comment = nil
      expect(tip.save).to eq(false)
    end

    it 'ensures comment length >= 75 characters' do
      tip.comment = Faker::Lorem.paragraph_by_chars(74, false)
      expect(tip.save).to eq(false)
    end

    it 'ensures comment length <= 300 characters' do
      tip.comment = Faker::Lorem.paragraph_by_chars(301, false)
      expect(tip.save).to eq(false)
    end

    it 'should save successfully' do
      expect(tip.save).to eq(true)
    end
  end

  context 'before_validation tests' do
    let(:tip) { build(:tip) }
    it 'ensures tags number limit <= 10' do
      tip.tags = Faker::Lorem.words(50)
      expect(tip).to be_valid
    end

    it 'ensures individual tags length > 3 characters' do
      tip.tags = ['tg']
      expect(tip).to be_valid
    end

    it 'ensures individual tags length < 15 characters' do
      tip.tags = ['Dignissiimossve']
      expect(tip).to be_valid
    end
  end
end
