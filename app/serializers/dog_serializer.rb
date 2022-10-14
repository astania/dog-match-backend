class DogSerializer < ActiveModel::Serializer
  attributes :name, :breed, :profile_pic, :about_me, :id, :user_id
  belongs_to :user
  has_many :playdates
  
end
