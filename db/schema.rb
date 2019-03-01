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

ActiveRecord::Schema.define(version: 2019_03_01_221205) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cars", force: :cascade do |t|
    t.string "make", null: false
    t.string "model", null: false
    t.string "trim"
    t.string "description", null: false
    t.integer "year", null: false
    t.integer "mpg", null: false
    t.integer "num_of_seats", null: false
    t.integer "num_of_doors", null: false
    t.boolean "transmission", null: false
    t.boolean "gas", null: false
    t.integer "listing_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["listing_id"], name: "index_cars_on_listing_id", unique: true
    t.index ["make"], name: "index_cars_on_make"
    t.index ["user_id"], name: "index_cars_on_user_id"
  end

  create_table "listings", force: :cascade do |t|
    t.string "guidelines", null: false
    t.string "location", null: false
    t.text "extras"
    t.integer "trip_counter", null: false
    t.integer "price", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_listings_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "firstname", null: false
    t.string "lastname", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["firstname"], name: "index_users_on_firstname"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
