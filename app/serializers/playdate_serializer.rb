class PlaydateSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :notes, :host_dog, :invited_dogs
  # has_many :dogs
  # has_many :playdate_requested_dogs, if: :condition
  #!!
  belongs_to :host_dog, serializer: PlaydateHostAndInvitedDogsSerializer
  has_many :invited_dogs, serializer: PlaydateHostAndInvitedDogsSerializer

  #!!
  
  # has_many :accepted_dogs
  # has_many :pending_dogs
  # has_many :declined_dogs
  
  # def condition 
  #   @instance_options [:flag] != "restrict"
  # end 
    
end
