json.extract! tip, :id, :review_id, :timestamp, :comment, :helpfulness, :tag, :created_at, :updated_at
json.url tip_url(tip, format: :json)
