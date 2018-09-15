require 'rails_helper'

RSpec.describe Post, type: :model do
  context 'validation tests' do
    it 'ensures presence of student_id' do
      post = Post.new(reviewed: false, title: 'title', link: 'https://www.youtube.com/watch?v=dlVTv8O151M').save
      expect(post).to eq(false)
    end

    it 'ensures presence of reviewed' do
      post = Post.new(student_id: 1, title: 'title', link: 'https://www.youtube.com/watch?v=dlVTv8O151M').save
      expect(post).to eq(false)
    end

    it 'ensures presence of title' do
      post = Post.new(student_id: 1, reviewed: false, link: 'https://www.youtube.com/watch?v=dlVTv8O151M').save
      expect(post).to eq(false)
    end

    it 'ensures presence of link' do
      post = Post.new(student_id: 1, reviewed: false, title: 'title').save
      expect(post).to eq(false)
    end

    it 'should save successfully' do
      post = Post.new(student_id: 1, reviewed: false, title: 'title', link: 'https://www.youtube.com/watch?v=dlVTv8O151M').save
      expect(post).to eq(true)
    end
  end
end
