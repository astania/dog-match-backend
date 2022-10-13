class DogSerializer < ActiveModel::Serializer
  attributes :name, :breed, :profile_pic, :about_me, :id, :user_id
  belongs_to :user
  has_many :play_dates
  has_many :play_date_dogs
end
