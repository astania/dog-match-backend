class DogSerializer < ActiveModel::Serializer
  attributes :name, :breed, :profile_pic, :about_me, :id, :user_id, :hosted_playdates, :requested_playdates
  belongs_to :user
  # has_many :playdates
  has_many :hosted_playdates
  #, serializer: HostedPlaydatesSerializer 
  has_many :requested_playdates
  #, serializer: RequestedPlaydatesSerializer
  
  
  # has_many :accepted_playdates, if: -> { object.is_completed?(current_user) }
  
  # attribute :is_completed do
  #   object.is_completed?(current_user)
  # end
  
end
