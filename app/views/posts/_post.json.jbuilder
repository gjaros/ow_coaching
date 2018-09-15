json.extract! post, :id, :student_id, :reviewed, :title, :link, :coachability, :created_at, :updated_at
json.url post_url(post, format: :json)
