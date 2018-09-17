require 'rails_helper'

RSpec.describe User, type: :model do
  context 'validations tests' do
    let(:user) { build(:user) }
    it 'ensures presence of email' do
      user.email = nil
      expect(user.save).to eq(false)
    end

    it 'ensures presence of password' do
      user.password = nil
      expect(user.save).to eq(false)
    end

    it 'should save successfully' do
      expect(user.save).to eq(true)
    end
  end
end
