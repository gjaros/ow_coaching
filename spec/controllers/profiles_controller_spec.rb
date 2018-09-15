require 'rails_helper'

RSpec.describe ProfilesController, type: :controller do
  context 'GET #index' do
    it 'returns a success response' do
      get :index
      expect(response).to be_success
    end
  end

  context 'GET #show' do
    user = User.new(email: 'sample@example.com', password: 'password', password_confirmation: 'password').save
    it 'returns a success response' do
      profile = Profile.create!(user_id: 1, platform: 0, region: 0, tag: 'GamerTag', sr: 1600)
      get :show, params: { id: profile.to_param }
      expect(response).to be_success
    end
  end
end
