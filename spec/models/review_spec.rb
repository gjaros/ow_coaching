require 'rails_helper'

RSpec.describe Review, type: :model do
  context 'validation tests' do
    let(:review) { build(:review) }
    it 'ensures validation of summary' do
      review.summary = nil
      expect(review.save).to eq(false)
    end
    
    it 'ensures validation of title' do
      review.title = nil
      expect(review.save).to eq(false)
    end

    it 'should save successfully' do
      expect(review.save).to eq(true)
    end
  end
end
