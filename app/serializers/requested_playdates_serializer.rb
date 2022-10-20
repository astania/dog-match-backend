class RequestedPlaydatesSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :notes, :host_dog, :invited_dogs
  has_many :playdate_requested_dogs, serializer: PlaydateHostAndInvitedDogsSerializer
end
