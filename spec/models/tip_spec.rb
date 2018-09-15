require 'rails_helper'

RSpec.describe Tip, type: :model do
  context 'validation tests' do
    it 'ensures presence of review_id' do
      tip = Tip.new(timestamp: 0, comment: 'comment').save
      expect(tip).to eq(false)
    end

    it 'ensures presence of timestamp' do
      tip = Tip.new(review_id: 1, comment: 'comment').save
      expect(tip).to eq(false)
    end

    it 'ensures presence of comment' do
      tip = Tip.new(review_id: 1, timestamp: 0).save
      expect(tip).to eq(false)
    end

    it 'should save successfully' do
      tip = Tip.new(review_id: 1, timestamp: 0, comment: 'comment').save
      expect(tip).to eq(true)
    end
  end
end
