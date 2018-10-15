json.extract! review, :id, :profile_id, :post_id, :summary, :rating, :title, :created_at, :updated_at
json.url review_url(review, format: :json)
