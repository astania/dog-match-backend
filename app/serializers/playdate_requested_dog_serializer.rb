class PlaydateRequestedDogSerializer < ActiveModel::Serializer
  attributes :id, :dog_id, :playdate_id, :accepted
  belongs_to :dog
end
