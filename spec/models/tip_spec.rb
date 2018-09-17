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

    it 'should save successfully' do
      expect(tip.save).to eq(true)
    end
  end
end
