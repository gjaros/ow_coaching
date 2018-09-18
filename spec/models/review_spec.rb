require 'rails_helper'

RSpec.describe Review, type: :model do
  context 'validation tests' do
    let(:review) { build(:review) }
    it 'ensures presence of summary' do
      review.summary = nil
      expect(review.save).to eq(false)
    end

    it 'ensures length of summary >= 200 characters' do
      review.summary = Faker::Lorem.sentence
      expect(review.save).to eq(false)
    end

    it 'ensures length of summary <= 40,000 characters' do
      review.summary = Faker::Lorem.paragraph_by_chars(40001, false)
      expect(review.save).to eq(false)
    end

    it 'ensures presence of title' do
      review.title = nil
      expect(review.save).to eq(false)
    end

    it 'ensures length of title >= 3 characters' do
      review.title = 'Ti'
      expect(review.save).to eq(false)
    end

    it 'ensures length of title <= 40 characters' do
      review.title = 'Title of this post is too long. It needs to be shorter to pass this test'
      expect(review.save).to eq(false)
    end

    it 'should save successfully' do
      expect(review.save).to eq(true)
    end
  end
end
