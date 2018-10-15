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

  context 'restriction tests' do
    let(:random_profile) { build(:random_profile) }
    let(:random_post) { build(:random_post) }
    let(:random_review) { build(:random_review) }

    it 'makes sure review can\'t be submitted by coach to student who\'s sr is higher' do
      profile1 = create(:random_profile, sr: 30)
      profile2 = create(:random_profile, sr: 15)

      post = create(:random_post, profile_id: profile1.id)
      review = build(:random_review, profile_id: profile2.id, post_id: post.id)

      expect(review).to_not be_valid
    end
  end
end
