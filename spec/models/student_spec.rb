require 'rails_helper'

RSpec.describe Student, type: :model do
  context 'validation tests' do
    it 'ensures roles presence' do
      student = Student.new(profile_id: 1).save
      expect(student).to eq(false)
    end

    it 'should save successfully' do
      student = Student.new(profile_id: 1, roles: ['tank']).save
      expect(student).to eq(true)
    end
  end
end
