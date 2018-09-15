json.extract! student, :id, :profile_id, :reputation, :roles, :created_at, :updated_at
json.url student_url(student, format: :json)
