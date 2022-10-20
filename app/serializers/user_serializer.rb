class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :about_me, :profile_pic
  has_many :dogs
  # has_many :requested_playdates
  # has_many :hosted_playdates

 


end
