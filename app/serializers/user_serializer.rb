class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :about_me, :profile_pic
  has_many :dogs
end
