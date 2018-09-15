# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_09_14_193126) do

  create_table "coaches", force: :cascade do |t|
    t.integer "profile_id"
    t.integer "reputation"
    t.string "roles"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["profile_id"], name: "index_coaches_on_profile_id"
  end

  create_table "posts", force: :cascade do |t|
    t.integer "student_id"
    t.boolean "reviewed"
    t.string "title"
    t.string "link"
    t.integer "coachability"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["student_id"], name: "index_posts_on_student_id"
  end

  create_table "profiles", force: :cascade do |t|
    t.integer "user_id"
    t.integer "platform"
    t.integer "region"
    t.string "tag"
    t.integer "sr"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_profiles_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "coach_id"
    t.integer "post_id"
    t.text "summary"
    t.integer "rating"
    t.string "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["coach_id"], name: "index_reviews_on_coach_id"
    t.index ["post_id"], name: "index_reviews_on_post_id"
  end

  create_table "students", force: :cascade do |t|
    t.integer "profile_id"
    t.integer "reputation"
    t.string "roles"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["profile_id"], name: "index_students_on_profile_id"
  end

  create_table "tips", force: :cascade do |t|
    t.integer "review_id"
    t.integer "timestamp"
    t.text "comment"
    t.integer "helpfulness"
    t.string "tag"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["review_id"], name: "index_tips_on_review_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
