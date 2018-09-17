require 'rails_helper'

RSpec.describe Post, type: :model do
  context 'validation tests' do
    let(:post) { build(:post) }
    it 'ensures presence of title' do
      post.title = nil
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
