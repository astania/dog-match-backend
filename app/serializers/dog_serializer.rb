class DogSerializer < ActiveModel::Serializer
  attributes :name, :breed, :profile_pic, :about_me, :id
  belongs_to :user
end
