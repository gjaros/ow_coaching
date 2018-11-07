# json.array! @posts, partial: 'posts/post', as: :post

# @reviews = @post.reviews

# include Rails.application.routes.url_helpers

json.array! @posts do |post|
  json.extract! post, :id, :profile_id, :title, :created_at, :updated_at
  json.coachability (post.coachability[0] == 0 && post.coachability[1] == 0) ? 0 : (post.coachability[0]/(post.coachability[0] + post.coachability[1]).to_f * 100).to_i
  json.poster_profile post.profile
  json.number_of_reviews pluralize(post.reviews.length, 'review')
  json.video_url rails_blob_path(post.video)
  json.thumbnail_url rails_blob_path(post.thumbnail)

  json.reviews(post.reviews) do |review|
    json.extract! review, :id, :profile_id, :post_id, :summary, :rating, :title, :created_at, :updated_at
    json.reviewer_profile review.profile

    json.tips(review.tips) do |tip|
      json.extract! tip, :id, :review_id, :timestamp, :comment, :helpfulness, :tags, :created_at, :updated_at
    end
  end
end
