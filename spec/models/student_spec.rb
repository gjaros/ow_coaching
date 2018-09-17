require 'rails_helper'

RSpec.describe Student, type: :model do
  context 'validation tests' do
    let(:student) { build(:student) }
    it 'ensures roles presence' do
      student.roles = nil
      expect(student.save).to eq(false)
    end

    it 'should save successfully' do
      expect(student.save).to eq(true)
    end
  end
end
