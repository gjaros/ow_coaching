require 'rails_helper'

RSpec.describe Post, type: :model do
  context 'validation tests' do
    let(:post) { build(:post) }
    it 'ensures presence of title' do
      post.title = nil
      expect(post.save).to eq(false)
    end

    it 'ensures length of title >= 3 characters' do
      post.title = 'Ti'
      expect(post.save).to eq(false)
    end

    it 'ensures length of title <= 40 characters' do
      post.title = 'Title of this post is too long. It needs to be shorter to pass this test'
      expect(post.save).to eq(false)
    end

    it 'ensures presence of link' do
      post.link = nil
      expect(post.save).to eq(false)
    end

    it 'should save successfully' do
      expect(post.save).to eq(true)
    end
  end
end
