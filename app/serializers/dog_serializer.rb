class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed, :user_id, :profile_pic, :about_me
  belongs_to :user
end
