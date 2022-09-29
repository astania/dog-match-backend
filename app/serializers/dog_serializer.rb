class DogSerializer < ActiveModel::Serializer
  attributes :name, :breed, :profile_pic, :about_me
  belongs_to :user
end
