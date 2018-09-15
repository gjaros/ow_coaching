require 'rails_helper'

RSpec.describe Review, type: :model do
  context 'validation tests' do
    it 'ensures presence of coach_id' do
      review = Review.new(post_id: 1, title: 'title', summary: 'summary').save
      expect(review).to eq(false)
    end

    it 'ensures presence of post_id' do
      review = Review.new(coach_id: 1, title: 'title', summary: 'summary').save
      expect(review).to eq(false)
    end

    it 'ensures validation of title' do
      review = Review.new(post_id: 1, coach_id: 1, summary: 'summary').save
      expect(review).to eq(false)
    end

    it 'ensures validation of summary' do
      review = Review.new(post_id: 1, coach_id: 1, title: 'title').save
      expect(review).to eq(false)
    end

    it 'should save successfully' do
      review = Review.new(coach_id: 1, title: 'title').save
      expect(review).to eq(true)
    end
  end
end
