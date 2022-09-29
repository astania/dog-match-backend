class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed, :user_id, :profile_pic, :about_me
end
